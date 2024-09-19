/**
 * Class representing a status bar (e.g., health, bottle, coin) in the game.
 * Inherits from DrawableObject and manages the status percentage and corresponding images.
 */
class StatusBar extends DrawableObject {
    /**
     * Creates a new StatusBar instance.
     * @param {Array} imagePaths - The paths of the images representing different status levels.
     * @param {number} x - The x-coordinate of the status bar.
     * @param {number} y - The y-coordinate of the status bar.
     * @param {number} [width=200] - The width of the status bar.
     * @param {number} [height=60] - The height of the status bar.
     * @param {number} [initialPercentage=100] - The initial percentage value of the status bar.
     */
    constructor(imagePaths, x, y, width = 200, height = 60, initialPercentage = 100) {
        super();
        this.IMAGES = imagePaths;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.loadImages(this.IMAGES);
        this.setPercentage(initialPercentage);
    }

    /**
     * Sets the status bar percentage and updates the image accordingly.
     * @param {number} percentage - The percentage to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        const path = this.getImagePathForPercentage();
        this.updateImage(path);
    }

    /**
     * Resolves the correct image path based on the current percentage.
     * @returns {string} - The image path that corresponds to the current percentage.
     */
    getImagePathForPercentage() {
        return this.IMAGES[this.resolveImageIndex()];
    }

    /**
     * Updates the status bar image based on the provided image path.
     * @param {string} imagePath - The path of the image to update.
     */
    updateImage(imagePath) {
        this.img = this.imageCache[imagePath];
    }

    /**
     * Determines the image index based on the current percentage.
     * @returns {number} - The index of the image that matches the percentage.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 50) {
            return 3;
        } else if (this.percentage > 30) {
            return 2;
        } else if (this.percentage > 5) {
            return 1;
        } else {
            return 0;
        }
    }
}

// Example usage for different status bars
const healthBarImages = [
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
];

const bottleBarImages = [
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
];

const coinBarImages = [
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
];

const endbossBarImages = [
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
];
