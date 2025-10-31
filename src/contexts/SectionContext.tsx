import { createContext, useState } from "react"

type SectionContextType = {
    currentSection: string
    setCurrentSection: (sectionId: string) => void
    handleScrollToSection: (sectionId: string, scroll?: boolean) => void
}

const SectionContext = createContext<SectionContextType | null>(null)

export function SectionProvider({ children }: { children: React.ReactNode }) {
    const [currentSection, setCurrentSection] = useState<string>("#about_me")

    const handleScrollToSection = (sectionId: string, scroll: boolean = false) => {
        const element = document.querySelector(sectionId)

        if (scroll && element) {
            element.scrollIntoView({ behavior: "smooth" })
            console.log(element)
        }

        if (element) {
            setCurrentSection(sectionId)
        }
    }

    return (
        <SectionContext.Provider value={{ currentSection, setCurrentSection, handleScrollToSection }}>
            {children}
        </SectionContext.Provider>
    )
}

export default SectionContext
