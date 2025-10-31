import { useEffect, useState, type JSX } from "react"
import "./header.css"
import useScroll from "../../hooks/useSectionContext"

export default function Header(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { currentSection, handleScrollToSection } = useScroll()

    const navItems = [
        { name: "Home", href: "#about_me" },
        { name: "Progetti", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contatti", href: "#contact_me" },
    ]

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    return (
        <header>
            <nav className="fixed top-0 z-50 w-full bg-(--color-bg-dark)/80 py-6 backdrop-blur-md">
                <div className="container mx-auto flex justify-between px-4 text-xl md:text-2xl">
                    {/* Logo a sinistra */}
                    <a href="/" className="font-bold">
                        <span className="logo">&gt;_ntnrss</span>
                    </a>

                    {/* mobile hamburger menu*/}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>

                    {/* Menu desktop */}
                    <ul className="hidden md:flex md:gap-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    onClick={() => {
                                        handleScrollToSection(item.href)
                                    }}
                                    href={item.href}
                                    className={`nav_link ${currentSection === item.href ? "active" : ""}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* mobile menu */}

                <ul
                    className={`md:hidden ${
                        isOpen ? "h-screen pt-40" : "h-0"
                    } fixed z-50 flex w-full flex-col items-center gap-4 space-y-10 overflow-hidden bg-(--color-bg-dark)/98 px-4 text-3xl font-semibold text-(--color-text-primary) backdrop-blur-2xl transition-all duration-500 ease-in-out`}
                >
                    {navItems.map((item, index) => (
                        <li key={index} className="text-center">
                            <a
                                onClick={() => handleScrollToSection(item.href)}
                                href={item.href}
                                className={`nav_link ${currentSection === item.href ? "active" : ""}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
