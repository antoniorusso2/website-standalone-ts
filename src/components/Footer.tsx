export default function Footer() {
    return (
        <footer className="footer fixed bottom-0 w-full py-4">
            <div className="container">
                <div className="w-full border-b-2 border-b-cyan-800 py-4">
                    {/* rights */}
                    <div className="flex justify-end">
                        <p className="ms-auto text-(--color-text-secondary)">
                            &copy; 2025 AntonioRusso.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
