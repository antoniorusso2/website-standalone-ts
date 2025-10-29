import type { JSX } from "react";
import TechCArousel from "../Carousel/TechCarousel/TechCarousel";
import technologies from "../../data/technologies";

export default function Skills(): JSX.Element {
    const maxLevel = 5;

    return (
        <div className="container">
            <div className="content_section">
                <h2 className="font-bold text-center text-2xl">Tech Stack</h2>
                <TechCArousel />
            </div>
            {/* list with knowledge for each tech  with levels*/}
            <div className="container">
                <div className="knowledge_list mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {technologies.map((skill, index) => (
                        <div key={index} className="knowledge_item p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">{skill.name}</h3>
                            <div className="skill_level">
                                {[...Array(maxLevel)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`inline-block w-8 h-4  ${
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
        </div>
    );
}
