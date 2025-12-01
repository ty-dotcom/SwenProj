import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { PushSubscription } from "web-push";

export async function POST(request: Request) {
  try {
    const newSubscription: PushSubscription | undefined = await request.json();

    if (!newSubscription) {
      return NextResponse.json(
        { message: "No push subscription provided." },
        { status: 400 }
      );
    }

    console.log("Received new push subscription:", newSubscription);

    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized. User not logged in." },
        { status: 401 }
      );
    }

    const userSubscriptions = user.privateMetadata.subscriptions || [];

    const updatedSubscriptions = userSubscriptions.filter(subscription => subscription.endpoint !== newSubscription.endpoint);    
    
    updatedSubscriptions.push(newSubscription);

    (await clerkClient()).users.updateUser(user.id, {
      privateMetadata: { subscriptions: updatedSubscriptions },
    });

    return NextResponse.json(
      { message: "Push subscription registered successfully." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error registering push subscription:", error);
    return NextResponse.json(
      { message: "Internal Server Error. "},
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const subscriptionToRemove: PushSubscription | undefined = await request.json();
    
    if (!subscriptionToRemove) {
      return NextResponse.json(
        { message: "No push subscription provided." },
        { status: 400 }
      );
    }

    console.log("Removing push subscription:", subscriptionToRemove);

    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized. User not logged in." },
        { status: 401 }
      );
    }

    const userSubscriptions = user.privateMetadata.subscriptions || [];

    const updatedSubscriptions = userSubscriptions.filter(subscription => subscription.endpoint !== subscriptionToRemove.endpoint);    
    
    updatedSubscriptions.push(subscriptionToRemove);

    (await clerkClient()).users.updateUser(user.id, {
      privateMetadata: { subscriptions: updatedSubscriptions },
    });

    return NextResponse.json(
      { message: "Subscription removed successfully." },
      { status: 200 }
    );

    } catch (error) {
        console.error("Error removing push subscription:", error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 }
    );
  }
}