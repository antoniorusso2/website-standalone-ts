import type { JSX } from "react"

export default function XMark(): JSX.Element {
    return (
        <i className="">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 h-12 w-12 rounded-full bg-red-500 p-1"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </i>
    )
}
