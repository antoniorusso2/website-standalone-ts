import type { JSX } from "react";
import TechCArousel from "../components/Carousel/TechCarousel/TechCarousel";

export default function HomePage(): JSX.Element {
    return (
        <>
            <section className="about_me">
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
                            dell&apos;informatica in generale. La curiosità verso ciò che sta
                            “dietro le quinte” mi hanno spinto a voler creare e costruire in prima
                            persona. Ho studiato principalmente da autodidatta sia basi di
                            networking che cybersecurity ed ho poi scelto di intraprendere un
                            percorso più serio e mirato verso lo sviluppo web. Mi piace dare forma
                            alle idee con grande attenzione ai dettagli e spirito pratico,
                            affrontando ogni sfida con entusiasmo, crescita continua e voglia di
                            mettermi in gioco.
                        </p>
                    </div>
                </div>
            </section>

            {/* <section className="education">
                <div className="container">
                    <div className="content_section">
                        <h2 className="font-bold text-center text-2xl">Formazione</h2>
                        <ul className="education_list flex flex-col gap-3 list-disc">
                            <li className="education_item">
                                <div>
                                    <p className="education_title font-semibold text-(--color-text-primary)">
                                        <a
                                            className="custom_link"
                                            href="https://boolean.careers/corsi/full-stack-web-development"
                                            rel=""
                                        >
                                            <strong>Boolean </strong>
                                        </a>
                                        <span>master in Web Development</span>
                                        <span> - 2024/2025 </span>
                                    </p>
                                    <p className="description text-(color-text-secondary)">
                                        Corso intensivo di 600 ore con lezioni teoriche e pratiche
                                        in cui ho appreso le basi della programmazione full-stack
                                        con React, Express e Node e l'utilizzo di database con
                                        MySQL. Ho inoltre svolto una specializzazione in PHP e
                                        Laravel.
                                    </p>
                                </div>
                            </li>
                            <li className="list-item">
                                <p>
                                    Studio basi delle tipologie malware, networking e sistemi di
                                    sicurezza da autodidatta su piattaforme online come{" "}
                                    <a
                                        href="https://www.hackthebox.com/"
                                        className="custom_link"
                                        rel="noreferrer"
                                    >
                                        HackTheBox
                                    </a>{" "}
                                    e{" "}
                                    <a className="custom_link" href="https://tryhackme.com/">
                                        TryHackMe
                                    </a>{" "}
                                    - 2023/2024
                                </p>
                            </li>
                        </ul>
                        <p className="description my-5"></p>
                    </div>
                </div>
            </section> */}

            {/* tech stack */}
            <section className="skill_set">
                <div className="container">
                    <div className="content_section">
                        <h2 className="font-bold text-center text-2xl">Tech Stack</h2>
                        <TechCArousel />
                    </div>
                </div>
            </section>
        </>
    );
}
