import type { JSX } from "react";
import type { IconProps } from "../../../types/icon";

export default function ArrowLeft({ size }: IconProps): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`size-${size}`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
        </svg>
    );
}
