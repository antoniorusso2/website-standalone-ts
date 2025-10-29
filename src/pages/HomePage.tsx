import type { JSX } from "react";
import Projects from "../components/sections/Projects";
import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";
import SectionContainer from "../components/sections/SectionContainer";
import ContactMe from "../components/sections/ContactMe";

export default function HomePage(): JSX.Element {
    return (
        <div className="flex-col">
            <SectionContainer id="about_me">
                <AboutMe />
                <div className="cta">
                    {/* call to action button */}
                    <a
                        href="#projects"
                        className="mt-8 inline-block px-6 py-3 bg-[var(--color-accent-blue)] text-white font-semibold rounded hover:bg-(--color-accent-blue)/70 transition-colors duration-300 ease-in-out"
                    >
                        Vedi i miei progetti
                    </a>
                </div>
            </SectionContainer>

            <SectionContainer id="projects">
                <h2 className="text-3xl font-bold mb-8">Progetti</h2>
                <Projects />
            </SectionContainer>

            <SectionContainer id="skills">
                <Skills />
            </SectionContainer>

            <SectionContainer id="contact_me">
                <ContactMe />
            </SectionContainer>

            {/* tech stack */}
        </div>
    );
}
