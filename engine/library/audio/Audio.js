export const playFile = (url) => {
    const audio = new Audio(url);
    audio.play();
}