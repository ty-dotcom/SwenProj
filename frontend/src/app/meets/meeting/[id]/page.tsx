import { Metadata } from "next"
import MeetingPage from "./MeetingPage";

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
  return {
    title: `Meeting ${id}`,
    
  };
}

export  default async function Page({params,}: {params: Promise<{ id: string }>}){
    const { id } = await params;
    
    return(
        <div>
            <MeetingPage id={id}/>
        </div>
    )
}