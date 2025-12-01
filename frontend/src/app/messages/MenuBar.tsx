import { getCurrentPushSubscription, registerPushNotifications, unregisterPushSubscriptionToServer } from "@/src/notifications/pushService";
import { BellOff, BellRing } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuBarProps {
  onMenuClick: () => void;
}

export default function MenuBar({ onMenuClick }: MenuBarProps) {
    return (
        <div className="flex items-center justify-between gap-3 border-e border-e-amber-50 p-3">
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
                <BellOff className="cursor-pointer" onClick={() => setPushSubscriptionEnabled(false)}/>
            </span>
        ):(
            <span title="Enable push notifications">
                <BellRing className="cursor-pointer" onClick={() => setPushSubscriptionEnabled(true)}/>
            </span>
        )}
    </div>)
}

