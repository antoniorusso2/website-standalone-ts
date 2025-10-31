import type { JSX } from "react"
import Projects from "../components/sections/Projects"
import AboutMe from "../components/sections/AboutMe"
import Skills from "../components/sections/Skills"
import SectionContainer from "../components/sections/SectionContainer"
import ContactMe from "../components/sections/ContactMe"
import ChevronDown from "../components/ui/icons/ChevronDown"
import Download from "../components/ui/icons/Download"
import useSectionContext from "../hooks/useSectionContext"
import cvPDF from "../assets/CV-AntonioRusso.pdf"

export default function HomePage(): JSX.Element {
    const { handleScrollToSection } = useSectionContext()

    return (
        <div className="flex-col">
            <SectionContainer id="about_me">
                <AboutMe />

                {/* call to action buttons */}
                <div className="cta flex flex-col items-center justify-center gap-6 md:mt-auto md:flex-row">
                    <a
                        href="#projects"
                        onClick={() => handleScrollToSection("#projects")}
                        className="inline-block rounded bg-[var(--color-accent-blue)] px-4 py-3 font-semibold transition-colors duration-300 ease-in-out hover:bg-(--color-accent-blue)/70 active:scale-95"
                    >
                        Progetti
                        <span className="ml-4 inline-block animate-bounce align-middle">
                            <ChevronDown />
                        </span>
                    </a>

                    {/* download cv */}

                    <a
                        href={cvPDF}
                        download
                        className="inline-block rounded bg-[var(--color-accent-violet)] px-4 py-3 font-semibold transition-colors duration-300 ease-in-out hover:bg-(--color-accent-violet)/70 active:scale-95"
                    >
                        Scarica CV
                        <span className="ml-4 inline-block align-middle">
                            <Download />
                        </span>
                    </a>
                </div>
            </SectionContainer>

            <SectionContainer id="projects">
                <h2 className="my-12 text-center text-3xl font-bold">Progetti</h2>
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
