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
            className={`about_me flex min-h-screen flex-col items-center py-20 md:py-24 ${className}`}
        >
            {children}
        </section>
    )
}
