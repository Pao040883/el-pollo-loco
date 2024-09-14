class Sound {
    constructor(src, volume = 1, loop = false) {
        this.audio = new Audio(src);
        this.audio.volume = volume;
        this.audio.loop = loop;
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    setVolume(volume) {
        this.audio.volume = volume;
    }

    setLoop(loop) {
        this.audio.loop = loop;
    }
}
