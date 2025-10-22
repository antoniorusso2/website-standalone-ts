import type { JSX } from "react";
import TechCArousel from "../components/Carousel/TechCarousel/TechCarousel";

export default function HomePage(): JSX.Element {
    return (
        <>
            <section className="about_me">
                <div className="container">
                    <div className="content_section">
                        <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide mb-2 drop-shadow-[0_0_4px_var(--color-text-secondary)]/70">
                            Antonio Russo
                        </h1>
                        <p className="text-base md:text-xl text-[var(--color-text-secondary)] font-light">
                            Web Developer
                        </p>
                        <p className="description my-5">
                            Mi piace creare applicazioni che fanno la differenza
                            nel lavoro di tutti i giorni. Che sia un'app web per
                            gestire progetti o un tool desktop per automatizzare
                            task ripetitivi, il mio obiettivo è sempre lo
                            stesso: rendere il flusso lavorativo più fluido ed
                            efficiente. Ogni sfida è un'occasione per imparare e
                            costruire qualcosa di utile.
                        </p>
                    </div>
                </div>
            </section>

            {/* tech stack */}
            <section className="skill_set">
                <div className="container">
                    <div className="content_section">
                        <h2 className="font-bold text-center">Tech Stack</h2>
                        <TechCArousel />
                    </div>
                </div>
            </section>
        </>
    );
}
