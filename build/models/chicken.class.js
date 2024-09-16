// // class Chicken extends MovableObjects {
// //     y = 360;
// //     height = 55;
// //     width = 70;
// //     speed = 10;
// //     energy = 5;
// //     chicken_sound = new Sound('../../assets/audio/chicken.mp3');

// //     IMAGES_WALKING = [
// //         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
// //         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
// //         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
// //     ];

// //     IMAGES_DEAD = [
// //         '../../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
// //     ];

// //     constructor() {
// //         super().loadImage(this.IMAGES_WALKING[0]);
// //         this.loadImages(this.IMAGES_WALKING);
// //         this.loadImages(this.IMAGES_DEAD);
// //         this.setPosition();
// //         this.setSpeed();

// //         // Lautstärke auf 10% setzen
// //         this.chicken_sound.volume = 0.001;

// //         // Loop deaktivieren, der Sound soll nicht dauerhaft in einer Schleife laufen
// //         this.chicken_sound.loop = false;

// //         // Starte das Animationssystem (Bewegung und Sounds)
// //         this.animate();
// //         this.startChickenSoundWithPause();
// //     }

// //     setPosition() {
// //         this.x = 500 + Math.random() * 4000;
// //     }

// //     setSpeed() {
// //         this.speed = 0.15 + Math.random() * 0.5;
// //     }

// //     animate() {
// //         this.moveLeftAnimation();
// //         this.walkAnimation();
// //         this.deadAnimation();
// //     }

// //     moveLeftAnimation() {
// //         setStoppableInterval(() => {
// //             if (this.energy > 0) {
// //                 this.moveLeft();
// //             }
// //         }, 1000 / 60);
// //     }

// //     walkAnimation() {
// //         setStoppableInterval(() => {
// //             this.playAnimation(this.IMAGES_WALKING);
// //         }, 200);
// //     }

// //     deadAnimation() {
// //         setStoppableInterval(() => {
// //             if (this.energy === 0) {
// //                 this.playAnimation(this.IMAGES_DEAD);
// //                 this.hideAfterDeath();
// //             }
// //         }, 50);
// //     }

// //     hideAfterDeath() {
// //         setTimeout(() => {
// //             this.width = 0;
// //             this.height = 0;
// //         }, 500);
// //     }

// //     // Sound nur einmalig abspielen, dann eine Pause machen und erneut abspielen
// //     startChickenSoundWithPause() {
// //         this.chicken_sound.play(); // Starte den Sound einmal

// //         // Verwende das 'ended'-Event, um zu erkennen, wann der Sound endet
// //         this.chicken_sound.addEventListener('ended', () => {
// //             setTimeout(() => {
// //                 this.chicken_sound.play(); // Starte den Sound erneut nach einer Pause
// //             }, 3000); // 3 Sekunden Pause, bevor der Sound erneut abgespielt wird
// //         });
// //     }

// // }

// class Chicken extends MovableObjects {
//     y = 360;
//     height = 55;
//     width = 70;
//     speed = 10;
//     energy = 5;
//     chickenSound = new Sound('../../assets/audio/chicken.mp3');

//     IMAGES_WALKING = [
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
//     ];

//     IMAGES_DEAD = [
//         '../../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
//     ];

//     constructor() {
//         super().loadImage(this.IMAGES_WALKING[0]);
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_DEAD);
//         this.setPosition();
//         this.setSpeed();
//         this.configureSound();
//         this.animate();
//     }

//     setPosition() {
//         this.x = 500 + Math.random() * 4000;
//     }

//     setSpeed() {
//         this.speed = 0.15 + Math.random() * 0.5;
//     }

//     configureSound() {
//         // Setze die Lautstärke und Konfiguration für den Sound
//         this.chickenSound.setVolume(0.001); // Statt 0.001 wird eine realistischere Lautstärke verwendet
//         this.chickenSound.setLoop(false); // Loop deaktiviert, damit der Sound nicht dauerhaft läuft
//         this.startChickenSoundWithPause();
//     }

//     animate() {
//         this.moveLeftAnimation();
//         this.walkAnimation();
//         this.deadAnimation();
//     }

//     moveLeftAnimation() {
//         setStoppableInterval(() => {
//             if (this.energy > 0) {
//                 this.moveLeft();
//             }
//         }, 1000 / 60);
//     }

//     walkAnimation() {
//         setStoppableInterval(() => {
//             this.playAnimation(this.IMAGES_WALKING);
//         }, 200);
//     }

//     deadAnimation() {
//         setStoppableInterval(() => {
//             if (this.energy === 0) {
//                 this.playAnimation(this.IMAGES_DEAD);
//                 this.hideAfterDeath();
//             }
//         }, 50);
//     }

