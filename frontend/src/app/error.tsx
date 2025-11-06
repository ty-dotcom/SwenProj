"use client"

import { OctagonAlert } from "lucide-react"

export default function ErrorPage(){
    return (
        <div className="flex flex-col mx-auto items-center gap-5 ">
            <div className="flex items-center gap-3">
            <OctagonAlert  className="text-red-500 size-9"/>
            <h1 className="text-2xl font-bold ">Error</h1>
            </div>
            <p className="tracking-wider">
                Sorry, Something went wrong. Try again later.
            </p>
        </div>
    )
}