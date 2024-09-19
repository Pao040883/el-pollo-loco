/**
 * Class representing a throwable object, such as a salsa bottle.
 * Inherits from MovableObjects and manages the logic for throwing, animating, and colliding with other objects.
 */
class ThrowableObject extends MovableObjects {
    IMAGES_ROTATE = [
        './assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGES_SPLASH = [
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    throwInterval;
    animateInterval;
    direction;
    bottleThrow_sound = setStoppableSound('./assets/audio/bottleThrow.mp3');
    bottleSplash_sound = setStoppableSound('./assets/audio/bottleSplash.mp3');
    hasThrown = false; // Flag to play throw sound once
    hasHit = false;    // Flag for splash impact

    /**
     * Creates a new throwable object.
     * @param {number} x - The x-coordinate of the throwable object.
     * @param {number} y - The y-coordinate of the throwable object.
     * @param {Object} world - The world object where the throwable is placed.
     */
    constructor(x, y, world) {
        super();
        this.world = world;

        if (this.world.character.bottles > 0) {
            this.loadImage('./assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
            this.loadImages(this.IMAGES_ROTATE);
            this.loadImages(this.IMAGES_SPLASH);

            this.direction = this.getThrowDirection();
            const offsetX = this.direction === 1 ? 100 : -50;
            this.setPosition(x + offsetX, y);
            this.setDimensions(60, 50);
            this.hitByBottle = false;

            this.startThrow();
            this.startAnimation();
        } else {
            this.setDimensions(0, 0);
        }
    }

    /**
     * Determines the direction of the throw based on the character's orientation.
     * @returns {number} - The direction of the throw (1 for right, -1 for left).
     */
    getThrowDirection() {
        return this.world.character.otherDirection ? -1 : 1;
    }

    /**
     * Sets the position of the throwable object.
     * @param {number} x - The x-coordinate of the object.
     * @param {number} y - The y-coordinate of the object.
     */
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Sets the dimensions (height and width) of the object.
     * @param {number} height - The height of the object.
     * @param {number} width - The width of the object.
     */
    setDimensions(height, width) {
        this.height = height;
        this.width = width;
    }

    /**
     * Starts the throwing action, applying gravity and horizontal movement.
     */
    startThrow() {
        if (this.world.character.isDead()) return;

        if (this.world.character.bottles > 0) {
            this.applyThrowPhysics();
            this.reduceBottleCount();
            this.playThrowSound();
        }
    }

    /**
     * Applies physics to the thrown object, including gravity and horizontal movement.
     */
    applyThrowPhysics() {
        this.speedY = 20;
        this.applyGravity();
        this.throwInterval = setInterval(() => {
            this.x += 10 * this.direction;
        }, 25);
    }

    /**
     * Reduces the character's bottle count and updates the bottle bar UI.
     */
    reduceBottleCount() {
        this.world.character.bottles -= 10;
        this.world.bottleBar.setPercentage(this.world.character.bottles);
    }

    /**
     * Plays the throw sound once.
     */
    playThrowSound() {
        if (!this.hasThrown && !soundsMuted) {
            this.bottleThrow_sound.play();
            this.hasThrown = true;
            this.world.character.updateLastActionTime();
        }
    }

    /**
     * Stops the throwing interval.
     */
    stopThrow() {
        clearInterval(this.throwInterval);
    }

    /**
     * Starts the animation for the throwable object, including rotation and splash animations.
     */
    startAnimation() {
        this.animateInterval = setInterval(() => {
            if (this.hitByBottle) {
                this.handleSplashAnimation();
            } else {
                this.playAnimation(this.IMAGES_ROTATE);
            }
        }, 100);
    }

    /**
     * Handles the splash animation when the bottle hits an object and plays the splash sound.
     */
    handleSplashAnimation() {
        this.stopThrow();
        this.stopGravity();
        this.playAnimation(this.IMAGES_SPLASH);
        this.playSplashSound();
        this.hideAfterSplash();
    }

    /**
     * Plays the splash sound once.
     */
    playSplashSound() {
        if (!this.hasHit && !soundsMuted) {
            this.bottleSplash_sound.play();
            this.hasHit = true;
        }
    }

    /**
     * Hides the bottle after the splash animation by setting its dimensions to zero.
     */
    hideAfterSplash() {
        setTimeout(() => {
            this.setDimensions(0, 0);
        }, 200);
    }
}
