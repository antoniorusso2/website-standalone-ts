import type { JSX } from "react"
import TechCArousel from "../Carousel/TechCarousel/TechCarousel"
import technologies from "../../data/technologies"

export default function Skills(): JSX.Element {
    const maxLevel = 5

    return (
        <div className="container">
            <div className="content_section">
                <h2 className="text-center text-2xl font-bold">Tech Stack</h2>
                <TechCArousel />
            </div>
            {/* list with knowledge for each tech  with levels*/}

            <div className="knowledge_list mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {technologies.map((skill, index) => (
                    <div
                        key={index}
                        className="knowledge_item rounded-lg border p-4"
                    >
                        <h3 className="mb-2 font-semibold">{skill.name}</h3>
                        <div className="skill_level">
                            {[...Array(maxLevel)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`inline-block h-4 w-8 ${
                                        i < skill.level
                                            ? "bg-[var(--color-accent-blue)]"
                                            : "bg-gray-300"
                                    }`}
                                ></span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
