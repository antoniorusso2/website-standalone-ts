import { useState } from "react";
import ArrowLeft from "../../ui/icons/ArrowLeft";
import ArrowRight from "../../ui/icons/ArrowRight";

interface Media {
    url: string;
    type: string;
}

interface MediaCarouselProps {
    mediaList: Media[];
}

export default function MediaCarousel({ mediaList }: MediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState("");

    const openModal = (src: string) => {
        setModalSrc(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalSrc("");
    };

    const showPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? mediaList.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setCurrentIndex((prev) =>
            prev === mediaList.length - 1 ? 0 : prev + 1
        );
    };

    const currentMedia = mediaList[currentIndex];
    if (!currentMedia) return null;
    const currentMediaUrl = currentMedia.url;

    return (
        <div className="project_carousel relative w-full mb-6">
            <div className="relative overflow-hidden rounded-lg flex items-center justify-center bg-[var(--color-bg-medium)]/50 md:min-h-96">
                {mediaList[currentIndex].type === "image" ? (
                    <img
                        src={currentMediaUrl}
                        className="w-full aspect-square md:aspect-auto max-h-[600px] object-cover object-top cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
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
                        className="w-full max-h-[500px] object-cover rounded"
                    />
                )}

                {/* Controlli prev/next sovrapposti */}
                {mediaList.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 md:px-6 pointer-events-none">
                        <button
                            className="pointer-events-auto bg-[var(--color-bg-dark)]/60 hover:bg-[var(--color-accent-blue)]/70 text-[var(--color-text-primary)] p-2 md:p-3 rounded-full transition-all"
                            onClick={showPrev}
                            aria-label="Immagine precedente"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            className="pointer-events-auto bg-[var(--color-bg-dark)]/60 hover:bg-[var(--color-accent-blue)]/70 text-[var(--color-text-primary)] p-2 md:p-3 rounded-full transition-all"
                            onClick={showNext}
                            aria-label="Immagine successiva"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                )}
            </div>

            {/* Modal per ingrandimento */}
            {modalOpen && <ImageModal src={modalSrc} onClose={closeModal} />}
        </div>
    );
}
