import type { JSX } from "react";
import { isColorLight } from "../../helpers/isColorLight";
import type { TechBadgeProps } from "../../types/technology";

export default function TechBadge({ technology }: TechBadgeProps): JSX.Element {
    const textColor = isColorLight(technology.color)
        ? "text-gray-700"
        : "text-(--color-text-primary)";

    return (
        <span
            className={`badge text-sm  font-bold py-0.5 px-1 rounded-xs ${textColor}`}
            style={{ backgroundColor: technology.color }}
            key={technology.id}
        >
            {technology.name}
        </span>
    );
}
