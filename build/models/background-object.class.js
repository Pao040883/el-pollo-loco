/**
 * Class representing a background object in the game.
 * Inherits from MovableObjects and manages the position and size of background images.
 */
class BackgroundObject extends MovableObjects {
    width = 720;
    height = 480;

    /**
     * Creates a new BackgroundObject instance.
     * @param {string} imagePath - The path to the background image.
     * @param {number} x - The x-coordinate for the background object.
     */
    constructor(imagePath, x) {
        super();
        this.loadBackgroundImage(imagePath);
        this.setPosition(x);
    }

    /**
     * Loads the image for the background object.
     * @param {string} imagePath - The path of the background image to load.
     */
    loadBackgroundImage(imagePath) {
        this.loadImage(imagePath);
    }

    /**
     * Sets the initial position of the background object.
     * @param {number} x - The x-coordinate for the background object.
     */
    setPosition(x) {
        this.x = x;
        this.y = 480 - this.height; // Positions the background object at the bottom of the screen
    }
}
