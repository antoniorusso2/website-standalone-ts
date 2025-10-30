import type { JSX } from "react"
import technologies from "../../../data/technologies"
import "./tech-carousel.css"

export default function TechCArousel(): JSX.Element | null {
    if (!technologies || technologies.length === 0) return null

    return (
        <div className="carousel_wrapper w-full overflow-hidden">
            <div className="carousel flex w-max">
                {[...technologies, ...technologies].map((technology, idx) => (
                    <div
                        key={idx}
                        className="carousel-item transition-shadow duration-300 hover:drop-shadow-[0_0_8px_var(--color-glow)]"
                    >
                        <img
                            src={technology.icon_external_url}
                            alt="tech-icon"
                        />
                    </div>
                ))}
                {[...technologies, ...technologies].map((technology, idx) => (
                    <div
                        key={idx}
                        className="carousel-item transition-shadow duration-300 hover:drop-shadow-[0_0_8px_var(--color-glow)]"
                    >
                        <img
                            src={technology.icon_external_url}
                            alt="tech-icon"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
