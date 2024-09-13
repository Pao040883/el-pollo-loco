class Character extends MovableObjects {
    height = 250;
    y = 180;
    speed = 10;

    IMAGES_IDLE = [
        '../../assets/img/2_character_pepe/1_idle/idle/I-1.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-2.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-3.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-4.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-5.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-6.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-7.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-8.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-9.png',
        '../../assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
        '../../assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        '../../assets/img/2_character_pepe/2_walk/W-21.png',
        '../../assets/img/2_character_pepe/2_walk/W-22.png',
        '../../assets/img/2_character_pepe/2_walk/W-23.png',
        '../../assets/img/2_character_pepe/2_walk/W-24.png',
        '../../assets/img/2_character_pepe/2_walk/W-25.png',
        '../../assets/img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        '../../assets/img/2_character_pepe/3_jump/J-31.png',
        '../../assets/img/2_character_pepe/3_jump/J-32.png',
        '../../assets/img/2_character_pepe/3_jump/J-33.png',
        '../../assets/img/2_character_pepe/3_jump/J-34.png',
        '../../assets/img/2_character_pepe/3_jump/J-35.png',
        '../../assets/img/2_character_pepe/3_jump/J-36.png',
        '../../assets/img/2_character_pepe/3_jump/J-37.png',
        '../../assets/img/2_character_pepe/3_jump/J-38.png',
        '../../assets/img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        'assets/img/2_character_pepe/4_hurt/H-41.png',
        'assets/img/2_character_pepe/4_hurt/H-42.png',
        'assets/img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        'assets/img/2_character_pepe/5_dead/D-51.png',
        'assets/img/2_character_pepe/5_dead/D-52.png',
        'assets/img/2_character_pepe/5_dead/D-53.png',
        'assets/img/2_character_pepe/5_dead/D-54.png',
        'assets/img/2_character_pepe/5_dead/D-55.png',
        'assets/img/2_character_pepe/5_dead/D-56.png',
        'assets/img/2_character_pepe/5_dead/D-57.png'
    ];

    world;
    walking_sound = new Audio('../../assets/audio/character_run.mp3');
    lastActionTime = Date.now(); // Zeit der letzten Aktion (Bewegung oder Sprung)
    idleTimeout = 15000; // 15 Sekunden für langes Idle
    isLongIdle = false; // Flag für lange Idle-Animation

    constructor() {
        super().loadImage('../../assets/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
        this.energy = 300;
        this.coins = 0;
        this.bottles = 0;
    }

    updateLastActionTime() {
        this.lastActionTime = Date.now();
        this.isLongIdle = false; // Sobald eine Aktion erfolgt, beenden wir den Long-Idle-Modus
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump(25);
                this.updateLastActionTime(); // Aktion ausgeführt, also letzte Aktion aktualisieren
            }

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
                this.updateLastActionTime();
            }

            if (this.world.keyboard.LEFT && this.x > -500) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
                this.updateLastActionTime();
            }

            this.world.camera_x = -this.x + 200;

            // Überprüfen, ob 15 Sekunden seit der letzten Aktion vergangen sind
            if (Date.now() - this.lastActionTime > this.idleTimeout) {
                this.isLongIdle = true; // Nach 15 Sekunden setzen wir das Flag für Long-Idle
            }

        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (this.isLongIdle) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 75);
    }
}
