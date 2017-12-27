export default class Math {
    /**
     * Returns a whole number between [min] and [max]
     */
    static random = (min, max) => {
        const value = (Math.random() * (min - max)) - min;
        return Math.round(value);
    }

    /**
     * Caps [value] between min and max (inclusive)
     */
    static clamp = (value, min, max) => {
        if(value <= min) return min;
        if(value >= max) return max;
        return value;
    }
}