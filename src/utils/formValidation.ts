import type { FormData, FormError, FormValidationRule } from "../types/form"

/**
 * Function to validate form data iterating through each rules and applying them to the data fields.
 * @param data the form data to validate
 * @returns object with errors if any
 */
export function validateForm(data: FormData) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const invalidCharsRegex = /[^\p{L}\s-]/u

    const rules: FormValidationRule<FormData> = {
        user_name: {
            min: 3,
            max: 50,
            invalid_chars: invalidCharsRegex,
            required: true,
        },
        user_email: {
            min: 5,
            regex: emailRegex,
        },
        message: {
            min: 3,
            max: 500,
        },
    }

    const errors: FormError<FormData> = {}

    for (const field in rules) {
        const key = field as keyof FormData
        const value = data[key]
        const rule = rules[key]

        if (!rule) continue

        if (rule.required && !value.trim()) {
            errors[key] = "Campo obbligatorio"
        }

        if (rule.min && value.length < rule.min) {
            errors[key] = `Inserisci almeno ${rule.min} caratteri`
        } else if (rule.max && value.length > rule.max) {
            errors[key] = `Il campo può contenere al massimo ${rule.max} caratteri`
        }

        if (rule.regex && !rule.regex.test(value)) {
            errors[key] = "Formato email non valido"
        }

        if (rule.max && value.length > rule.max) {
            errors[key] = `Inserire al massimo ${rule.max} caratteri`
        }

        if (rule.invalid_chars && invalidCharsRegex.test(value)) {
            errors[key] = "Caratteri non validi"
        }
    }

    return errors
}
