import PaymentSuccess from "./PaymentPage";

export  default async function Page({params,}: {params: Promise<{ amount: string }>}){
    const { amount } = await params;
    
    return(
        <div>
            <PaymentSuccess amount={amount}/>
        </div>
    )
}