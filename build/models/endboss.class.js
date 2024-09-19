/**
 * Class representing the Endboss enemy in the game.
 * Inherits from the MovableObjects class and manages animations, movement, and boss-specific behaviors.
 */
class Endboss extends MovableObjects {
    height = 400;
    width = 250;
    y = 55;

    IMAGES_WALKING = [
        './assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        './assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        './assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        './assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        './assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    isActive = false; // Der Endboss ist anfangs inaktiv
    endbossArriveSound = setStoppableSound('./assets/audio/endboss_arrive.mp3', false, 1);
    endbossDeathSound = setStoppableSound('./assets/audio/endboss_death.mp3', false, 1);

    offset = {
        top: 25,
        left: 25,
        right: 25,
        bottom: 25
    };

    /**
     * Creates a new Endboss instance, sets its position, loads images, but doesn't start movement until activated.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadAllImages();
        this.isBoss = true;
        this.lastHitTime = 0;
        this.energy = 100;
        this.setPosition(4500);
        this.setSpeed();
    }

    /**
     * Loads all necessary images for the Endboss.
     */
    loadAllImages() {
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
    }

    /**
     * Sets the Endboss's initial position along the x-axis.
     * @param {number} x - The x-coordinate for the boss's starting position.
     */
    setPosition(x) {
        this.x = x;
    }

    /**
     * Sets the movement speed for the Endboss.
     */
    setSpeed() {
        this.speed = 0.1 + Math.random() * 2;
    }

    /**
     * Activates the Endboss, starting his movement and animations.
     */
    activate() {
        if (!this.isActive) {
            this.isActive = true;
            this.startAnimations();
            this.endbossArriveSound.play();
        }
    }

    /**
     * Starts all animations for the Endboss, including movement, attack, and death.
     */
    startAnimations() {
        this.moveLeftAnimation();
        this.startWalkingAnimation();
        this.startAlertAnimation();
        this.startAttackAnimation();
        this.startDeathAnimation();
    }

    /**
     * Moves the Endboss to the left while it has energy.
     */
    moveLeftAnimation() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    /**
     * Plays the walking animation for the Endboss.
     */
    startWalkingAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    /**
     * Plays the alert animation for the Endboss.
     */
    startAlertAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
        }, 200);
    }

    /**
     * Plays the attack animation for the Endboss.
     */
    startAttackAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_ATTACK);
        }, 200);
    }

    /**
     * Plays the hurt animation when the Endboss is hurt.
     */
    startHurtAnimation() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        }
    }

    /**
 * Plays the death animation when the Endboss's energy reaches zero and triggers the win screen.
 * Plays the death sound only twice.
 */
    startDeathAnimation() {
        let deathSoundPlayed = 0;
        this.deathCheckInterval = setStoppableInterval(() => {
            if (this.energy === 0) {
                if (deathSoundPlayed < 3) {
                    this.endbossDeathSound.play();
                    deathSoundPlayed++;
                }
                this.playAnimation(this.IMAGES_DEAD);
                this.hideAfterDeath();
                this.triggerWinScreen();
            }
        }, 500);
    }


    /**
     * Hides the Endboss after the death animation by setting its width and height to zero.
     */
    hideAfterDeath() {
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
        }, 1500);
    }

    /**
     * Triggers the win screen after the Endboss dies.
     */
    triggerWinScreen() {
        setTimeout(() => {
            winScreen(); // Trigger the game win screen
        }, this.IMAGES_DEAD.length * 500);
    }
}
