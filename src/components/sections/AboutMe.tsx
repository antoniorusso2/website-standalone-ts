import type { JSX } from "react"
import CodeSVG from "../ui/CodeSVG"

export default function AboutMe(): JSX.Element {
    return (
        <div className="container">
            <div className="content_section flex flex-col items-center justify-center gap-6 text-center text-balance lg:gap-12">
                <h1 className="text-3xl font-semibold tracking-wide uppercase drop-shadow-[0_0_4px_var(--color-text-secondary)]/70 md:text-4xl lg:text-6xl">
                    Antonio Russo
                </h1>
                <p className="text-(--color-text-secondary)">
                    Full-Stack Developer
                </p>
                <div className="md:mt-12">
                    <CodeSVG className="w-60 md:w-80" />
                </div>
            </div>
        </div>
    )
}