//     hideAfterDeath() {
//         setTimeout(() => {
//             this.width = 0;
//             this.height = 0;
//         }, 500);
//     }

//     startChickenSoundWithPause() {
//         this.chickenSound.play(); // Starte den Sound einmal

//         // Verwende das 'ended'-Event, um zu erkennen, wann der Sound endet
//         this.chickenSound.audio.addEventListener('ended', () => {
//             setTimeout(() => {
//                 this.chickenSound.play(); // Starte den Sound erneut nach einer Pause
//             }, 3000); // 3 Sekunden Pause, bevor der Sound erneut abgespielt wird
//         });
//     }
// }

// class Chicken extends MovableObjects {
//     y = 360;
//     height = 55;
//     width = 70;
//     speed = 10;
//     energy = 5;
//     chickenSound = new Sound('../../assets/audio/chicken.mp3');

//     IMAGES_WALKING = [
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
//     ];

//     IMAGES_DEAD = [
//         '../../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
//     ];

//     constructor() {
//         super().loadImage(this.IMAGES_WALKING[0]);
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_DEAD);
//         this.setPosition();
//         this.setSpeed();
//         this.configureSound();  // Sound-Konfiguration beim Erstellen des Objekts
//         this.animate();
//     }

//     setPosition() {
//         this.x = 500 + Math.random() * 4000;
//     }

//     setSpeed() {
//         this.speed = 0.15 + Math.random() * 0.5;
//     }

//     configureSound() {
//         // Setze die Lautstärke und Konfiguration für den Sound
//         this.chickenSound.setVolume(0.001); // Lautstärke auf 0.001 gesetzt
//         this.chickenSound.setLoop(false); // Loop deaktiviert
//         this.startChickenSoundWithPause();
//     }

//     animate() {
//         this.moveLeftAnimation();
//         this.walkAnimation();
//         this.deadAnimation();
//     }

//     moveLeftAnimation() {
//         setStoppableInterval(() => {
//             if (this.energy > 0) {
//                 this.moveLeft();
//             }
//         }, 1000 / 60);
//     }

//     walkAnimation() {
//         setStoppableInterval(() => {
//             this.playAnimation(this.IMAGES_WALKING);
//         }, 200);
//     }

//     deadAnimation() {
//         setStoppableInterval(() => {
//             if (this.energy === 0) {
//                 this.playAnimation(this.IMAGES_DEAD);
//                 this.hideAfterDeath();
//             }
//         }, 50);
//     }

//     hideAfterDeath() {
//         setTimeout(() => {
//             this.width = 0;
//             this.height = 0;
//         }, 500);
//     }

//     startChickenSoundWithPause() {
//         this.chickenSound.play(); // Starte den Sound einmal

//         // Verwende das 'ended'-Event, um zu erkennen, wann der Sound endet
//         this.chickenSound.audio.addEventListener('ended', () => {
//             setTimeout(() => {
//                 this.chickenSound.play(); // Starte den Sound erneut nach einer Pause
//             }, 3000); // 3 Sekunden Pause, bevor der Sound erneut abgespielt wird
//         });
//     }
// }

class Chicken extends MovableObjects {
    y = 360;
    height = 55;
    width = 70;
    speed = 10;
    energy = 5;
    chickenSound = setStoppableSound('../../assets/audio/chicken.mp3', true);

    IMAGES_WALKING = [
        '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        '../../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.setPosition();
        this.setSpeed();
        this.configureSound();  // Sound-Konfiguration beim Erstellen des Objekts
        this.animate();
    }

    setPosition() {
        this.x = 500 + Math.random() * 4000;
    }

    setSpeed() {
        this.speed = 0.15 + Math.random() * 0.5;
    }

    configureSound() {
        // Setze die Lautstärke und Konfiguration für den Sound
        // this.chickenSound.setVolume(0.01); // Lautstärke auf 0.001 gesetzt
        // this.chickenSound.audio.loop = false; // Loop deaktiviert
        // this.startChickenSoundWithPause();
    }

    animate() {
        this.moveLeftAnimation();
        this.walkAnimation();
        this.deadAnimation();
    }

    moveLeftAnimation() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    walkAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    deadAnimation() {
        setStoppableInterval(() => {
            if (this.energy === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.hideAfterDeath();
            }
        }, 50);
    }

    hideAfterDeath() {
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
        }, 500);
    }

    startChickenSoundWithPause() {
        this.chickenSound.play(); // Starte den Sound einmal

        // Verwende das 'ended'-Event, um zu erkennen, wann der Sound endet
        this.chickenSound.audio.addEventListener('ended', () => {
            setTimeout(() => {
                this.chickenSound.play(); // Starte den Sound erneut nach einer Pause
            }, 3000); // 3 Sekunden Pause, bevor der Sound erneut abgespielt wird
        });
    }
}
