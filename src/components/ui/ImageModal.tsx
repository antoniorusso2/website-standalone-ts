import type { ImageModalProps } from "../../types/modal"
import XMark from "./icons/XMark"

export default function ImageModal({ src, onClose }: ImageModalProps) {
    if (!src) return null

    return (
        <div
            className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
            onClick={onClose}
        >
            <div
                className="relative max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={src}
                    className="max-h-[90vh] max-w-[90vw] object-contain"
                    alt="Immagine ingrandita"
                />
                <button
                    className="absolute top-4 right-4 cursor-pointer rounded-sm bg-[var(--accent-color)] p-2 text-3xl text-white transition-opacity md:opacity-80 md:hover:opacity-100"
                    onClick={onClose}
                >
                    <XMark />
                </button>
            </div>
        </div>
    )
}
