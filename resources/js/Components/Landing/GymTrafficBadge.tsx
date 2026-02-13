import { Activity } from "lucide-react";

export default function GymTrafficBadge() {
    return (
        <div className="flex items-stretch overflow-hidden rounded-lg">
            <div className="flex items-center gap-2 bg-navy-950 px-10 py-3">
                <Activity size={16} className="text-white/70" />
                <span className="font-bdo text-sm font-medium text-white/90">
                    Gym Traffic
                </span>
            </div>

            <div className="flex items-center bg-accent-red px-10 py-5 rounded-lg">
                <span className="font-bdo text-sm font-semibold text-white">
                    High Occupancy
                </span>
            </div>
        </div>
    );
}
