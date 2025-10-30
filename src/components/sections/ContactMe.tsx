import type { JSX } from "react"
import { ContactForm } from "../Form/ContactForm"
import { GithubIcon, LinkedinIcon } from "../ui/icons/SocialIcons"

export default function ContactMe(): JSX.Element {
    const contactData = [
        {
            type: "email",
            value: "russoantonio303@outlook.it",
        },
        {
            type: "phone",
            value: "+39 328-4879342",
        },
        {
            type: "linkedin",
            icon: <LinkedinIcon />,
        },
        {
            type: "github",
            icon: <GithubIcon />,
        },
    ]
    return (
        <div className="container flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap">
            <div className="form_wrapper w-full lg:basis-2/3">
                <ContactForm />
            </div>

            {/* contacts list */}
            <div className="contacts_list w-full rounded-lg border border-[var(--color-text-secondary)]/20 bg-(--color-bg-medium)/50 p-6 shadow-md lg:basis-1/3">
                <ul className="w-full">
                    {contactData.map((contact, index) => (
                        <li key={index} className="mb-4">
                            <div className="card flex items-center justify-between rounded-lg bg-(--color-bg-medium) px-4 py-8 transition-shadow duration-300 hover:shadow-lg">
                                <h3 className="text-lg font-semibold capitalize">
                                    {contact.type}
                                </h3>
                                <div className="ml-auto">
                                    <a
                                        href={`${
                                            contact.type === "email"
                                                ? `mailto:${contact.value}`
                                                : contact.value
                                        }`}
                                        className="justify-end text-[var(--color-text-primary)] transition-colors duration-300 hover:text-[var(--color-accent-blue)]"
                                    >
                                        {contact.type === "email" ||
                                        contact.type === "phone"
                                            ? contact.value
                                            : contact.icon}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
