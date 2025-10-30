import { useParams } from "react-router"
import { projects } from "../data/projects"
import type { JSX } from "react"
import { formatDescription } from "../helpers/formatDescription"
import MediaCarousel from "../components/Carousel/Media/MediaCarousel"
import TechBadge from "../components/ui/TechBadge"
import ExternalLink from "../components/ui/icons/ExternalLink"

export default function ProjectDetail(): JSX.Element {
    const { slug } = useParams()

    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return (
            <div className="container mx-auto max-w-4xl px-4 py-10 text-center text-red-500">
                Progetto non trovato o si è verificato un errore nel
                caricamento.
            </div>
        )
    }

    const formattedDescription = formatDescription(project.description)

    return (
        <>
            <div className="container">
                {project.media && <MediaCarousel mediaList={project.media} />}
                {/* Carousel */}

                {/* Titolo e Cliente */}
                <h1 className="font-bold text-[var(--color-text-primary)] capitalize md:text-2xl">
                    {project.name}
                </h1>
                {project.customer && (
                    <p className="mb-3 text-gray-500">
                        Cliente: {project.customer}
                    </p>
                )}

                {/* link */}
                {project.external_link && (
                    <div className="flex items-center gap-3 text-(--color-accent-blue)">
                        <a
                            href={project.external_link}
                            className="underline"
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
                        <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
                            {project.type.name}
                        </span>
                    </div>
                )}

                {/* Descrizione */}
                <div className="mb-6">
                    <p className="leading-relaxed text-gray-200">
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
    )
}
