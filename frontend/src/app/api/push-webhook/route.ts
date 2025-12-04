import { NextResponse } from "next/server";
import { StreamPushEvent } from "./StreamPushEvent";
import { clerkClient } from "@clerk/nextjs/server";
import webPush from "web-push";
import { title } from "process";
import { env } from "@/src/env";

export async function POST(request: Request) {
    try{
        const event:StreamPushEvent = await request.json();

        console.log("Push web event ",JSON.stringify(event));

        const sender = event.user;
        const recipientIds = event.channel.members.map((member) => member.user_id).filter((id) => id !== sender.id);
        const channelId = event.channel.id;

        const recipients =  (await (await clerkClient()).users.getUserList({
            userId: recipientIds
        })).data;

        const pushPromises = recipients.map(recipient => { 
            const subscriptions = recipient.privateMetadata.subscriptions || [];
            return subscriptions.map((subscription)=> webPush.sendNotification(
                subscription,
                JSON.stringify({
                    title: sender.name,
                    body: event.message.text,
                    icon: sender.image,
                    image: event.message.attachments[0]?.image_url || event.message.attachments[0]?.thumb_url,
                    channelId,
                }),
                {
                    vapidDetails:{
                        subject: "softwareproj3@gmail.com",
                        publicKey: env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
                        privateKey: env.WEB_PUSH_PRIVATE_KEY,
                    }
                }
            ))
        }).flat();

        await Promise.all(pushPromises);

        return NextResponse.json(
            { success: true }, 
            { status: 200 }
        );

    }catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}