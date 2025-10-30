import type { JSX } from "react"
import { isColorLight } from "../../helpers/isColorLight"
import type { TechBadgeProps } from "../../types/technology"

export default function TechBadge({ technology }: TechBadgeProps): JSX.Element {
    const textColor = isColorLight(technology.color)
        ? "text-gray-700"
        : "text-(--color-text-primary)"

    return (
        <span
            className={`badge rounded-xs px-1 py-0.5 text-sm font-bold ${textColor}`}
            style={{ backgroundColor: technology.color }}
            key={technology.id}
        >
            {technology.name}
        </span>
    )
}
