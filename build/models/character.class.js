// class Character extends MovableObjects {
//     height = 250;
//     y = 180;
//     speed = 10;

//     IMAGES_IDLE = [
//         '../../assets/img/2_character_pepe/1_idle/idle/I-1.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-2.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-3.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-4.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-5.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-6.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-7.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-8.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-9.png',
//         '../../assets/img/2_character_pepe/1_idle/idle/I-10.png'
//     ];

//     IMAGES_LONG_IDLE = [
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
//         '../../assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
//     ];

//     IMAGES_WALKING = [
//         '../../assets/img/2_character_pepe/2_walk/W-21.png',
//         '../../assets/img/2_character_pepe/2_walk/W-22.png',
//         '../../assets/img/2_character_pepe/2_walk/W-23.png',
//         '../../assets/img/2_character_pepe/2_walk/W-24.png',
//         '../../assets/img/2_character_pepe/2_walk/W-25.png',
//         '../../assets/img/2_character_pepe/2_walk/W-26.png'
//     ];

//     IMAGES_JUMPING = [
//         '../../assets/img/2_character_pepe/3_jump/J-31.png',
//         '../../assets/img/2_character_pepe/3_jump/J-32.png',
//         '../../assets/img/2_character_pepe/3_jump/J-33.png',
//         '../../assets/img/2_character_pepe/3_jump/J-34.png',
//         '../../assets/img/2_character_pepe/3_jump/J-35.png',
//         '../../assets/img/2_character_pepe/3_jump/J-36.png',
//         '../../assets/img/2_character_pepe/3_jump/J-37.png',
//         '../../assets/img/2_character_pepe/3_jump/J-38.png',
//         '../../assets/img/2_character_pepe/3_jump/J-39.png'
//     ];

//     IMAGES_HURT = [
//         'assets/img/2_character_pepe/4_hurt/H-41.png',
//         'assets/img/2_character_pepe/4_hurt/H-42.png',
//         'assets/img/2_character_pepe/4_hurt/H-43.png'
//     ];

//     IMAGES_DEAD = [
//         'assets/img/2_character_pepe/5_dead/D-51.png',
//         'assets/img/2_character_pepe/5_dead/D-52.png',
//         'assets/img/2_character_pepe/5_dead/D-53.png',
//         'assets/img/2_character_pepe/5_dead/D-54.png',
//         'assets/img/2_character_pepe/5_dead/D-55.png',
//         'assets/img/2_character_pepe/5_dead/D-56.png',
//         'assets/img/2_character_pepe/5_dead/D-57.png'
//     ];

//     world;
//     lastActionTime = Date.now();
//     idleTimeout = 15000;
//     isLongIdle = false;

//     constructor() {
//         super().loadImage('../../assets/img/2_character_pepe/2_walk/W-21.png');
//         this.loadAllImages();
//         this.applyGravity();
//         this.animate();
//         this.energy = 100;
//         this.coins = 0;
//         this.bottles = 0;
//         this.walkingSound = setStoppableSound('../../assets/audio/character_run.mp3');
//         this.jumpSound = setStoppableSound('../../assets/audio/jump.mp3');
//         this.snoringSound = setStoppableSound('../../assets/audio/snoring.mp3');
//         this.hurtSound = setStoppableSound('../../assets/audio/hurt.mp3');
//     }

//     loadAllImages() {
//         this.loadImages(this.IMAGES_IDLE);
//         this.loadImages(this.IMAGES_LONG_IDLE);
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_JUMPING);
//         this.loadImages(this.IMAGES_DEAD);
//         this.loadImages(this.IMAGES_HURT);
//     }

//     updateLastActionTime() {
//         this.lastActionTime = Date.now();
//         this.isLongIdle = false;
//         this.snoringSound.pause();
//     }

//     handleJump() {
//         if (this.world.keyboard.SPACE && !this.isAboveGround()) {
//             this.jump(25);
//             this.stopWalkingSound();
//             this.jumpSound.play();
//             this.updateLastActionTime();
//         }
//     }

//     handleMoveRight() {
//         if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
//             this.moveRight();
//             this.walkingSound.play();
//             this.updateLastActionTime();
//         }
//     }

//     handleMoveLeft() {
//         if (this.world.keyboard.LEFT && this.x > -500) {
//             this.moveLeft();
//             this.otherDirection = true;
//             this.walkingSound.play();
//             this.updateLastActionTime();
//         }
//     }

//     handleCameraMovement() {
//         this.world.camera_x = -this.x + 200;
//     }

//     stopWalkingSound() {
//         if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
//             this.walkingSound.stop();
//         }
//     }

//     handleMovement() {
//         this.handleJump();
//         this.handleMoveRight();
//         this.handleMoveLeft();
//         this.handleCameraMovement();
//     }

