/**
 * Class representing collectible coins in the game.
 * Inherits from MovableObjects and manages coin collection and related sounds.
 */
class Coins extends MovableObjects {
    height = 120;
    width = 120;
    isCollected = false;
    coinSound = setStoppableSound('./assets/audio/coin.mp3');

    IMAGES = [
        '/assets/img/8_coin/coin_1.png'
    ];

    /**
     * Creates a new Coins instance at the specified position.
     * @param {number} x - The x-coordinate of the coin.
     * @param {number} y - The y-coordinate of the coin.
     */
    constructor(x, y) {
        super();
        this.loadInitialImage();
        this.setPosition(x, y);
        this.value = 10;
    }

    /**
     * Loads the initial image of the coin.
     */
    loadInitialImage() {
        this.loadImage('./assets/img/8_coin/coin_1.png');
    }

    /**
     * Sets the position of the coin.
     * @param {number} x - The x-coordinate of the coin.
     * @param {number} y - The y-coordinate of the coin.
     */
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Collects the coin, marks it as collected, and plays the coin collection sound.
     */
    collect() {
        this.isCollected = true;
        this.playCoinSound();
    }

    /**
     * Plays the coin collection sound.
     */
    playCoinSound() {
        this.coinSound.play();
    }
}
