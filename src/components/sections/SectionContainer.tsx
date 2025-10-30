interface SectionContainerProps {
    id: string
    children: React.ReactNode
    className?: string
}

export default function SectionContainer({
    children,
    id,
    className = "",
}: SectionContainerProps) {
    return (
        <section
            id={id}
            className={`about_me flex min-h-screen flex-col items-center py-18 md:py-48 ${className}`}
        >
            {children}
        </section>
    )
}
