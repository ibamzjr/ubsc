import { ChevronRight } from "lucide-react";

export default function HeroBottomBar() {
    return (
        <div className="absolute bottom-10 left-0 right-0 z-20 flex items-end justify-between px-8 lg:bottom-12 lg:px-16">
            <div className="flex items-center gap-2">
                <span className="font-bdo text-sm font-medium text-white/40">
                    01/
                </span>
                <span className="font-bdo text-sm font-medium text-white/80">
                    homepage
                </span>
            </div>

            <p className="hidden max-w-lg text-center font-bdo text-sm leading-relaxed text-white/50 lg:block">
                <span className="font-semibold text-white/80">
                    UB Sport Center –
                </span>{" "}
                Temukan fasilitas olahraga modern untuk berlatih, berprestasi,
                dan berkembang bersama.
            </p>

            <div className="flex items-center gap-3">
                <span className="font-bdo rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/60 transition-colors hover:border-white/40">
                    Scroll down
                </span>
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white"
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}
