/**
 * Class representing a Chick enemy in the game.
 * Inherits from the MovableObjects class and manages animations, movement, and gravity.
 */
class Chick extends MovableObjects {
    y = 360;
    height = 45;
    width = 60;
    speed = 10;

    IMAGES_WALKING = [
        './assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        './assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    /**
     * Creates a new Chick instance, sets its position and speed, and starts the animation.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.setPosition();
        this.setSpeed();
        this.energy = 10;
        this.applyGravity();
        this.startAnimations();
    }

    /**
     * Sets the chick's initial position randomly along the x-axis.
     */
    setPosition() {
        this.x = 500 + Math.random() * 4000;
    }

    /**
     * Sets the chick's movement speed to a random value.
     */
    setSpeed() {
        this.speed = 0.15 + Math.random() * 0.5;
    }

    /**
     * Starts all animations for the chick, including movement, walking, and death.
     */
    startAnimations() {
        this.moveLeftAnimation();
        this.walkAnimation();
        this.deadAnimation();
    }

    /**
     * Moves the chick to the left while it has energy and makes it jump if it is on the ground.
     */
    moveLeftAnimation() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
            if (this.energy > 0 && !this.isAboveGround()) {
                this.jump(15);
            }
        }, 1000 / 60);
    }

    /**
     * Plays the walking animation for the chick.
     */
    walkAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    /**
     * Plays the dead animation when the chick's energy reaches zero and hides it after a short delay.
     */
    deadAnimation() {
        setStoppableInterval(() => {
            if (this.energy === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.hideAfterDeath();
            }
        }, 50);
    }

    /**
     * Hides the chick by setting its width and height to zero after a delay following its death.
     */
    hideAfterDeath() {
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
        }, 750);
    }
}
