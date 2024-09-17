// // class Sound {
// //     static allSounds = [];  // Statische Liste aller Sounds
// //     static isMuted = false; // Statischer Zustand für globales Mute

// //     constructor(src, volume = 1, loop = false) {
// //         this.audio = new Audio(src);
// //         this.audio.volume = volume;
// //         this.audio.loop = loop;
// //         this.isPlaying = false;  // Zustand, ob der Sound gerade spielt

// //         Sound.allSounds.push(this);  // Füge den Sound zur statischen Liste hinzu
// //     }

// //     play() {
// //         if (!Sound.isMuted) {
// //             this.audio.play();
// //             this.isPlaying = true;
// //         }
// //     }

// //     pause() {
// //         this.audio.pause();
// //         this.isPlaying = false;
// //     }

// //     stop() {
// //         this.audio.pause();
// //         this.audio.currentTime = 0;  // Setzt den Sound auf den Anfang
// //         this.isPlaying = false;
// //     }

// //     static muteAll() {
// //         Sound.isMuted = true;
// //         Sound.allSounds.forEach(sound => sound.pause());
// //     }

// //     static unmuteAll() {
// //         Sound.isMuted = false;
// //         Sound.allSounds.forEach(sound => {
// //             if (sound.isPlaying) {
// //                 sound.play();
// //             }
// //         });
// //     }

// //     static toggleMute() {
// //         if (Sound.isMuted) {
// //             Sound.unmuteAll();
// //         } else {
// //             Sound.muteAll();
// //         }
// //     }

// //     setVolume(volume) {
// //         this.audio.volume = volume;
// //     }

// //     setLoop(loop) {
// //         this.audio.loop = loop;
// //     }
// // }

// class Sound {
//     static allSounds = [];  // Statische Liste aller Sounds
//     static isMuted = false; // Statischer Zustand für globales Mute

//     constructor(src, volume = 1, loop = false) {
//         this.audio = new Audio(src);
//         this.audio.volume = volume;
//         this.audio.loop = loop;
//         this.isPlaying = false;  // Zustand, ob der Sound gerade spielt

//         Sound.allSounds.push(this);  // Füge den Sound zur statischen Liste hinzu
//     }

//     async play() {
//         if (!Sound.isMuted && this.audio.paused) {
//             try {
//                 await this.audio.play();  // Warte auf den Abschluss des `play()`-Befehls
//                 this.isPlaying = true;
//             } catch (error) {
//                 console.error("Audio konnte nicht abgespielt werden: ", error);
//             }
//         }
//     }


//     pause() {
//         if (!this.audio.paused) {
//             this.audio.pause();
//             this.isPlaying = false;
//         }
//     }
//     stop() {
//         this.audio.pause();
//         this.audio.currentTime = 0;  // Setzt den Sound auf den Anfang
//         this.isPlaying = false;
//     }

//     static stopAll() {
//         Sound.allSounds.forEach(sound => {
//             sound.stop();
//         });
//     }

//     // Methode zum Leeren der Sounds und Zurücksetzen der Liste
//     static resetSounds() {
//         this.stopAll();  // Stoppe alle laufenden Sounds
//         Sound.allSounds = [];  // Leere die Liste aller Sounds
//     }

//     static muteAll() {
//         Sound.isMuted = true;
//         Sound.allSounds.forEach(sound => sound.pause());
//     }

//     static unmuteAll() {
//         Sound.isMuted = false;
//         Sound.allSounds.forEach(sound => {
//             if (sound.isPlaying) {
//                 sound.play();
//             }
//         });
//     }

//     static toggleMute() {
//         if (Sound.isMuted) {
//             Sound.unmuteAll();
//         } else {
//             Sound.muteAll();
//         }
//     }

//     setVolume(volume) {
//         this.audio.volume = volume;
//     }

//     setLoop(loop) {
//         this.audio.loop = loop;
//     }
// }

// class Sound {
//     static allSounds = [];  // Statische Liste aller Sounds
//     static isMuted = false; // Statischer Zustand für globales Mute

//     constructor(src, volume = 1, loop = false) {
//         this.audio = new Audio(src);
//         this.audio.volume = volume;
//         this.audio.loop = loop;
//         this.isPlaying = false;  // Zustand, ob der Sound gerade spielt

//         // Automatisches Zurücksetzen nach dem Ende des Sounds
//         this.audio.addEventListener('ended', () => {
//             this.audio.currentTime = 0; // Setzt die Wiedergabeposition auf den Anfang zurück
//             this.isPlaying = false;
//         });

