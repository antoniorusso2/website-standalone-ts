export default function Footer() {
    return (
        <footer className="footer py-4 w-full">
            <div className="container">
                <div className="row flex flex-col md:flex-row gap-5 justify-between border-b-2 border-b-cyan-800 py-4">
                    <ul className="contacts-list text-xs md:text-sm">
                        {/* phone */}
                        <li className="contacts-item">
                            <p className="contacts-text">
                                Telefono: <span className="phone">+39 328-4879342</span>
                            </p>
                        </li>
                        {/* email */}
                        <li className="contacts-item">
                            <p className="contacts-text">
                                Email: <span className="email">russoantonio303@outlook.it</span>
                            </p>
                        </li>
                    </ul>

                    {/* socials */}
                    <ul className="social-list">
                        <li className="social-item inline-block">
                            <a
                                className="social-link block me-4"
                                href="https://www.linkedin.com/in/antonio-russo-361705340/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="https://img.icons8.com/ios-glyphs/40/ffffff/linkedin.png"
                                    alt="linkedin-icon"
                                />
                            </a>
                        </li>
                        <li className="social-item inline-block">
                            <a
                                className="social-link"
                                href="https://github.com/antoniorusso2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"
                                    alt="github-icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
