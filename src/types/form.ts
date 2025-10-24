export interface FormData {
    user_name: string;
    user_email: string;
    message: string;
}

interface ValidationRule {
    min?: number;
    max?: number;
    allowed_chars?: string[];
    regex?: RegExp;
    required?: boolean;
}

export type FormValidationRule<T> = {
    [Property in keyof T]?: ValidationRule;
};

export type FormError<T> = {
    [Property in keyof T]?: string;
};

export type Status = "idle" | "sending" | "success" | "error";
