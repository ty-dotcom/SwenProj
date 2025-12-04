"use client";
import { useUser } from "@clerk/nextjs";

export default function PaymentSuccess({
    amount
}: {
    amount: string
}) {

    const { user } = useUser(); 
    const emailAdd = user?.emailAddresses[0].emailAddress;
    
    if (!user?.id) {
        return;
      }

    function generateTransID() {
        var uuid;
        
        if (typeof crypto !== 'undefined' && crypto.randomUUID) 
        {
            uuid = crypto.randomUUID();
        }
        else
        {
            console.log("Error");
        }
        return uuid?.substring(0, 8).toUpperCase();
    }

    return (
        <div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md 
        bg-gradient-to-tr from-blue-500 to-purple-500">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
                <h2 className="text-2xl">You successfully sent</h2>

                <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
                    $ {amount}
                </div>
            </div>

            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2">Transaction Receipt</h1>
                <h2 className="text-2xl">Transaction ID: {generateTransID()}</h2>

                <div>
                    <span className="text-2xl ">
                        <h3>Name: {user.fullName}</h3> 
                        <h3>Email: {emailAdd}</h3>
                    </span>
                </div>
            </div>
        </div>
    );
}