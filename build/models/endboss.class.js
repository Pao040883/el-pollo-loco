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
    ]

    IMAGES_ATTACK = [
        './assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G20.png'
    ]

    IMAGES_HURT = [
        './assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G23.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        './assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.isBoss = true;
        this.lastHitTime = 0;
        this.energy = 100;
        this.setPosition(5500);
        this.setSpeed();
        this.animate();
    }

    setPosition(x) {
        this.x = x;
    }

    setSpeed() {
        this.speed = 0.1 + Math.random() * 1;
    }

    animate() {
        this.moveLeftAnimation();
        this.walkingAnimation();
        this.alertAnimation();
        this.attackAnimation();
        this.deathAnimation();
    }

    moveLeftAnimation() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    walkingAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    alertAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
        }, 200);
    }

    attackAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_ATTACK);
        }, 200);
    }

    hurtAnimation() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        }
    }

    deathAnimation() {
        this.deathCheckInterval = setStoppableInterval(() => {
            if (this.energy === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.hideAfterDeath();
                setTimeout(() => {
                    winScreen();  // Rufe die Game-Over-Logik nach der Todesanimation auf
                }, this.IMAGES_DEAD.length * 500);
            }
        }, 500);
    }

    hideAfterDeath() {
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
        }, 1500);
    }
}
