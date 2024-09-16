// let world;
// let keyboard = new Keyboard();
// let intervalIds = [];
// let restartButton = document.getElementById('restartButton');
// let homeButton = document.getElementById('homeButton');
// let startImg;
// let canvas;
// let isGameStarted = false;
// let isMuted = false;
// let soundsMuted = false;
// let backgroundMusic = new Sound('../../assets/audio/background.mp3', true, 0.3);
// let allSounds = [];


// function init() {
//     generateElements();
//     hideStartButtons();
//     showStartButtons();
//     showStart();
//     startGame();
//     world = new World(canvas, keyboard);
// }

// function startGame() {
//     isGameStarted = true;

//     if (!isMuted) {
//         backgroundMusic.setVolume(0.5);
//         backgroundMusic.play();
//     }

//     if (soundsMuted) {
//         soundsMuted = true;
//     } else {
//         soundsMuted = false;

//     }
// }

// function restartWorld() {
//     world = null;
//     resetIntervallIds();
//     resetSoundIds();
//     resetBackgroundMusic();
//     isGameStarted = false;
// }

// function restart() {
//     restartWorld();
//     hideStartButtons();
//     showStartButtons();
//     init();
// }

// function goToHome() {
//     restartWorld();
//     showStartImage();
//     showStartButtons();
//     hideStartButtons();
//     resetBackgroundMusic();
// }

// function showStartButtons() {
//     const buttons = ['restartButton', 'homeButton'];
//     buttons.forEach(id => document.getElementById(id).classList.toggle('d-none'));
// }

// function hideStartButtons() {
//     const buttons = ['startButton', 'gameButton', 'infoButton', 'controlsButton'];
//     buttons.forEach(id => document.getElementById(id).classList.toggle('d-none'));
// }

// function showStart() {
//     world = null;
//     startImg = document.getElementById('startImg');
//     canvas = document.getElementById('canvas');
//     canvas.classList.remove('d-none');
//     startImg.classList.add('d-none');
// }

// function showStartImage() {
//     canvas.classList.add('d-none');
//     startImg.classList.remove('d-none');
// }

// function toggleBackgroundMusic() {
//     let toggleMusic = document.getElementById('music');
//     if (isMuted) {
//         toggleMusic.src = '../../assets/img/music_on.png';
//         if (isGameStarted) {
//             backgroundMusic.setVolume(0.5);
//             backgroundMusic.play();
//         }
//         isMuted = false;

//     } else {
//         toggleMusic.src = '../../assets/img/music_off.png';
//         if (isGameStarted) {
//             backgroundMusic.setVolume(0);
//         }
//         isMuted = true;
//     }
// }

// function toggleSounds() {
//     let toggleSounds = document.getElementById('sound');
//     if (soundsMuted) {
//         toggleSounds.src = '../../assets/img/mute.png';
//         soundsMuted = false;
//         if (isGameStarted) {
//             muteAllSounds();
//         }
//     } else {
//         toggleSounds.src = '../../assets/img/sound_on.png';
//         soundsMuted = true;
//         if (isGameStarted) {
//             unMuteAllSounds();
//         }
//     }
// }

// function resetBackgroundMusic() {
//     backgroundMusic.stop();
// }

// function muteAllSounds() {
//     allSounds.forEach(sound => sound.mute());
// }

// function unMuteAllSounds() {
//     allSounds.forEach(sound => sound.setVolume(0.5));
// }

// function setStoppableSound(path, loop, initialVolume) {
//     let sound = new Sound(path, loop, initialVolume);
//     allSounds.push(sound);
//     return sound; // Gebe die Sound-Instanz zurück, damit sie in den Klassen verwendet werden kann
// }

// function resetSoundIds() {
//     allSounds.forEach(clearInterval);
//     allSounds = [];
// }

// function setStoppableInterval(fn, time) {
//     let id = setInterval(fn, time);
//     intervalIds.push(id);
// }

// function resetIntervallIds() {
//     intervalIds.forEach(clearInterval);
//     intervalIds = [];
// }

// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 39) {
//         keyboard.RIGHT = true;
//     }
//     if (e.keyCode == 37) {
//         keyboard.LEFT = true;
//     }
//     if (e.keyCode == 38) {
//         keyboard.UP = true;
//     }
//     if (e.keyCode == 40) {
//         keyboard.DOWN = true;
//     }
//     if (e.keyCode == 32) {
//         e.preventDefault();
//         keyboard.SPACE = true;
//     }
//     if (e.keyCode == 68) {
//         keyboard.D = true;
//     }
// });

