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
let test = false;
let winGame = false;

/**
 * Updates the loading bar with the current progress.
 * @param {number} progress - The progress percentage to display.
 */
function updateLoadingBar(progress) {
    let loadingBar = document.getElementById('loading-bar');
    loadingBar.style.width = progress + '%';
}

/**
 * Hides the loading screen by adding a 'd-none' class to the container.
 */
function hideLoadingScreen() {
    let loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('d-none');
}

/**
 * Starts the game after a delay and displays a loading bar.
 */
function startGameAfterDelay() {
    let loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.remove('d-none');
    let progress = 0;
    const duration = 2000; // 2 seconds load time
    const intervalTime = 110; // Time interval for updating progress
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

/**
 * Initializes the game, hides and shows buttons, and starts the loading sequence.
 */
function init() {
    generateElements();
    hideStartButtons();
    showStartButtons();
    startGameAfterDelay();
}

/**
 * Starts the game, initializes the world, and manages the background music and sound settings.
 */
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

    test = false;
    winGame = false;
}

/**
 * Resets the world, intervals, and sound settings for a new game session.
 */
function restartWorld() {
    resetIntervallIds();
    document.getElementById('feedback-container').classList.add('d-none');
    resetIntervallIds();
    resetSoundIds();
    resetBackgroundMusic();
    isGameStarted = false;
    updateLoadingBar(0);
}

/**
 * Restarts the game by resetting the world and reinitializing the game.
 */
function restart() {
    restartWorld();
    hideStartButtons();
    showStartButtons();
    init();
}

/**
 * Returns the game to the home/start screen.
 */
function goToHome() {
    restartWorld();
    showStartImage();
    showStartButtons();
    hideStartButtons();
    resetBackgroundMusic();
}

/**
 * Shows the game control buttons by toggling the 'd-none' class.
 */
function showStartButtons() {
    const buttons = ['restartButton', 'homeButton'];
    buttons.forEach(id => document.getElementById(id).classList.toggle('d-none'));
}

/**
 * Hides the start buttons when the game begins.
 */
function hideStartButtons() {
    const buttons = ['startButton', 'infoButton', 'controlsButton'];
    buttons.forEach(id => document.getElementById(id).classList.toggle('d-none'));
}

/**
 * Shows the canvas and hides the start image when the game starts.
 */
function showStart() {
    world = null;
    startImg = document.getElementById('startImg');
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    startImg.classList.add('d-none');
}

/**
 * Shows the start image and hides the canvas when the player returns to the home screen.
 */
function showStartImage() {
    canvas.classList.add('d-none');
    startImg.classList.remove('d-none');
}

/**
 * Displays the game over screen and removes all enemies and collectibles from the game.
 */
function gameOver() {
    world.level.enemies = [];
    world.level.coins = [];
    world.level.bottles = [];
    world.throwableObjects = [];

    world.clearCanvas();

    world.addObjectsToMap(world.level.backgroundObjects);
    world.addToMap(world.character);

    if (!test) {
        document.getElementById('feedback-container').classList.remove('d-none');
        document.getElementById('feedback').src = './assets/img/9_intro_outro_screens/game_over/oh no you lost!.png';
        test = true;
    }

}

/**
 * Displays the win screen and removes all enemies and collectibles from the game.
 */
function winScreen() {
    world.level.coins = [];
    world.level.bottles = [];
    world.throwableObjects = [];
    world.level.enemies = [];
    world.character.width = 0;
    world.character.height = 0;

    world.clearCanvas();
    world.addObjectsToMap(world.level.backgroundObjects);

    if (!test) {
        document.getElementById('feedback-container').classList.remove('d-none');
        document.getElementById('feedback').src = './assets/img/9_intro_outro_screens/win/win_2_edit.png';
        test = true;
    }
    winGame = true;
}

/**
 * Toggles the background music on or off.
 */
function toggleBackgroundMusic() {
    let toggleMusic = document.getElementById('music');
    if (isMuted) {
        toggleMusic.src = './assets/img/music_on.png';
        isMuted = false;
        if (isGameStarted) {
            backgroundMusic.setVolume(0.5);
            backgroundMusic.play();
        }
    } else {
        toggleMusic.src = './assets/img/music_off.png';
        isMuted = true;
        backgroundMusic.setVolume(0);
    }
}

/**
 * Toggles the sound effects on or off.
 */
function toggleSounds() {
    let toggleSounds = document.getElementById('sound');
    if (!soundsMuted) {
        toggleSounds.src = './assets/img/mute.png';
        soundsMuted = true;
        if (isGameStarted || !isGameStarted) {
            muteAllSounds();
        }
    } else {
        toggleSounds.src = './assets/img/sound_on.png';
        soundsMuted = false;
        if (isGameStarted || !isGameStarted) {
            unMuteAllSounds();
        }
    }
}

/**
 * Stops the background music.
 */
function resetBackgroundMusic() {
    backgroundMusic.stop();
}

/**
 * Mutes all game sounds.
 */
function muteAllSounds() {
    allSounds.forEach(sound => sound.mute());
}

/**
 * Unmutes all game sounds.
 */
function unMuteAllSounds() {
    allSounds.forEach(sound => sound.setVolume(0.5));
}

/**
 * Creates and returns a new stoppable sound instance.
 * @param {string} path - The file path of the sound.
 * @param {boolean} loop - Whether the sound should loop.
 * @param {number} initialVolume - The initial volume of the sound.
 * @returns {Sound} The created sound instance.
 */
function setStoppableSound(path, loop, initialVolume) {
    let sound = new Sound(path, loop, initialVolume);
    allSounds.push(sound);
    return sound;
}

/**
 * Resets all sound instances by stopping and disposing of them.
 */
function resetSoundIds() {
    allSounds.forEach(sound => sound.dispose());
    allSounds.forEach(clearInterval);
    allSounds = [];
}

/**
 * Sets an interval for a given function and pushes it to the intervalIds array.
 * @param {function} fn - The function to execute at each interval.
 * @param {number} time - The interval time in milliseconds.
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

/**
 * Clears all stored interval IDs.
 */
function resetIntervallIds() {
    intervalIds.forEach(clearInterval);
    intervalIds = [];
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) keyboard.RIGHT = true;
    if (e.keyCode == 37) keyboard.LEFT = true;
    if (e.keyCode == 38) keyboard.UP = true;
    if (e.keyCode == 40) keyboard.DOWN = true;
    if (e.keyCode == 32) {
        e.preventDefault();
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) keyboard.D = true;
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) keyboard.RIGHT = false;
    if (e.keyCode == 37) keyboard.LEFT = false;
    if (e.keyCode == 38) keyboard.UP = false;
    if (e.keyCode == 40) keyboard.DOWN = false;
    if (e.keyCode == 32) keyboard.SPACE = false;
    if (e.keyCode == 68) keyboard.D = false;
});

/**
 * Prevents default context menu behaviors on images.
 */
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', event => event.preventDefault());
    });
});
