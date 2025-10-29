import { useState, type JSX } from "react";
import "./header.css";

export default function Header(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navItems = [
        { name: "Home", href: "#about_me" },
        { name: "Progetti", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contatti", href: "#contact_me" },
    ];

    return (
        <header>
            <nav className="fixed top-0 py-6 w-full z-50 bg-(--color-bg-dark)/80 backdrop-blur-md ">
                <div className="container flex justify-between mx-auto px-4 text-xl md:text-2xl ">
                    {/* Logo a sinistra */}
                    <a href="/" className="font-bold">
                        <span className="logo">&gt;_ntnrss</span>
                    </a>

                    {/* mobile hamburger menu*/}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
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
                                <a href={item.href} className="nav_link ">
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
                    }  overflow-hidden flex flex-col items-center  text-3xl text-(--color-text-primary) font-semibold space-y-10 gap-4 transition-all duration-500 ease-in-out fixed z-50 w-full bg-(--color-bg-dark)/98 backdrop-blur-2xl px-4`}
                >
                    {navItems.map((item, index) => (
                        <li key={index} className="text-center">
                            <a
                                onClick={() => setIsOpen(false)}
                                href={item.href}
                                className="nav_link_mobile"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
