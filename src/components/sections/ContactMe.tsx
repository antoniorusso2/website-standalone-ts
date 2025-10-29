import type { JSX } from "react";
import { ContactForm } from "../Form/ContactForm";
import { GithubIcon, LinkedinIcon } from "../ui/icons/SocialIcons";

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
    ];
    return (
        <div className="container flex spacing-x-8 justify-between">
            <div className="form_wrapper basis-1/2">
                <ContactForm />
            </div>

            {/* contacts list */}
            <div className="contacts_list w-1/2 basis-1/3 bg-(--color-bg-medium)/50 p-6 rounded-lg shadow-md border border-[var(--color-text-secondary)]/20 ">
                <ul className="">
                    {contactData.map((contact, index) => (
                        <li key={index} className="mb-4">
                            <div className="card flex justify-between items-center px-4 py-8 bg-(--color-bg-medium) rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <h3 className="font-semibold text-lg capitalize">{contact.type}</h3>
                                <div className="ml-auto">
                                    <a
                                        href={`${
                                            contact.type === "email"
                                                ? `mailto:${contact.value}`
                                                : contact.value
                                        }`}
                                        className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors duration-300 justify-end"
                                    >
                                        {contact.type === "email" || contact.type === "phone"
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
    );
}
