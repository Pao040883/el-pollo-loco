class Endboss extends MovableObjects {
    height = 400;
    width = 250;
    y = 55;
    energy = 100;

    IMAGES_WALKING = [
        './assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_DEAD = [
        './assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.isBoss = true;
        this.lastHitTime = 0;
        this.setPosition(5000);
        this.setSpeed();
        this.animate();
    }

    setPosition(x) {
        this.x = x;
    }

    setSpeed() {
        this.speed = 0.1 + Math.random() * 0.5;
    }

    animate() {
        this.moveLeftAnimation();
        this.walkingAnimation();
        this.deathAnimation();
    }

    moveLeftAnimation() {
        this.moveInterval = setInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    walkingAnimation() {
        this.walkingInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    deathAnimation() {
        this.deathCheckInterval = setInterval(() => {
            if (this.energy === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.hideAfterDeath();
            }
        }, 500);
    }

    hideAfterDeath() {
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
        }, 1000);
    }

    stopAllAnimations() {
        clearInterval(this.moveInterval);
        clearInterval(this.walkingInterval);
        clearInterval(this.deathCheckInterval);
    }
}
