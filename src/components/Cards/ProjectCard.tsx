import type { JSX } from "react"
import type React from "react"
import TechBadge from "../ui/TechBadge"
import type { ProjectCardProps } from "../../types/project"

// Project card temporary component with no image only tech badges, name and description

export default function ProjectCard({
    project,
}: ProjectCardProps): JSX.Element {
    const imgUrl =
        project.media.length > 0
            ? project.media[0].url
            : "/placeholder-600-400.png"

    return (
        <div
            className="project-card flex w-full flex-col overflow-hidden rounded border border-(--color-bg-medium) bg-(--color-bg-medium) transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:border-2 hover:border-(--color-accent-blue) md:h-96 lg:h-[460px]"
            onClick={() => {
                if (project.external_link) {
                    window.open(project.external_link, "_blank")
                }
            }}
        >
            {/* Image header */}
            <div className="card__header w-full shrink-0 basis-2/3 overflow-hidden">
                <img
                    className="w-full cursor-pointer object-cover object-top transition-transform duration-500 ease-in-out hover:scale-110"
                    onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => (e.currentTarget.src = "placeholder-600-400.png")}
                    alt={project.name}
                    src={imgUrl}
                />
            </div>

            {/* Body */}
            <div className="card__body flex flex-1 flex-col p-4">
                {/* Project link */}
                <a
                    className="project__link mb-3 text-lg font-bold capitalize underline underline-offset-4 transition-colors duration-300 ease-in-out hover:text-(--color-accent-blue) md:text-2xl"
                    href={project.external_link}
                >
                    {project.name}
                </a>

                {/* Technologies */}
                <div className="tech_badges flex flex-wrap gap-2 md:mt-auto">
                    {project.technologies.map((technology) => (
                        <TechBadge
                            key={technology.id}
                            technology={technology}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
