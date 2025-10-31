/**
 * function used to determine if in the ui/badge component the text color should be dark or light based on the background luminance
 * @param hex
 * @returns
 */

export function isColorLight(hex: string): boolean {
    hex = hex.replace("#", "")

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((c) => c + c)
            .join("")
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 2), 16)

    // Formula per la luminanza percepita
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b

    return luminance > 170
}
