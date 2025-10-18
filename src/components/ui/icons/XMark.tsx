import type { JSX } from "react";
import type { IconProps } from "../../../types/icon";

export default function XMark({ size }: IconProps): JSX.Element {
    return (
        <i>
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
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </i>
    );
}
