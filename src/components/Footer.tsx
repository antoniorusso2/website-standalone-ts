export default function Footer() {
    return (
        <footer className="footer fixed bottom-0 py-4 w-full">
            <div className="container">
                <div className="border-b-2 border-b-cyan-800 py-4 w-full">
                    {/* rights */}
                    <div className="justify-end flex">
                        <p className="text-(--color-text-secondary) ms-auto">
                            &copy; 2025 AntonioRusso.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
