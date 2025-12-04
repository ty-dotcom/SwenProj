import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps<T extends React.ElementType> {
    as?: T;
}

export default function Button<T extends React.ElementType = "button">(
    {as, ...props}: 
    ButtonProps<T> & Omit <ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) 
    {
    const Component = as || "button";
    return(<Component {...props} className={cn(buttonClassName, props.className)}  />);
} 

export const buttonClassName =
  "flex items-center justify-center gap-2 rounded-full bg-blue-600 px-3 py-2 font-semibold text-white transition-colors hover:bg-blue-600 active:bg-blue-600 disabled:bg-gray-200";