// window.addEventListener("keyup", (e) => {
//     if (e.keyCode == 39) {
//         keyboard.RIGHT = false;
//     }
//     if (e.keyCode == 37) {
//         keyboard.LEFT = false;
//     }
//     if (e.keyCode == 38) {
//         keyboard.UP = false;
//     }
//     if (e.keyCode == 40) {
//         keyboard.DOWN = false;
//     }
//     if (e.keyCode == 32) {
//         keyboard.SPACE = false;
//     }
//     if (e.keyCode == 68) {
//         keyboard.D = false;
//     }
// });

let world;
let keyboard = new Keyboard();
let intervalIds = [];
let restartButton = document.getElementById('restartButton');
let homeButton = document.getElementById('homeButton');
let startImg;
let canvas;
let isGameStarted = false;
let isMuted = false;
let soundsMuted = false;
let backgroundMusic = new Sound('../../assets/audio/background.mp3', true, 0.3);
let allSounds = [];

function init() {
    generateElements();
    hideStartButtons();
    showStartButtons();
    showStart();
    world = new World(canvas, keyboard);
    startGame();

}

function startGame() {
    isGameStarted = true;

    if (!isMuted) {
        backgroundMusic.setVolume(0.3);
        backgroundMusic.play();
    } else {
        backgroundMusic.setVolume(0);
    }

    if (soundsMuted) {
        muteAllSounds();
    }
}

function restartWorld() {
    world = null;
    resetIntervallIds();
    resetSoundIds();
    resetBackgroundMusic();
    isGameStarted = false;
}

function restart() {
    restartWorld();
    hideStartButtons();
    showStartButtons();
    init();
}

function goToHome() {
    restartWorld();
    showStartImage();
    showStartButtons();
    hideStartButtons();
    resetBackgroundMusic();
}

function showStartButtons() {
    const buttons = ['restartButton', 'homeButton'];
    buttons.forEach(id => document.getElementById(id).classList.toggle('d-none'));
}

function hideStartButtons() {
    const buttons = ['startButton', 'gameButton', 'infoButton', 'controlsButton'];
    buttons.forEach(id => document.getElementById(id).classList.toggle('d-none'));
}

function showStart() {
    world = null;
    startImg = document.getElementById('startImg');
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    startImg.classList.add('d-none');
}

function showStartImage() {
    canvas.classList.add('d-none');
    startImg.classList.remove('d-none');
}

function toggleBackgroundMusic() {
    let toggleMusic = document.getElementById('music');
    if (isMuted) {
        toggleMusic.src = '../../assets/img/music_on.png';
        isMuted = false;

        // Spiele die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
        if (isGameStarted || !isGameStarted) {
            backgroundMusic.setVolume(0.5);
            backgroundMusic.play();
        }
    } else {
        toggleMusic.src = '../../assets/img/music_off.png';
        isMuted = true;

        // Pausiere die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
        backgroundMusic.setVolume(0);
    }
}

function toggleSounds() {
    let toggleSounds = document.getElementById('sound');
    if (!soundsMuted) {
        toggleSounds.src = '../../assets/img/mute.png';
        soundsMuted = true;

        // Schalte die Sounds wieder an, auch wenn das Spiel noch nicht gestartet ist.
        if (isGameStarted || !isGameStarted) {
            muteAllSounds();
        }
    } else {
        toggleSounds.src = '../../assets/img/sound_on.png';
        soundsMuted = false;

        // Mute die Sounds, auch wenn das Spiel noch nicht gestartet ist.
        if (isGameStarted || !isGameStarted) {
            unMuteAllSounds();
        }
    }
}

function resetBackgroundMusic() {
    backgroundMusic.stop();
}

function muteAllSounds() {
    allSounds.forEach(sound => sound.mute());
}

function unMuteAllSounds() {
    allSounds.forEach(sound => sound.setVolume(0.5));
}

function setStoppableSound(path, loop, initialVolume) {
    let sound = new Sound(path, loop, initialVolume);
    allSounds.push(sound);
    return sound; // Gebe die Sound-Instanz zurück, damit sie in den Klassen verwendet werden kann
}

function resetSoundIds() {
    allSounds.forEach(clearInterval);
    allSounds = [];
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function resetIntervallIds() {
    intervalIds.forEach(clearInterval);
    intervalIds = [];
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        e.preventDefault();
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});
