import type { JSX } from "react";
import type { Technology } from "../../data/technologies";
import { isColorLight } from "../../helpers/isColorLight";

interface TechBadgeProps {
    technology: Technology;
}

export default function TechBadge({ technology }: TechBadgeProps): JSX.Element {
    const textColor = isColorLight(technology.color)
        ? "text-zinc-800"
        : "text-zinc-200";

    return (
        <span
            className={`badge text-sm fw-bold py-0.5 px-1 rounded-xs ${textColor}`}
            style={{ backgroundColor: technology.color }}
            key={technology.id}
        >
            {technology.name}
        </span>
    );
}
