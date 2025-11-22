import { Users } from "lucide-react";

interface MenuBarProps {
  onMenuClick: () => void;
}

export default function MenuBar({ onMenuClick }: MenuBarProps) {
    return (
        <div className="flex items-center justify-between gap-3 border-e border-e-amber-50 p-3">
                <span title = "Show Users">
                    <Users className="cursor-pointer" onClick={onMenuClick}/> 
                </span>
        </div>
    );
}