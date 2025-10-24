import type { JSX } from "react";
import { ContactForm } from "../components/Form/ContactForm";

export default function ContactMe(): JSX.Element {
    return (
        <section className="contact_me py-12 bg-[var(--color-bg-secondary)]">
            <ContactForm />
        </section>
    );
}