//     checkIdleState() {
//         if (Date.now() - this.lastActionTime > this.idleTimeout) {
//             this.isLongIdle = true;
//         }
//     }

//     handleDeadAnimation() {
//         if (this.isDead()) {
//             this.playAnimation(this.IMAGES_DEAD);
//         }
//     }

//     handleHurtAnimation() {
//         if (this.isHurt()) {
//             this.playAnimation(this.IMAGES_HURT);
//             this.stopWalkingSound();
//             this.hurtSound.play();
//             this.updateLastActionTime();
//         }
//     }

//     handleJumpAnimation() {
//         if (this.isAboveGround()) {
//             this.playAnimation(this.IMAGES_JUMPING);
//         }
//     }

//     handleWalkingAnimation() {
//         if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isAboveGround()) {
//             this.playAnimation(this.IMAGES_WALKING);
//         }
//     }

//     handleLongIdleAnimation() {
//         if (this.isLongIdle) {
//             this.playAnimation(this.IMAGES_LONG_IDLE);
//             this.stopWalkingSound();
//             this.snoringSound.play();
//         }
//     }

//     handleIdleAnimation() {
//         if (!this.isLongIdle && !this.isDead() && !this.isHurt() && !this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
//             this.stopWalkingSound();
//             this.playAnimation(this.IMAGES_IDLE);
//         }
//     }

//     handleAnimation() {
//         this.handleDeadAnimation();
//         this.handleHurtAnimation();
//         this.handleJumpAnimation();
//         this.handleWalkingAnimation();
//         this.handleLongIdleAnimation();
//         this.handleIdleAnimation();
//     }

//     animate() {
//         setStoppableInterval(() => {
//             this.handleMovement();
//             this.checkIdleState();
//         }, 1000 / 60);

//         setStoppableInterval(() => {
//             this.handleAnimation();
//         }, 75);
//     }
// }

class Character extends MovableObjects {
    height = 250;
    y = 180;
    speed = 10;

    IMAGES_IDLE = [
        './assets/img/2_character_pepe/1_idle/idle/I-1.png',
        './assets/img/2_character_pepe/1_idle/idle/I-2.png',
        './assets/img/2_character_pepe/1_idle/idle/I-3.png',
        './assets/img/2_character_pepe/1_idle/idle/I-4.png',
        './assets/img/2_character_pepe/1_idle/idle/I-5.png',
        './assets/img/2_character_pepe/1_idle/idle/I-6.png',
        './assets/img/2_character_pepe/1_idle/idle/I-7.png',
        './assets/img/2_character_pepe/1_idle/idle/I-8.png',
        './assets/img/2_character_pepe/1_idle/idle/I-9.png',
        './assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        './assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        './assets/img/2_character_pepe/2_walk/W-21.png',
        './assets/img/2_character_pepe/2_walk/W-22.png',
        './assets/img/2_character_pepe/2_walk/W-23.png',
        './assets/img/2_character_pepe/2_walk/W-24.png',
        './assets/img/2_character_pepe/2_walk/W-25.png',
        './assets/img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        './assets/img/2_character_pepe/3_jump/J-31.png',
        './assets/img/2_character_pepe/3_jump/J-32.png',
        './assets/img/2_character_pepe/3_jump/J-33.png',
        './assets/img/2_character_pepe/3_jump/J-34.png',
        './assets/img/2_character_pepe/3_jump/J-35.png',
        './assets/img/2_character_pepe/3_jump/J-36.png',
        './assets/img/2_character_pepe/3_jump/J-37.png',
        './assets/img/2_character_pepe/3_jump/J-38.png',
        './assets/img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        './assets/img/2_character_pepe/4_hurt/H-41.png',
        './assets/img/2_character_pepe/4_hurt/H-42.png',
        './assets/img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        './assets/img/2_character_pepe/5_dead/D-51.png',
        './assets/img/2_character_pepe/5_dead/D-52.png',
        './assets/img/2_character_pepe/5_dead/D-53.png',
        './assets/img/2_character_pepe/5_dead/D-54.png',
        './assets/img/2_character_pepe/5_dead/D-55.png',
        './assets/img/2_character_pepe/5_dead/D-56.png',
        './assets/img/2_character_pepe/5_dead/D-57.png'
    ];

    world;
    lastActionTime = Date.now();
    idleTimeout = 15000;
    isLongIdle = false;

    walkingSound = setStoppableSound('./assets/audio/character_run.mp3');
    jumpSound = setStoppableSound('./assets/audio/jump.mp3');
    snoringSound = setStoppableSound('./assets/audio/snoring.mp3');
    hurtSound = setStoppableSound('./assets/audio/hurt.mp3');

