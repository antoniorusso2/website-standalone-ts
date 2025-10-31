import { createContext, useState } from "react"

type SectionContextType = {
    currentSection: string
    setCurrentSection: (sectionId: string) => void
    handleScrollToSection: (sectionId: string) => void
}

const SectionContext = createContext<SectionContextType | null>(null)

export function SectionProvider({ children }: { children: React.ReactNode }) {
    const [currentSection, setCurrentSection] = useState<string>("#about_me")

    const handleScrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId)
        if (element) {
            setCurrentSection(sectionId)
        }
    }

    return (
        <SectionContext.Provider
            value={{ currentSection, setCurrentSection, handleScrollToSection }}
        >
            {children}
        </SectionContext.Provider>
    )
}

export default SectionContext
