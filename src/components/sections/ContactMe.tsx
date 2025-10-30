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
        <div className="container flex flex-wrap justify-between gap-8 md:h-[600px] lg:flex-nowrap">
            <div className="form_wrapper flex w-full flex-col items-center justify-center rounded-lg bg-(--color-bg-medium) p-6 lg:basis-2/3">
                <h2 className="mb-6 w-full text-center text-2xl font-semibold tracking-wide uppercase drop-shadow-[0_0_4px_var(--color-text-secondary)]/70 md:text-4xl">
                    Contattami
                </h2>
                <ContactForm />
            </div>

            {/* contacts list */}
            <div className="contacts_list h-full w-full rounded-lg bg-(--color-bg-medium) p-6 shadow-md lg:basis-1/3">
                <ul className="w-full">
                    {contactData.map((contact, index) => (
                        <li key={index} className="mb-4">
                            <div className="card flex flex-wrap items-center justify-between rounded-lg bg-(--color-bg-medium) px-4 py-8 transition-shadow duration-300">
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
                                        className="block justify-end text-(--color-text-primary) transition-all duration-300 hover:scale-110 hover:text-(--color-accent-blue) hover:underline"
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
