import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import type { FormData, FormError, Status } from "../../types/form";
import { validateForm } from "../../utils/formValidation";
import { FormInput } from "./FormInput";

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const [formData, setFormData] = useState<FormData>({
        user_name: "",
        user_email: "",
        message: "",
    });

    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<FormError<FormData>>({
        user_email: "",
        user_name: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        if (!formRef.current) return;

        //custom form data validation
        const validated = validateForm(formData);

        if (Object.keys(validated).length > 0) {
            setErrors(validated);
            return;
        }

        try {
            setStatus("sending");

            await emailjs.sendForm(
                import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
                import.meta.env.VITE_EMAIL_JS_COURTESY_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
            );

            await emailjs.sendForm(
                import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
                import.meta.env.VITE_EMAIL_JS_PERSONAL_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
            );

            setStatus("success");
            setFormData({ user_name: "", user_email: "", message: "" });
        } catch (error) {
            console.error("Email send failed:", error);
            setStatus("error");
        }
    };

    return (
        <div className="text-center bg-(--color-bg-medium)/50 p-6 rounded-lg shadow-md border border-[var(--color-text-secondary)]/20">
            <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide drop-shadow-[0_0_4px_var(--color-text-secondary)]/70 mb-5">
                Contattami
            </h2>

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6 bg-[var(--color-bg-primary)] p-6 rounded-sm shadow-md border border-[var(--color-text-secondary)]/20"
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
                        className="peer w-full border-b-2 border-[var(--color-text-secondary)]/40 bg-transparent py-2 text-[var(--color-text-primary)] placeholder-transparent focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none"
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="absolute left-0 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-blue-500"
                    >
                        Messaggio
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full mt-4 py-2 px-4 rounded-lg bg-[var(--color-accent)] text-white font-medium tracking-wide shadow hover:opacity-90 active:scale-[0.98] transition-transform"
                >
                    {status === "sending" ? "Invio..." : "Invia"}
                </button>

                {/* Feedback */}
                {status === "success" && (
                    <p className="text-green-500 text-sm mt-2">
                        ✅ Messaggio inviato con successo!
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-500 text-sm mt-2">
                        ❌ Errore durante l&apos;invio. Riprova.
                    </p>
                )}
            </form>
        </div>
    );
};
