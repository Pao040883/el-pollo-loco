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
// let backgroundMusic = new Sound('./assets/audio/background.mp3', true, 0.3);
// let allSounds = [];

// function init() {
//     generateElements();
//     hideStartButtons();
//     showStartButtons();
//     showStart();
//     world = new World(canvas, keyboard);
//     startGame();

// }

// function startGame() {
//     isGameStarted = true;

//     if (!isMuted) {
//         backgroundMusic.setVolume(0.3);
//         backgroundMusic.play();
//     } else {
//         backgroundMusic.setVolume(0);
//     }

//     if (soundsMuted) {
//         muteAllSounds();
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

// function gameOver() {

// }

// function winScreen() {

// }

// function toggleBackgroundMusic() {
//     let toggleMusic = document.getElementById('music');
//     if (isMuted) {
//         toggleMusic.src = './assets/img/music_on.png';
//         isMuted = false;

//         // Spiele die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
//         if (isGameStarted) {
//             backgroundMusic.setVolume(0.5);
//             backgroundMusic.play();
//         }
//     } else {
//         toggleMusic.src = './assets/img/music_off.png';
//         isMuted = true;

//         // Pausiere die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
//         backgroundMusic.setVolume(0);
//     }
// }

// function toggleSounds() {
//     let toggleSounds = document.getElementById('sound');
//     if (!soundsMuted) {
//         toggleSounds.src = './assets/img/mute.png';
//         soundsMuted = true;

//         // Schalte die Sounds wieder an, auch wenn das Spiel noch nicht gestartet ist.
//         if (isGameStarted || !isGameStarted) {
//             muteAllSounds();
//         }
//     } else {
//         toggleSounds.src = './assets/img/sound_on.png';
//         soundsMuted = false;

//         // Mute die Sounds, auch wenn das Spiel noch nicht gestartet ist.
//         if (isGameStarted || !isGameStarted) {
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
//     return sound;
// }

// function resetSoundIds() {
//     allSounds.forEach(sound => sound.dispose());
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

// document.addEventListener('DOMContentLoaded', function () {
//     const images = document.querySelectorAll('img');
//     images.forEach(img => {
//         img.addEventListener('contextmenu', function (event) {
//             event.preventDefault();
//         });
//         img.addEventListener('touchstart', function (event) {
//             event.preventDefault();
//         });
//         img.addEventListener('touchend', function (event) {
//             event.preventDefault();
//         });
//     });
// });

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
// let backgroundMusic = new Sound('./assets/audio/background.mp3', true, 0.3);
// let allSounds = [backgroundMusic]; // Alle Sounds, die geladen werden müssen

// // Funktion zur Anzeige des Ladebalkens
// function updateLoadingBar(progress) {
//     let loadingBar = document.getElementById('loading-bar');
//     loadingBar.style.width = progress + '%';
// }

// function resetLoadingBar() {
//     let loadingBar = document.getElementById('loading-bar');
//     loadingBar.style.width = 0;
// }

// function hideLoadingScreen() {
//     let loadingContainer = document.getElementById('loading-container');
//     loadingContainer.classList.add('d-none');
// }

// // Sounds laden und den Ladebalken aktualisieren
// function loadSoundsAndStartGame() {
//     document.getElementById('loading-container').classList.remove('d-none');
//     let loadedSounds = 0;

//     allSounds.forEach(sound => {
//         sound.audio.addEventListener('canplaythrough', () => {
//             loadedSounds++;
//             let progress = (loadedSounds / allSounds.length) * 100;
//             updateLoadingBar(progress);

//             if (loadedSounds === allSounds.length) {
//                 hideLoadingScreen();
//                 resetLoadingBar();
//                 startGame(); // Starte das Spiel, nachdem alle Sounds geladen sind
//             }
//         });

//         // Startet das Laden des Sounds
//         sound.audio.load();
//     });
// }

// function init() {
//     generateElements();
//     hideStartButtons();
//     showStartButtons();
//     showStart();
//     world = new World(canvas, keyboard);
//     loadSoundsAndStartGame(); // Lade die Sounds, bevor das Spiel gestartet wird
// }

// function startGame() {
//     isGameStarted = true;

//     if (!isMuted) {
//         backgroundMusic.setVolume(0.3);
//         backgroundMusic.play();
//     } else {
//         backgroundMusic.setVolume(0);
//     }

//     if (soundsMuted) {
//         muteAllSounds();
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

// function gameOver() {

// }

// function winScreen() {

// }

// function toggleBackgroundMusic() {
//     let toggleMusic = document.getElementById('music');
//     if (isMuted) {
//         toggleMusic.src = './assets/img/music_on.png';
//         isMuted = false;

//         // Spiele die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
//         if (isGameStarted) {
//             backgroundMusic.setVolume(0.5);
//             backgroundMusic.play();
//         }
//     } else {
//         toggleMusic.src = './assets/img/music_off.png';
//         isMuted = true;

