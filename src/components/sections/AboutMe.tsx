import type { JSX } from "react"

export default function AboutMe(): JSX.Element {
    return (
        <div className="container">
            <div className="content_section text-center text-balance">
                <h1 className="mb-2 text-2xl font-semibold tracking-wide uppercase drop-shadow-[0_0_4px_var(--color-text-secondary)]/70 md:text-4xl">
                    Antonio Russo
                </h1>
                <p className="text-base font-light text-[var(--color-text-secondary)] md:text-xl">
                    Web Developer
                </p>
                <p className="description my-5">
                    Fin da piccolo ho avuto una grande passione per la
                    tecnologia e il mondo dell&apos;informatica in generale. La
                    curiosità verso ciò che sta “dietro le quinte” mi hanno
                    spinto a voler creare e costruire in prima persona. Ho
                    studiato principalmente da autodidatta sia basi di
                    networking che cybersecurity ed ho poi scelto di
                    intraprendere un percorso più serio e mirato verso lo
                    sviluppo web. Mi piace dare forma alle idee con grande
                    attenzione ai dettagli e spirito pratico, affrontando ogni
                    sfida con entusiasmo, crescita continua e voglia di mettermi
                    in gioco.
                </p>
            </div>
        </div>
    )
}
