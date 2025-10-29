import type { JSX } from "react";
import Projects from "../components/sections/Projects";
import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";

export default function HomePage(): JSX.Element {
    return (
        <div className="flex-col">
            <AboutMe />

            <Projects />

            {/* tech stack */}
            <Skills />
        </div>
    );
}
