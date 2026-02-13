import { ArrowUpRight } from "lucide-react";

export default function HeroContent() {
    return (
        <div className="flex max-w-sm flex-col items-end gap-6 text-right lg:max-w-md">
            <div className="flex h-20 w-20 items-center justify-center lg:h-24 lg:w-24">
                <img
                    src="/assets/hero/star.png"
                    alt="Decorative mesh"
                    className="h-full w-full object-contain opacity-90"
                />
            </div>

            <p className="font-bdo text-base leading-relaxed text-white/80 lg:text-2xl">
                Selamat Datang di UB Sport Center,{" "}
                <br className="hidden lg:block" />
                pusat fasilitas{" "}
                <span className="font-semibold text-white">
                    olahraga modern
                </span>{" "}
                <br />
                untuk gaya hidup aktif Anda.
            </p>

            <a
                href="#booking"
                className="group flex items-center gap-3 border-t border-white/20 pt-4 transition-colors hover:border-white/40"
            >
                <span className="font-bdo text-base font-medium text-white lg:text-2xl">
                    Booking sekarang juga!
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 transition-all group-hover:translate-x-1 group-hover:bg-white/20">
                    <ArrowUpRight size={16} className="text-white" />
                </span>
            </a>
        </div>
    );
}
