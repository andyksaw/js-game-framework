/**
 * Returns a whole number between [min] and [max]
 * 
 * @param {number} min 
 * @param {number} max 
 * 
 * @return {number}
 */
export function random(min: number, max: number) : number {
    const value = (Math.random() * (min - max)) - min;
    return Math.round(value);
}

/**
 * Caps [value] between min and max (inclusive)
 * 
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * 
 * @return {number}
 */
export function clamp(value: number, min: number, max: number) : number {
    if(value <= min) return min;
    if(value >= max) return max;
    return value;
}