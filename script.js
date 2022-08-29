window.addEventListener("keydown", e => {
    const key = document.querySelector(`.drum-key-${e.key.toLowerCase()}`);
    const sound = document.querySelector(`.drum-audio-${e.key.toLowerCase()}`)
    sound.currentTime = 0;
    if (key != null)  {
        key.classList.toggle("playing");
        sound.play();
        window.setTimeout(() => {
            key.classList.toggle("playing");
        }, 300);
    }
})