//         // Pausiere die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
//         backgroundMusic.setVolume(0);
//     }
// }

// function toggleSounds() {
//     let toggleSounds = document.getElementById('sound');
//     if (!soundsMuted) {
//         toggleSounds.src = './assets/img/mute.png';
//         soundsMuted = true;

//         // Schalte die Sounds wieder an, auch wenn das Spiel noch nicht gestartet ist.
//         if (isGameStarted || !isGameStarted) {
//             muteAllSounds();
//         }
//     } else {
//         toggleSounds.src = './assets/img/sound_on.png';
//         soundsMuted = false;

//         // Mute die Sounds, auch wenn das Spiel noch nicht gestartet ist.
//         if (isGameStarted || !isGameStarted) {
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
//     return sound;
// }

// function resetSoundIds() {
//     // allSounds.forEach(sound => sound.dispose());
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

// document.addEventListener('DOMContentLoaded', function () {
//     const images = document.querySelectorAll('img');
//     images.forEach(img => {
//         img.addEventListener('contextmenu', function (event) {
//             event.preventDefault();
//         });
//         img.addEventListener('touchstart', function (event) {
//             event.preventDefault();
//         });
//         img.addEventListener('touchend', function (event) {
//             event.preventDefault();
//         });
//     });
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
let backgroundMusic = new Sound('./assets/audio/background.mp3', true, 0.3);
let allSounds = [];

// Funktion zur Anzeige des Ladebalkens
function updateLoadingBar(progress) {
    let loadingBar = document.getElementById('loading-bar');
    loadingBar.style.width = progress + '%';
}

function hideLoadingScreen() {
    let loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('d-none');
}

function startGameAfterDelay() {
    let loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.remove('d-none');
    let progress = 0;
    const duration = 2000; // 5 Sekunden Ladezeit
    const intervalTime = 110; // Zeitintervall für das Fortschritts-Update
    const totalIntervals = duration / intervalTime;

    const loadingInterval = setInterval(() => {
        progress += 100 / totalIntervals;
        updateLoadingBar(progress);

        if (progress >= 100) {
            clearInterval(loadingInterval);
            hideLoadingScreen();
            startGame();
        }
    }, intervalTime);
}

function init() {
    generateElements();
    hideStartButtons();
    showStartButtons();
    startGameAfterDelay();
}

function startGame() {
    isGameStarted = true;

    showStart();

    world = new World(canvas, keyboard);


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
    updateLoadingBar(0);
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

function gameOver() {
    // Entferne alle Feinde und sammelbaren Objekte sofort
    world.level.enemies = [];
    world.level.coins = [];
    world.level.bottles = [];
    world.throwableObjects = [];

    // Leere das gesamte Canvas
    world.clearCanvas();

    // Zeichne nur den Hintergrund und den Charakter neu
    world.addObjectsToMap(world.level.backgroundObjects);  // Zeichne den Hintergrund
    world.addToMap(world.character);  // Zeichne den Charakter (Todesanimation läuft weiter)

    // Optional: Hier könntest du zusätzliche Logik hinzufügen, wenn das Game-Over abgeschlossen ist
    console.log('Game Over!');
    document.getElementById('feedback-container').classList.remove('d-none');
    document.getElementById('feedback').src = './assets/img/9_intro_outro_screens/game_over/oh no you lost!.png';
}



function winScreen() {
    alert('Win');

}

function toggleBackgroundMusic() {
    let toggleMusic = document.getElementById('music');
    if (isMuted) {
        toggleMusic.src = './assets/img/music_on.png';
        isMuted = false;

        // Spiele die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
        if (isGameStarted) {
            backgroundMusic.setVolume(0.5);
            backgroundMusic.play();
        }
    } else {
        toggleMusic.src = './assets/img/music_off.png';
        isMuted = true;

        // Pausiere die Musik, wenn das Spiel gestartet ist oder im Startbildschirm.
        backgroundMusic.setVolume(0);
    }
}

function toggleSounds() {
    let toggleSounds = document.getElementById('sound');
    if (!soundsMuted) {
        toggleSounds.src = './assets/img/mute.png';
        soundsMuted = true;

        // Schalte die Sounds wieder an, auch wenn das Spiel noch nicht gestartet ist.
        if (isGameStarted || !isGameStarted) {
            muteAllSounds();
        }
    } else {
        toggleSounds.src = './assets/img/sound_on.png';
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
    return sound;
}

function resetSoundIds() {
    allSounds.forEach(sound => sound.dispose());
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

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        });
        img.addEventListener('touchstart', function (event) {
            event.preventDefault();
        });
        img.addEventListener('touchend', function (event) {
            event.preventDefault();
        });
    });
});
