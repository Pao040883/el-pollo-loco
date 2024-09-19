/**
 * Class representing a Chicken enemy in the game.
 * Inherits from the MovableObjects class and manages animations, movement, and sound.
 */
class Chicken extends MovableObjects {
    y = 360;
    height = 55;
    width = 70;
    speed = 10;
    chickenSound = setStoppableSound('./assets/audio/chicken.mp3', true);

    IMAGES_WALKING = [
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        './assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    /**
     * Creates a new Chicken instance, sets position and speed, loads images, and starts animation.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.setPosition();
        this.setSpeed();
        this.energy = 10;
        this.startAnimations();
    }

    /**
     * Sets the chicken's initial position randomly along the x-axis.
     */
    setPosition() {
        this.x = 500 + Math.random() * 4000;
    }

    /**
     * Sets the chicken's movement speed to a random value.
     */
    setSpeed() {
        this.speed = 0.15 + Math.random() * 0.5;
    }

    /**
     * Starts all chicken animations including movement and death.
     */
    startAnimations() {
        this.moveLeftAnimation();
        this.startWalkAnimation();
        this.startDeadAnimation();
    }

    /**
     * Moves the chicken to the left while it has energy.
     */
    moveLeftAnimation() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    /**
     * Starts the walking animation of the chicken.
     */
    startWalkAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    /**
     * Starts the dead animation of the chicken when its energy reaches zero.
     */
    startDeadAnimation() {
        setStoppableInterval(() => {
            if (this.energy === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.hideAfterDeath();
            }
        }, 50);
    }

    /**
     * Hides the chicken by setting its width and height to zero after a delay following its death.
     */
    hideAfterDeath() {
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
        }, 500);
    }

    /**
     * Starts the chicken's sound and sets a pause between sound playbacks.
     * The sound will replay every 3 seconds after it finishes.
     */
    startChickenSoundWithPause() {
        this.chickenSound.play();

        this.chickenSound.audio.addEventListener('ended', () => {
            setTimeout(() => {
                this.chickenSound.play();
            }, 3000); // 3 seconds pause before playing the sound again
        });
    }
}
