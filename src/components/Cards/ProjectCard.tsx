import type { JSX } from "react"
import TechBadge from "../ui/TechBadge"
import type { ProjectCardProps } from "../../types/project"
import { formatDescription } from "../../helpers/formatDescription"
import ExternalLink from "../ui/icons/ExternalLink"

// Project card temporary component with no image only tech badges, name and description

export default function ProjectCard({
    project,
}: ProjectCardProps): JSX.Element {
    // const imgUrl =
    //     project.media.length > 0
    //         ? project.media[0].url
    //         : "/placeholder-600-400.png"

    const formattedDescription = formatDescription(project.description)

    return (
        <div className="project-card flex w-full flex-col overflow-hidden rounded border border-(--color-bg-medium) bg-(--color-bg-medium) p-4 transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:border-2 hover:border-(--color-accent-blue) md:h-96 lg:h-[460px]">
            <div className="card__header w-full shrink-0 basis-1/3 overflow-hidden">
                {/* Project link */}
                <div className="cta project_title mb-8 flex items-center gap-4 text-(--color-accent-blue)">
                    <a
                        className="project__link inline-block text-lg font-bold capitalize underline underline-offset-4 transition-colors duration-300 ease-in-out hover:text-(--color-accent-blue)/80 md:text-2xl"
                        href={project.external_link}
                        target="_blank"
                    >
                        {project.name}
                    </a>
                    <span>
                        <ExternalLink />
                    </span>
                </div>

                {/* Technologies */}
                <div className="tech_badges my-4 flex flex-wrap gap-2 md:mt-auto">
                    {project.technologies.map((technology) => (
                        <TechBadge
                            key={technology.id}
                            technology={technology}
                        />
                    ))}
                </div>
            </div>

            {/* Body */}
            <div className="card__body mt-4">
                {/* Descrizione */}

                <p className="leading-relaxed text-gray-200">
                    {formattedDescription.normalLines}
                </p>
                {formattedDescription.listItems.length > 0 && (
                    <ul className="py-3">
                        {formattedDescription.listItems.map((item) => (
                            <li
                                key={item}
                                className="text-(--color-text-secondary)"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
