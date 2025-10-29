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
            </SectionContainer>

            <SectionContainer id="projects">
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
