import { useContext } from "react"
import SectionContext from "../contexts/SectionContext"

export default function useSectionContext() {
    const context = useContext(SectionContext)

    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider")
    }

    return context
}
