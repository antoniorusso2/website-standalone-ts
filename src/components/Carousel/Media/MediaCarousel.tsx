import { useState } from "react"
import ArrowLeft from "../../ui/icons/ArrowLeft"
import ArrowRight from "../../ui/icons/ArrowRight"
import type { MediaCarouselProps } from "../../../types/media"
import ImageModal from "../../ui/ImageModal"

export default function MediaCarousel({ mediaList }: MediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const [modalOpen, setModalOpen] = useState(false)
    const [modalSrc, setModalSrc] = useState("")

    const openModal = (src: string) => {
        setModalSrc(src)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setModalSrc("")
    }

    const showPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? mediaList.length - 1 : prev - 1
        )
    }

    const showNext = () => {
        setCurrentIndex((prev) =>
            prev === mediaList.length - 1 ? 0 : prev + 1
        )
    }

    const currentMedia = mediaList[currentIndex]
    if (!currentMedia) return null
    const currentMediaUrl = currentMedia.url

    return (
        <div className="project_carousel relative mb-6 w-full">
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-[var(--color-bg-medium)]/50 md:h-[600px]">
                {mediaList[currentIndex].type === "image" ? (
                    <img
                        src={currentMediaUrl}
                        className="aspect-square max-h-[600px] w-full cursor-pointer object-cover object-top transition-transform duration-300 hover:scale-[1.02] md:aspect-auto md:object-center"
                        alt="Immagine del progetto"
                        onError={(
                            e: React.SyntheticEvent<HTMLImageElement, Event>
                        ) => (e.currentTarget.src = "/placeholder-600-400.png")}
                        onClick={() => openModal(currentMediaUrl)}
                    />
                ) : (
                    <video
                        controls
                        src={currentMediaUrl}
                        className="max-h-[500px] w-full rounded object-cover"
                    />
                )}

                {/* Controlli prev/next sovrapposti */}
                {mediaList.length > 1 && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-6">
                        <button
                            className="pointer-events-auto rounded-full bg-[var(--color-bg-dark)]/60 p-2 text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-accent-blue)]/70 md:p-3"
                            onClick={showPrev}
                            aria-label="Immagine precedente"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            className="pointer-events-auto rounded-full bg-[var(--color-bg-dark)]/60 p-2 text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-accent-blue)]/70 md:p-3"
                            onClick={showNext}
                            aria-label="Immagine successiva"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                )}
            </div>

            {/* Modal per ingrandimento */}
            {modalOpen && <ImageModal src={modalSrc} onClose={closeModal} />}
        </div>
    )
}
