import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import type { FormData, FormError, Status } from "../../types/form"
import { validateForm } from "../../utils/formValidation"
import { FormInput } from "./FormInput"

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null)

    const [formData, setFormData] = useState<FormData>({
        user_name: "",
        user_email: "",
        message: "",
    })

    const [status, setStatus] = useState<Status>("idle")
    const [errors, setErrors] = useState<FormError<FormData>>({
        user_email: "",
        user_name: "",
        message: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors({})

        if (!formRef.current) return

        //custom form data validation
        const validated = validateForm(formData)

        if (Object.keys(validated).length > 0) {
            setErrors(validated)
            return
        }

        try {
            setStatus("sending")

            await emailjs.sendForm(
                import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
                import.meta.env.VITE_EMAIL_JS_COURTESY_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
            )

            await emailjs.sendForm(
                import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
                import.meta.env.VITE_EMAIL_JS_PERSONAL_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
            )

            setStatus("success")
            setFormData({ user_name: "", user_email: "", message: "" })
        } catch (error) {
            console.error("Email send failed:", error)
            setStatus("error")
        }
    }

    return (
        <div className="w-full text-center md:p-6">
            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6 rounded-sm bg-[var(--color-bg-primary)] p-6"
            >
                {/* Name */}
                <div className="relative">
                    <FormInput
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required={true}
                        error={errors.user_name}
                        placeholder="Nome"
                    />
                </div>

                {/* Email */}
                <div className="relative">
                    <FormInput
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required={true}
                        error={errors.user_email}
                        placeholder="Email"
                    />
                </div>

                {/* Message */}
                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Message"
                        className="peer w-full resize-none border-b-2 border-[var(--color-text-secondary)]/40 py-2 text-[var(--color-text-primary)] placeholder-transparent transition-colors focus:border-[var(--color-accent-blue)] focus:outline-none"
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="absolute top-2 left-0 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-blue-500"
                    >
                        Messaggio
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-4 w-full rounded-lg bg-[var(--color-accent-blue)] px-4 py-2 font-medium tracking-wide shadow transition-transform hover:opacity-90 active:scale-[0.98]"
                >
                    {status === "sending" ? "Invio..." : "Invia"}
                </button>

                {/* Feedback */}
                {status === "success" && (
                    <p className="mt-2 text-sm text-green-500">
                        ✅ Messaggio inviato con successo!
                    </p>
                )}
                {status === "error" && (
                    <p className="mt-2 text-sm text-red-500">
                        ❌ Errore durante l&apos;invio. Riprova.
                    </p>
                )}
            </form>
        </div>
    )
}
