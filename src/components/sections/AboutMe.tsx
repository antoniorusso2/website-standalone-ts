import type { JSX } from "react";

export default function AboutMe(): JSX.Element {
    return (
        <section id="about" className="about_me min-h-screen flex items-center">
            <div className="container">
                <div className="content_section text-center text-balance">
                    <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide mb-2 drop-shadow-[0_0_4px_var(--color-text-secondary)]/70">
                        Antonio Russo
                    </h1>
                    <p className="text-base md:text-xl text-[var(--color-text-secondary)] font-light">
                        Web Developer
                    </p>
                    <p className="description my-5">
                        Fin da piccolo ho avuto una grande passione per la tecnologia e il mondo
                        dell&apos;informatica in generale. La curiosità verso ciò che sta “dietro le
                        quinte” mi hanno spinto a voler creare e costruire in prima persona. Ho
                        studiato principalmente da autodidatta sia basi di networking che
                        cybersecurity ed ho poi scelto di intraprendere un percorso più serio e
                        mirato verso lo sviluppo web. Mi piace dare forma alle idee con grande
                        attenzione ai dettagli e spirito pratico, affrontando ogni sfida con
                        entusiasmo, crescita continua e voglia di mettermi in gioco.
                    </p>
                </div>
            </div>
        </section>
    );
}
