/**
 * Class representing a cloud in the game.
 * Inherits from MovableObjects and manages cloud movement and animation.
 */
class Cloud extends MovableObjects {
    y = 20;
    height = 250;
    width = 500;

    /**
     * Creates a new Cloud instance.
     * @param {string} imagePath - The path of the cloud image.
     * @param {number} x - The initial x-coordinate of the cloud.
     */
    constructor(imagePath, x) {
        super();
        this.loadCloudImage(imagePath);
        this.setPosition(x);
        this.animateCloud();
    }

    /**
     * Loads the image for the cloud.
     * @param {string} imagePath - The path of the cloud image to load.
     */
    loadCloudImage(imagePath) {
        this.loadImage(imagePath);
    }

    /**
     * Sets the initial position of the cloud with random variation.
     * @param {number} x - The base x-coordinate of the cloud.
     */
    setPosition(x) {
        this.x = x + Math.random() * 500;
    }

    /**
     * Starts the animation for cloud movement.
     */
    animateCloud() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

    /**
     * Moves the cloud to the left at a constant speed.
     */
    moveLeft() {
        this.x -= 0.15;
    }
}