//         Sound.allSounds.push(this);  // Füge den Sound zur statischen Liste hinzu
//     }

//     play() {
//         if (!Sound.isMuted && this.audio.paused) {
//             this.isPlaying = true;
//             this.audio.play();  // Warte auf den Abschluss des `play()`-Befehls
//         }
//     }

//     pause() {
//         if (!this.audio.paused) {
//             this.audio.pause();
//             this.isPlaying = false;
//         }
//     }

//     stop() {
//         this.audio.pause();
//         this.audio.currentTime = 0;  // Setzt den Sound auf den Anfang
//         this.isPlaying = false;
//     }

//     static stopAll() {
//         Sound.allSounds.forEach(sound => {
//             sound.stop();
//         });
//     }

//     static resetSounds() {
//         this.stopAll();
//         Sound.allSounds = [];
//     }

//     static muteAll() {
//         Sound.isMuted = true;
//         Sound.allSounds.forEach(sound => sound.pause());
//     }

//     static unmuteAll() {
//         Sound.isMuted = false;
//         Sound.allSounds.forEach(sound => {
//             if (sound.isPlaying) {
//                 sound.play();
//             }
//         });
//     }

//     static toggleMute() {
//         if (Sound.isMuted) {
//             Sound.unmuteAll();
//         } else {
//             Sound.muteAll();
//         }
//     }

//     setVolume(volume) {
//         this.audio.volume = volume;
//     }

//     setLoop(loop) {
//         this.audio.loop = loop;
//     }
// }

// class Sound {
//     constructor(src, loop = false, initialVolume = 1.0) {
//         this.audio = new Audio(src);
//         this.audio.loop = loop; // Optional, ob der Sound wiederholt abgespielt wird
//         this.audio.volume = this._sanitizeVolume(initialVolume); // Setzt das anfängliche Volume
//     }

//     _sanitizeVolume(volume) {
//         // Stellt sicher, dass das Volume zwischen 0.0 und 1.0 liegt
//         return Math.min(1, Math.max(0, volume));
//     }

//     play() {
//         this.audio.play().catch((error) => {
//             console.log("Error while playing the sound:", error);
//         });
//     }

//     pause() {
//         this.audio.pause();
//     }

//     stop() {
//         this.audio.pause();
//         this.audio.currentTime = 0; // Setzt den Sound auf den Anfang zurück
//     }

//     toggle() {
//         if (this.audio.paused) {
//             this.play();
//         } else {
//             this.pause();
//         }
//     }

//     setVolume(volume) {
//         // Setzt das Volume, sicherstellen, dass es zwischen 0.0 und 1.0 liegt
//         this.audio.volume = this._sanitizeVolume(volume);
//     }

//     getVolume() {
//         // Gibt die aktuelle Lautstärke zurück
//         return this.audio.volume;
//     }

//     mute() {
//         this.audio.muted = true;
//     }

//     unmute() {
//         this.audio.muted = false;
//     }

//     isMuted() {
//         return this.audio.muted;
//     }
// }

// class Sound {
//     constructor(src, loop = false, initialVolume = 1.0) {
//         this.audio = new Audio(src);
//         this.audio.loop = loop;
//         this.audio.volume = initialVolume;
//     }

//     play() {
//         this.audio.play()
//     }

//     pause() {
//         this.audio.pause();
//     }

//     stop() {
//         this.audio.pause();
//         this.audio.currentTime = 0; // Setzt die Musik auf den Anfang zurück
//     }

//     setVolume(volume) {
//         this.audio.volume = volume;
//     }

//     mute() {
//         this.audio.volume = 0;
//     }
// }

class Sound {
    constructor(src, loop = false, initialVolume = 1.0) {
        this.audio = new Audio(src);
        this.audio.loop = loop;
        this.audio.volume = initialVolume;
    }

    play() {
        if (this.audio && this.audio.paused) {
            this.audio.play();
        }
    }

    pause() {
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
        }
    }

    stop() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }

    setVolume(volume) {
        if (this.audio) {
            this.audio.volume = volume;
        }
    }

    mute() {
        if (this.audio) {
            this.audio.volume = 0;
        }
    }

    // Neu: Ressourcen freigeben
    dispose() {
        if (this.audio) {
            this.audio.pause();      // Pausiere das Audio, falls es noch läuft
            this.audio.src = '';     // Entferne die Quelle, um Ressourcen freizugeben
            this.audio.load();       // Lade das Audio-Element neu, um es zurückzusetzen
            this.audio = null;       // Setze die Referenz auf null, um das Audio zu löschen
        }
    }
}
