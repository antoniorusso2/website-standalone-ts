import type { JSX } from "react"
import Projects from "../components/sections/Projects"
import AboutMe from "../components/sections/AboutMe"
import Skills from "../components/sections/Skills"
import SectionContainer from "../components/sections/SectionContainer"
import ContactMe from "../components/sections/ContactMe"

export default function HomePage(): JSX.Element {
    return (
        <div className="flex-col">
            <SectionContainer id="about_me">
                <AboutMe />
                <div className="cta">
                    {/* call to action button */}
                    <a
                        href="#projects"
                        className="mt-8 inline-block rounded bg-[var(--color-accent-blue)] px-6 py-3 font-semibold transition-colors duration-300 ease-in-out hover:bg-(--color-accent-blue)/70"
                    >
                        Vedi i miei progetti
                    </a>
                </div>
            </SectionContainer>

            <SectionContainer id="projects">
                <h2 className="mb-8 text-3xl font-bold">Progetti</h2>
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
    )
}
