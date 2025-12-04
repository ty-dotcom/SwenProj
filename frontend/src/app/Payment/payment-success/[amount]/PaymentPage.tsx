"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function PaymentSuccess({
    amount
}: {
    amount: string
}) {

    const { user } = useUser(); 
    const emailAdd = user?.emailAddresses[0].emailAddress;
    
    useEffect(() => {
        // Update booking status to "Paid" after successful payment
        const updateBookingStatus = async () => {
            const bookingIds = localStorage.getItem('unpaidBookingIds');
            
            if (bookingIds && emailAdd) {
                try {
                    const ids = JSON.parse(bookingIds);
                    
                    // Update each booking to "Paid"
                    await fetch('http://localhost:8000/api/update-booking-status/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            booking_ids: ids,
                            status: 'Paid'
                        })
                    });
                    
                    // Clear the stored booking IDs
                    localStorage.removeItem('unpaidBookingIds');
                } catch (error) {
                    console.error('Error updating booking status:', error);
                }
            }
        };

        updateBookingStatus();
    }, [emailAdd]);
    
    if (!user?.id) {
        return null;
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

            <div className="mt-8">
                <a 
                    href="/dashboard"
                    className="bg-white text-purple-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition inline-block"
                >
                    Go to Dashboard
                </a>
            </div>
        </div>
    );
}