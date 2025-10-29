import type { JSX } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../Cards/ProjectCard";

export default function Projects(): JSX.Element {
    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </div>
    );
}
