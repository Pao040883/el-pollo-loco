/**
 * Class representing a drawable object in the game.
 * This class provides methods to load, cache, and draw images on the canvas.
 */
class DrawableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;

    /**
     * Loads an image from a given path.
     * @param {string} path - The path of the image to load.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and stores them in the image cache.
     * @param {Array<string>} arr - An array of image paths to load.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            this.cacheImage(path);
        });
    }

    /**
     * Caches a single image by loading it and storing it in the image cache.
     * @param {string} path - The path of the image to cache.
     */
    cacheImage(path) {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
    }

    /**
     * Draws the image of the object on the provided canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw on.
     */
    draw(ctx) {
        if (this.isImageLoaded()) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    /**
     * Checks if the image is fully loaded before attempting to draw.
     * @returns {boolean} - True if the image is loaded, false otherwise.
     */
    isImageLoaded() {
        return this.img && this.img.complete;
    }

    /**
     * Draws the object's frame (border) on the provided canvas context for debugging purposes.
     * Only applicable for specific object types like Character, Chicken, ThrowableObject, Endboss, and Bottles.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw on.
     */
    drawFrame(ctx) {
        if (this.shouldDrawFrame()) {
            ctx.beginPath();
            ctx.lineWidth = '0';
            ctx.strokeStyle = 'none';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Determines if the object is one of the types that should have its frame drawn.
     * @returns {boolean} - True if the object is of a type that supports drawing frames, false otherwise.
     */
    shouldDrawFrame() {
        return this instanceof Character || this instanceof Chicken || this instanceof ThrowableObject || this instanceof Endboss || this instanceof Bottles;
    }
}
