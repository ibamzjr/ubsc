import GymTrafficBadge from "@/Components/Landing/GymTrafficBadge";
import HeroBottomBar from "@/Components/Landing/HeroBottomBar";
import HeroContent from "@/Components/Landing/HeroContent";
import HeroTitle from "@/Components/Landing/HeroTitle";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col overflow-hidden bg-[#0B1E3B]"
        >
            <div
                className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-1/2"
                style={{
                    backgroundImage: `url('/assets/hero/Top.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-1/2"
                style={{
                    backgroundImage: `url('/assets/hero/Bottom.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="relative z-10 flex min-h-screen flex-col px-8 pt-28 lg:px-16 lg:pt-32">
                <div className="absolute right-12 top-32 hidden lg:right-16 lg:top-36 lg:block xl:right-20">
                    <HeroContent />
                </div>

                <div className="flex flex-1 flex-col justify-end ">
                    <div className="-mb-20">
                        <GymTrafficBadge />
                    </div>
                </div>

                <div className="flex flex-1 flex-col justify-end pb-32 lg:pb-28">
                    <HeroTitle />
                </div>

                <div className="absolute bottom-40 right-12 hidden lg:right-16 lg:block xl:bottom-32 xl:right-20">
                    <div className="flex h-30 w-30 items-center justify-center overflow-hidden rounded-full bg-white shadow-xl lg:h-30 lg:w-30">
                        <img
                            src="/BMU.svg"
                            alt="Brawijaya Multi Usaha"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                <div className="mt-8 lg:hidden">
                    <HeroContent />
                </div>
            </div>

            <div className="absolute bottom-24 left-8 right-8 z-20 border-t border-white/10 lg:bottom-28 lg:left-16 lg:right-16" />

            <HeroBottomBar />
        </section>
    );
}
