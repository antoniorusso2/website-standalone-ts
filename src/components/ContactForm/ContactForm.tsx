import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface FormState {
    user_name: string;
    user_email: string;
    user_message: string;
}

export const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<FormState>({
        user_name: "",
        user_email: "",
        user_message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
                import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
                }
            )
            .then(
                (res) => {
                    console.log("SUCCESS!", res.status);
                    console.log(res.text);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    //TODO: Add validation and error handling
    //TODO: add form handle data function

    return (
        <div className="container mx-auto px-4">
            <div className="content_section max-w-lg mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide mb-8 drop-shadow-[0_0_4px_var(--color-text-secondary)]/70">
                    Contattami
                </h2>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-6 bg-[var(--color-bg-primary)] p-6 rounded-2xl shadow-md border border-[var(--color-text-secondary)]/20"
                >
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                            className="peer w-full border-b-2 border-[var(--color-text-secondary)]/40 bg-transparent py-2 text-[var(--color-text-primary)] placeholder-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                            placeholder="Name"
                        />
                        <label
                            htmlFor="user_name"
                            className="absolute left-0 top-2 text-[var(--color-text-secondary)] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-text-secondary)] peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--color-accent)]"
                        >
                            Nome
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                            className="peer w-full border-b-2 border-[var(--color-text-secondary)]/40 bg-transparent py-2 text-[var(--color-text-primary)] placeholder-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                            placeholder="Email"
                        />
                        <label
                            htmlFor="user_email"
                            className="absolute left-0 top-2 text-[var(--color-text-secondary)] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-text-secondary)] peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--color-accent)]"
                        >
                            Email
                        </label>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.user_message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Message"
                            className="peer w-full border-b-2 border-[var(--color-text-secondary)]/40 bg-transparent py-2 text-[var(--color-text-primary)] placeholder-transparent focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-2 text-[var(--color-text-secondary)] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-text-secondary)] peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--color-accent)]"
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
                            ❌ Errore durante l’invio. Riprova.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
