interface SectionContainerProps {
    id: string;
    children: React.ReactNode;
}

export default function SectionContainer({ children, id }: SectionContainerProps) {
    return (
        <section
            id={id}
            className="about_me min-h-screen py-24 flex flex-col items-center justify-center"
        >
            {children}
        </section>
    );
}
