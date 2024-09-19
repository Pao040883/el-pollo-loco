/**
 * Class representing a movable object in the game.
 * Inherits from DrawableObject and manages movement, gravity, collisions, and object state.
 */
class MovableObjects extends DrawableObject {
    /**
     * Creates a new movable object.
     */
    constructor() {
        super();
        this.speed = 0.15;
        this.otherDirection = false;
        this.speedY = 0;
        this.acceleration = 2.5;
        this.energy = 100;
        this.coins = 0;
        this.bottles = 0;
        this.lastHit = 0;
        this.gravityInterval = null;
        this.hasHit = false;
        this.chickenDeadSound = setStoppableSound('./assets/audio/chicken_dead.mp3', false, 0.1);
        this.endbossDeadSound = setStoppableSound('./assets/audio/chicken_dead.mp3', false, 0.5);
    }

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    /**
     * Applies gravity to the object, pulling it downward over time.
     */
    applyGravity() {
        this.gravityInterval = setInterval(() => {
            if (this.shouldApplyGravity()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Stops the gravity effect on the object.
     */
    stopGravity() {
        if (this.gravityInterval) {
            clearInterval(this.gravityInterval);
        }
    }

    /**
     * Checks if the object is above ground level.
     * @returns {boolean} - True if the object is above ground, false otherwise.
     */
    isAboveGround() {
        return this.y < this.getGroundLevel();
    }

    /**
     * Determines if gravity should be applied to the object.
     * @returns {boolean} - True if gravity should be applied, false otherwise.
     */
    shouldApplyGravity() {
        return this.isAboveGround() || this.speedY > 0;
    }

    /**
     * Determines the ground level based on the object type.
     * @returns {number} - The y-coordinate of the ground level.
     */
    getGroundLevel() {
        if (this instanceof ThrowableObject) return Infinity;
        if (this instanceof Chick) return 370;
        return 180;
    }

    /**
     * Checks if the object is colliding with another object.
     * @param {MovableObjects} mo - The other movable object to check collision with.
     * @returns {boolean} - True if a collision is detected, false otherwise.
     */
    isColliding(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
    }

    /**
     * Reduces the object's energy when hit.
     * @param {number} [damage=10] - The amount of damage to apply.
     */
    hit(damage = 10) {
        this.energy = Math.max(0, this.energy - damage);
        if (this.energy > 0) {
            this.updateLastHit();
        }
    }

    /**
     * Updates the timestamp of the last hit taken by the object.
     */
    updateLastHit() {
        this.lastHit = Date.now();
    }

    /**
     * Adds to the object's collected items (coins or bottles).
     * @param {string} itemType - The type of item to collect ('coin' or 'bottle').
     */
    collect(itemType) {
        if (itemType === 'coin') {
            this.coins += 10;
        } else if (itemType === 'bottle') {
            this.bottles += 10;
        }
    }

    /**
     * Checks if the object's energy has reached zero.
     * @returns {boolean} - True if the object is dead, false otherwise.
     */
    isDead() {
        return this.energy === 0;
    }

    /**
     * Checks if the object is currently hurt (within half a second of last hit).
     * @returns {boolean} - True if the object is hurt, false otherwise.
     */
    isHurt() {
        return (Date.now() - this.lastHit) / 1000 < 0.5;
    }

    /**
     * Plays an animation from a list of images.
     * @param {Array} images - The list of images for the animation.
     */
    playAnimation(images) {
        const i = this.currentImage % images.length;
        this.img = this.imageCache[images[i]];
        this.currentImage++;
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Causes the object to jump by setting its vertical speed.
     * @param {number} speed - The speed to set for the jump.
     */
    jump(speed) {
        this.speedY = speed;
    }

    /**
     * Hides the object after it has been collected by setting its dimensions to zero.
     */
    hideAfterCollect() {
        this.width = 0;
        this.height = 0;
    }
}
