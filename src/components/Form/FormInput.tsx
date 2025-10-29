import type { JSX } from "react";
import InputLabel from "./InputLabel";
import type { FormError } from "../../types/form";

interface FormInputProps {
    className?: string;
    name: string;
    type: string;
    id?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    required?: boolean;
    placeholder?: string;
    error?: FormError<string>;
}

export function FormInput({
    className = "",
    name,
    type,
    id,
    value = "",
    onChange,
    required,
    placeholder = "",
    error = "",
}: FormInputProps): JSX.Element {
    return (
        <div className={`form-group ${className}`}>
            <input
                id={id || name}
                name={name}
                type={type}
                className={`peer w-full border-b-2 border-[var(--color-text-secondary)]/40 bg-transparent py-2 text-[var(--color-text-primary)] placeholder-transparent focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors ${
                    error && "border-red-500"
                }`}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
            />

            <InputLabel htmlFor={id || name}>{placeholder}</InputLabel>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
