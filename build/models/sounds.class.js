/**
 * Class representing a sound object that can be played, paused, and controlled in volume.
 */
class Sound {
    /**
     * Creates a new Sound instance.
     * @param {string} src - The source path of the audio file.
     * @param {boolean} [loop=false] - Whether the sound should loop.
     * @param {number} [initialVolume=1.0] - The initial volume of the sound.
     */
    constructor(src, loop = false, initialVolume = 1.0) {
        this.audio = new Audio(src);
        this.audio.loop = loop;
        this.audio.volume = initialVolume;
    }

    /**
     * Plays the sound if it is not already playing.
     */
    play() {
        if (this.canPlay()) {
            this.audio.play();
        }
    }

    /**
     * Pauses the sound if it is currently playing.
     */
    pause() {
        if (this.canPause()) {
            this.audio.pause();
        }
    }

    /**
     * Stops the sound and resets the playback time to the beginning.
     */
    stop() {
        if (this.audio) {
            this.audio.pause();
            this.resetPlayback();
        }
    }

    /**
     * Sets the volume of the sound.
     * @param {number} volume - The volume level to set (0.0 to 1.0).
     */
    setVolume(volume) {
        if (this.audio) {
            this.audio.volume = volume;
        }
    }

    /**
     * Mutes the sound by setting the volume to zero.
     */
    mute() {
        this.setVolume(0);
    }

    /**
     * Disposes of the sound object by pausing it and clearing the source.
     */
    dispose() {
        this.clearAudioSource();
    }

    /**
     * Checks if the sound can be played (i.e., it exists and is paused).
     * @returns {boolean} - True if the sound can be played, false otherwise.
     */
    canPlay() {
        return this.audio && this.audio.paused;
    }

    /**
     * Checks if the sound can be paused (i.e., it exists and is playing).
     * @returns {boolean} - True if the sound can be paused, false otherwise.
     */
    canPause() {
        return this.audio && !this.audio.paused;
    }

    /**
     * Resets the playback time of the sound to the beginning.
     */
    resetPlayback() {
        this.audio.currentTime = 0;
    }

    /**
     * Clears the audio source and unloads the sound.
     */
    clearAudioSource() {
        if (this.audio) {
            this.audio.pause();
            this.audio.src = '';
            this.audio.load();
            this.audio = null;
        }
    }
}
