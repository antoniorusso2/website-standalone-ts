import type { JSX } from "react"
import { projects } from "../../data/projects"
import ProjectCard from "../Cards/ProjectCard"

export default function Projects(): JSX.Element {
    return (
        <div className="container md:my-12">
            <div className="flex flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </div>
    )
}
