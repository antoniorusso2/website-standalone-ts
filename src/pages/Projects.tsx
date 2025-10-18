import type { JSX } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/Cards/ProjectCard";

export default function Projects(): JSX.Element {
    return (
        <div className="container">
            <h2 className="text-3xl font-bold mb-8">Progetti</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </div>
    );
}
