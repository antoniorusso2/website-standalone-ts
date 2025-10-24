import { useParams } from "react-router";
import { projects } from "../data/projects";
import type { JSX } from "react";
import { formatDescription } from "../helpers/formatDescription";
import MediaCarousel from "../components/Carousel/Media/MediaCarousel";
import TechBadge from "../components/ui/TechBadge";
import ExternalLink from "../components/ui/icons/ExternalLink";

export default function ProjectDetail(): JSX.Element {
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="container mx-auto px-4 max-w-4xl py-10 text-center text-red-500">
                Progetto non trovato o si è verificato un errore nel caricamento.
            </div>
        );
    }

    const formattedDescription = formatDescription(project.description);

    return (
        <>
            <div className="container">
                {project.media && <MediaCarousel mediaList={project.media} />}
                {/* Carousel */}

                {/* Titolo e Cliente */}
                <h1 className=" md:text-2xl font-bold text-[var(--color-text-primary)] capitalize">
                    {project.name}
                </h1>
                {project.customer && (
                    <p className="text-gray-500 mb-3">Cliente: {project.customer}</p>
                )}

                {/* link */}
                {project.external_link && (
                    <div className="text-(--color-accent-blue) flex gap-3 items-center">
                        <a
                            href={project.external_link}
                            className="underline "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.external_link}
                        </a>
                        <ExternalLink />
                    </div>
                )}

                {/* Tipologia */}
                {project.type && (
                    <div className="my-5">
                        <span className="inline-block bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full">
                            {project.type.name}
                        </span>
                    </div>
                )}

                {/* Descrizione */}
                <div className="mb-6">
                    <p className="text-gray-200 leading-relaxed">
                        {formattedDescription.normalLines}
                    </p>
                    {formattedDescription.listItems.length > 0 && (
                        <ul className="py-3">
                            {formattedDescription.listItems.map((item) => (
                                <li key={item} className="text-gray-200">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Tecnologie */}
                {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <TechBadge key={tech.id} technology={tech} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
