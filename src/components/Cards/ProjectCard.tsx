import type { JSX } from "react";
import { useNavigate } from "react-router";
import type React from "react";
import TechBadge from "../ui/TechBadge";
import type { ProjectCardProps } from "../../types/project";

export default function ProjectCard({
    project,
}: ProjectCardProps): JSX.Element {
    const navigate = useNavigate();

    const imgUrl =
        project.media.length > 0
            ? project.media[0].url
            : "/placeholder-600-400.png";

    const handleClick = () => {
        navigate(`/projects/${project.slug}`);
    };

    return (
        <div
            className="project-card w-full md:h-96 bg-(--color-bg-medium) border border-(--color-bg-medium) hover:border-(--color-accent-blue) hover:border-2 rounded overflow-hidden flex flex-col hover:translate-y-[-5px] transition-transform duration-300 ease-in-out"
            onClick={handleClick}
        >
            {/* Image header */}
            <div className="card__header w-full md:max-h-96 overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                    onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => (e.currentTarget.src = "placeholder-600-400.png")}
                    alt={project.name}
                    src={imgUrl}
                />
            </div>

            {/* Body */}
            <div className="card__body flex flex-col justify-between flex-1 p-4">
                {/* Project link */}
                <a
                    className="project__link text-xl md:text-2xl font-bold underline underline-offset-4 hover:text-(--color-accent-blue) transition-colors duration-300 ease-in-out mb-3 capitalize"
                    href={`/projects/${project.slug}`}
                >
                    {project.name}
                </a>

                {/* Technologies */}
                <div className="tech_badges flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((technology) => (
                        <TechBadge
                            key={technology.id}
                            technology={technology}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
