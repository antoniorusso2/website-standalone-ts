import type { JSX } from "react"
import TechCArousel from "../Carousel/TechCarousel/TechCarousel"
import technologies from "../../data/technologies"

export default function Skills(): JSX.Element {
    const maxLevel = 5

    return (
        <div className="container">
            <div className="content_section bg-(--color-bg-medium)/80 p-6 shadow-[0_0_30px_var(--color-bg-dark)] backdrop-blur-sm">
                <h2 className="mb-6 text-center text-2xl font-bold tracking-wide lg:text-3xl">
                    Tech Stack
                </h2>
                <TechCArousel />
            </div>
            {/* list with knowledge for each tech  with levels*/}
            <div className="skills mt-24 rounded bg-(--color-bg-medium) py-6 shadow-md">
                <h2 className="text-center text-2xl font-bold tracking-wide">
                    Skill Level
                </h2>
                <div className="knowledge_list grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {technologies.map((skill, index) => (
                        <div
                            key={index}
                            className="knowledge_item rounded-lg p-4"
                        >
                            <h3 className="mb-2 font-semibold">{skill.name}</h3>
                            <div className="skill_level">
                                {/* render a span for each level */}
                                <div className="skill_bar flex w-full">
                                    {[...Array(maxLevel)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`skill_bar inline-block h-4 w-full ${
                                                i < skill.level
                                                    ? "bg-[var(--color-accent-blue)]"
                                                    : "bg-gray-300"
                                            }`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
