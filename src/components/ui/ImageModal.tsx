import type { ImageModalProps } from "../../types/modal";
import XMark from "./icons/XMark";

export default function ImageModal({ src, onClose }: ImageModalProps) {
    if (!src) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="relative max-w-full max-h-full "
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={src}
                    className="max-w-[90vw] max-h-[90vh] object-contain"
                    alt="Immagine ingrandita"
                />
                <button
                    className="absolute top-4 right-4 text-white text-3xl p-2 rounded-sm bg-[var(--accent-color)] md:opacity-80 md:hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={onClose}
                >
                    <XMark />
                </button>
            </div>
        </div>
    );
}
