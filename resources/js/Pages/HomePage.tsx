import Hero from "@/Components/Landing/Hero";
import Navbar from "@/Components/Landing/Navbar";
import { Head } from "@inertiajs/react";

export default function HomePage() {
    return (
        <>
            <Head title="UB Sport Center" />
            <main className="relative">
                <Navbar activeSection="Home" />
                <Hero />
            </main>
        </>
    );
}
