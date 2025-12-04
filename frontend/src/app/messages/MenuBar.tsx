import { getCurrentPushSubscription, registerPushNotifications, unregisterPushSubscriptionToServer } from "@/src/notifications/pushService";
import { BellOff, BellRing, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuBarProps {
  onMenuClick: () => void;
}

export default function MenuBar({ onMenuClick }: MenuBarProps) {
    return (
        <div className="flex items-center justify-between gap-3 border-b border-slate-700 bg-slate-800/50 p-4">
                <button
                    onClick={onMenuClick}
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                >
                    <Users className="w-5 h-5" />
                    <span className="font-medium">New Chat</span>
                </button>
                <PushSubscriptionToggleButton />
        </div>
    );
}

function PushSubscriptionToggleButton() {
    const [hasActivePushSubscription, setHasActivePushSubscription] = useState<boolean>()

    useEffect(() => {
        async function getActivePushSubscription() {
            const subscription = await getCurrentPushSubscription();
            setHasActivePushSubscription(!!subscription);
        }
        getActivePushSubscription();
}, []);

    async function setPushSubscriptionEnabled(enabled: boolean) {
        try {
        if (enabled) {
            await registerPushNotifications();;
        } else {
            await unregisterPushSubscriptionToServer();
        }
        setHasActivePushSubscription(enabled);
    }catch (error) {
        console.error("Error toggling push subscription:", error);
        if (enabled && Notification.permission !== "denied") {
            alert("Enable push notifications.");
        } else {
            alert("Something went wrong, while please try again.");
        }
    }
    }
    


    if (hasActivePushSubscription === undefined) return null;

    return (
    <div>
        {hasActivePushSubscription ? (
            <span title="Disable push notifications">
                <BellOff 
                    className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors w-5 h-5" 
                    onClick={() => setPushSubscriptionEnabled(false)}
                />
            </span>
        ):(
            <span title="Enable push notifications">
                <BellRing 
                    className="cursor-pointer text-gray-400 hover:text-white transition-colors w-5 h-5" 
                    onClick={() => setPushSubscriptionEnabled(true)}
                />
            </span>
        )}
    </div>)
}