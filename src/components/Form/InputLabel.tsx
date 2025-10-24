import type { JSX } from "react";

interface InputLabelProps {
    children: string;
    htmlFor: string;
    className?: string;
}

export default function InputLabel({ children, htmlFor, className }: InputLabelProps): JSX.Element {
    return (
        <label
            htmlFor={htmlFor}
            className={`absolute left-0 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-blue-500" ${className}`}
        >
            {children}
        </label>
    );
}
