interface SectionContainerProps {
    id: string
    children: React.ReactNode
}

export default function SectionContainer({
    children,
    id,
}: SectionContainerProps) {
    return (
        <section
            id={id}
            className="about_me flex min-h-screen flex-col items-center justify-center py-24"
        >
            {children}
        </section>
    )
}
