import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

interface NavItem {
    label: string;
    number: string;
    href: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: "Home", number: "01", href: "#home" },
    { label: "About", number: "02", href: "#about" },
    { label: "Facilities", number: "03", href: "#facilities" },
    { label: "Services", number: "04", href: "#services" },
    { label: "Pricing", number: "05", href: "#pricing" },
    { label: "Booking", number: "06", href: "#booking" },
];

interface NavbarProps {
    activeSection?: string;
}

export default function Navbar({ activeSection = "Home" }: NavbarProps) {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 lg:px-12">
            <div className="flex items-center gap-2">
                <img
                    src="/UBSC.svg"
                    alt="UB Sport Center Logo"
                    className="h-8 w-auto"
                />
            </div>

            <ul className="hidden items-center gap-8 lg:flex">
                {NAV_ITEMS.map((item) => (
                    <li key={item.number}>
                        <a
                            href={item.href}
                            className={`font-clash relative text-xl tracking-wide transition-opacity duration-200 ${
                                item.label === activeSection
                                    ? "text-white"
                                    : "text-white/50 hover:text-white/80"
                            }`}
                        >
                            {item.label}
                            <sup className="ml-0.5 text-[10px] text-white/40">
                                {item.number}
                            </sup>
                        </a>
                    </li>
                ))}
            </ul>

            <a
                href="#booking"
                className="group hidden items-center gap-3 rounded-full bg-white py-2.5 pl-5 pr-2.5 transition-shadow hover:shadow-lg lg:flex"
            >
                <div className="text-left">
                    <p className="font-clash text-xs font-semibold leading-tight text-navy-900">
                        Lets Get Started
                    </p>
                    <p className="font-bdo text-[10px] text-navy-900/60">
                        Register Now
                    </p>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-white transition-transform group-hover:scale-110">
                    <ArrowRight size={14} />
                </span>
            </a>
        </nav>
    );
}