    constructor() {
        super().loadImage('./assets/img/2_character_pepe/2_walk/W-21.png');
        this.loadAllImages();
        this.applyGravity();
        this.animate();
        this.energy = 100;
        this.coins = 0;
        this.bottles = 0;


        this.addMobileControls(); // Hier die mobilen Steuerelemente hinzufügen
    }

    loadAllImages() {
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
    }

    addMobileControls() {
        // Links bewegen (touchstart + touchend, mousedown + mouseup für kontinuierliches Bewegen)
        const leftButton = document.getElementById('move-left');
        leftButton.addEventListener('touchstart', () => {
            this.world.keyboard.LEFT = true;
        });
        leftButton.addEventListener('touchend', () => {
            this.world.keyboard.LEFT = false;
        });
        leftButton.addEventListener('mousedown', () => {
            this.world.keyboard.LEFT = true;
        });
        leftButton.addEventListener('mouseup', () => {
            this.world.keyboard.LEFT = false;
        });

        // Rechts bewegen (touchstart + touchend, mousedown + mouseup für kontinuierliches Bewegen)
        const rightButton = document.getElementById('move-right');
        rightButton.addEventListener('touchstart', () => {
            this.world.keyboard.RIGHT = true;
        });
        rightButton.addEventListener('touchend', () => {
            this.world.keyboard.RIGHT = false;
        });
        rightButton.addEventListener('mousedown', () => {
            this.world.keyboard.RIGHT = true;
        });
        rightButton.addEventListener('mouseup', () => {
            this.world.keyboard.RIGHT = false;
        });

        // Springen (click + touchstart, kein touchend nötig, da es eine einmalige Aktion ist)
        document.getElementById('jump').addEventListener('touchstart', () => {
            this.triggerAction('SPACE');
        });
        document.getElementById('jump').addEventListener('click', () => {
            this.triggerAction('SPACE');
        });

        // Flasche werfen (click + touchstart, kein touchend nötig)
        document.getElementById('throw-bottle').addEventListener('touchstart', () => {
            this.triggerAction('D');
        });
        document.getElementById('throw-bottle').addEventListener('click', () => {
            this.triggerAction('D');
        });
    }

    triggerAction(action, duration = 150) {
        this.world.keyboard[action] = true;
        setTimeout(() => {
            this.world.keyboard[action] = false;
        }, duration);
    }

    updateLastActionTime() {
        this.lastActionTime = Date.now();
        this.isLongIdle = false;
        this.snoringSound.pause();
    }

    handleJump() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump(25);
            this.stopWalkingSound();
            this.jumpSound.play();
            this.updateLastActionTime();
        }
    }

    handleMoveRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.walkingSound.play();
            this.updateLastActionTime();
        }
    }

    handleMoveLeft() {
        if (this.world.keyboard.LEFT && this.x > -500) {
            this.moveLeft();
            this.otherDirection = true;
            this.walkingSound.play();
            this.updateLastActionTime();
        }
    }

    handleCameraMovement() {
        this.world.camera_x = -this.x + 200;
    }

    stopWalkingSound() {
        if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.walkingSound.stop();
        }
    }

    handleMovement() {
        this.handleJump();
        this.handleMoveRight();
        this.handleMoveLeft();
        this.handleCameraMovement();
    }

    checkIdleState() {
        if (Date.now() - this.lastActionTime > this.idleTimeout) {
            this.isLongIdle = true;
        }
    }
    handleDeadAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);  // Spiele die Todesanimation ab

            // Verzögere das Aufrufen der Game-Over-Logik, damit die Animation abgespielt wird
            setTimeout(() => {
                gameOver();  // Rufe die Game-Over-Logik nach der Todesanimation auf
            }, this.IMAGES_DEAD.length * 150);  // Warte die Zeit der Todesanimation ab
        }
    }


    handleHurtAnimation() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.stopWalkingSound();
            this.hurtSound.play();
            this.updateLastActionTime();
        }
    }

    handleJumpAnimation() {
        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        }
    }

    handleWalkingAnimation() {
        if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isAboveGround()) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    handleLongIdleAnimation() {
        if (this.isLongIdle) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
            this.stopWalkingSound();
            this.snoringSound.play();
        }
    }

    handleIdleAnimation() {
        if (!this.isLongIdle && !this.isDead() && !this.isHurt() && !this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.stopWalkingSound();
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    handleAnimation() {
        this.handleDeadAnimation();
        this.handleHurtAnimation();
        this.handleJumpAnimation();
        this.handleWalkingAnimation();
        this.handleLongIdleAnimation();
        this.handleIdleAnimation();
    }

    animate() {
        setStoppableInterval(() => {
            this.handleMovement();
            this.checkIdleState();
        }, 1000 / 60);

        setStoppableInterval(() => {
            this.handleAnimation();
        }, 75);
    }
}
