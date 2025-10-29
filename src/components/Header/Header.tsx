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
                {isOpen && (
                    <ul className="md:hidden flex flex-col gap-4 mt-2 pb-5 transition-all duration-1000 ease-in-out">
                        {navItems.map((item, index) => (
                            <li key={index} className="text-center">
                                <a href={item.href} className="nav_link">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
