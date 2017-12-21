export const random = (min, max) => {
    const value = (Math.random() * (min - max)) - min;
    return Math.round(value);
}