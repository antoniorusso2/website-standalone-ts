import type { JSX } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../Cards/ProjectCard";

export default function Projects(): JSX.Element {
    return (
        <div className="container mt-24">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between mb-12 px-4">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </div>
    );
}
