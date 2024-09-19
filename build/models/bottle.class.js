/**
 * Class representing collectible bottles in the game.
 * Inherits from MovableObjects and manages bottle collection and related sounds.
 */
class Bottles extends MovableObjects {
    height = 100;
    width = 70;
    isCollected = false;
    bottleSound = setStoppableSound('./assets/audio/bottle.mp3');

    IMAGES = [
        './assets/img/6_salsa_bottle/salsa_bottle.png'
    ];

    /**
     * Creates a new Bottles instance.
     */
    constructor() {
        super();
        this.loadInitialImage();
        this.setPosition();
        this.value = 10;
    }

    /**
     * Loads the initial image of the bottle.
     */
    loadInitialImage() {
        this.loadImage('./assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
    }

    /**
     * Sets the initial position of the bottle randomly along the x-axis.
     */
    setPosition() {
        this.x = 750 + Math.random() * 3500;
        this.y = 330;
    }

    /**
     * Collects the bottle, marks it as collected, and plays the bottle collection sound.
     */
    collect() {
        this.isCollected = true;
        this.playBottleSound();
    }

    /**
     * Plays the bottle collection sound.
     */
    playBottleSound() {
        this.bottleSound.play();
    }
}
