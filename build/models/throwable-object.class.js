// // // class ThrowableObject extends MovableObjects {
// // //     IMAGES_ROTATE = [
// // //         '../../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
// // //         '../../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
// // //         '../../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
// // //         '../../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
// // //     ];

// // //     IMAGES_SPLASH = [
// // //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
// // //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
// // //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
// // //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
// // //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
// // //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
// // //     ];

// // //     interval;

// // //     constructor(x, y) {
// // //         super().loadImage('../../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
// // //         this.loadImages(this.IMAGES_ROTATE);
// // //         this.loadImages(this.IMAGES_SPLASH);
// // //         this.x = x;
// // //         this.y = y;
// // //         this.height = 60;
// // //         this.width = 50;
// // //         this.hitByBottle = false;
// // //         this.throw();
// // //         this.animate();
// // //     }

// // //     throw() {
// // //         this.speedY = 20;
// // //         this.applyGravity();
// // //         this.interval = setInterval(() => {
// // //             this.x += 10;
// // //         }, 25);
// // //         return true;
// // //     }

// // //     animate() {
// // //         setInterval(() => {
// // //             if (this.throw) {
// // //                 this.playAnimation(this.IMAGES_ROTATE);
// // //             }
// // //             if (this.hitByBottle) {
// // //                 clearInterval(this.interval);
// // //                 this.stopGravity();
// // //                 this.playAnimation(this.IMAGES_SPLASH);
// // //                 setTimeout(() => {
// // //                     this.width = 0;
// // //                     this.height = 0;
// // //                 }, 200);
// // //             }
// // //         }, 100);
// // //     }

// // // }

// // class ThrowableObject extends MovableObjects {
// //     IMAGES_ROTATE = [
// //         '../../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
// //         '../../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
// //         '../../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
// //         '../../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
// //     ];

// //     IMAGES_SPLASH = [
// //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
// //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
// //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
// //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
// //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
// //         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
// //     ];

// //     throwInterval;
// //     animateInterval;

// //     constructor(x, y, world) {
// //         super().loadImage('../../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
// //         this.loadImages(this.IMAGES_ROTATE);
// //         this.loadImages(this.IMAGES_SPLASH);
// //         this.setPosition(x, y);
// //         this.dimensions(60, 50);
// //         this.hitByBottle = false;
// //         this.startThrow();
// //         this.startAnimation();
// //         this.world = world;
// //     }

// //     setPosition(x, y) {
// //         this.x = x;
// //         this.y = y;
// //     }

// //     dimensions(height, width) {
// //         this.height = height;
// //         this.width = width;
// //     }

// //     startThrow() {
// //         this.speedY = 20;
// //         this.applyGravity();
// //         this.throwInterval = setInterval(() => {

// //             if (this.world.keyboard.LEFT && this.x > - 500) {
// //                 console.log('Left');
// //                 this.x -= 10;
// //             } else {
// //                 this.x += 10;

// //             }
// //         }, 25);
// //     }

// //     stopThrow() {
// //         clearInterval(this.throwInterval);
// //     }

// //     startAnimation() {
// //         this.animateInterval = setInterval(() => {
// //             if (this.hitByBottle) {
// //                 this.stopThrow();
// //                 this.stopGravity();
// //                 this.playAnimation(this.IMAGES_SPLASH);
// //                 this.hideAfterSplash();
// //             } else {
// //                 this.playAnimation(this.IMAGES_ROTATE);
// //             }
// //         }, 100);
// //     }

// //     hideAfterSplash() {
// //         setTimeout(() => {
// //             this.dimensions(0, 0);
// //         }, 200);
// //     }
// // }

// class ThrowableObject extends MovableObjects {
//     IMAGES_ROTATE = [
//         '../../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
//         '../../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
//         '../../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
//         '../../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
//     ];

//     IMAGES_SPLASH = [
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
//     ];

//     throwInterval;
//     animateInterval;
//     direction;

//     constructor(x, y, world) {
//         super().loadImage('../../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
//         this.loadImages(this.IMAGES_ROTATE);
//         this.loadImages(this.IMAGES_SPLASH);
//         this.world = world;

//         this.direction = this.world.character.otherDirection ? -1 : 1;
//         const offsetX = this.direction === 1 ? 100 : -50;
//         this.setPosition(x + offsetX, y);
//         this.dimensions(60, 50);
//         this.hitByBottle = false;

//         this.startThrow();
//         this.startAnimation();
//     }

//     setPosition(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     dimensions(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     startThrow() {
//         if (this.world.character.bottles > 0) {
//             this.speedY = 20;
//             this.applyGravity();
//             this.throwInterval = setInterval(() => {
//                 this.x += 10 * this.direction;
//             }, 25);
//             this.world.character.bottles - 5;
//         }

//     }

//     stopThrow() {
//         clearInterval(this.throwInterval);
//     }

//     startAnimation() {
//         (this.world.character.bottles > 0) {
//             this.animateInterval = setInterval(() => {
//                 if (this.hitByBottle) {
//                     this.stopThrow();
//                     this.stopGravity();
//                     this.playAnimation(this.IMAGES_SPLASH);
//                     this.hideAfterSplash();
//                 } else {
//                     this.playAnimation(this.IMAGES_ROTATE);
//                 }
//             }, 100);
//         }
//     }

//     hideAfterSplash() {
//         setTimeout(() => {
//             this.dimensions(0, 0);
//         }, 200);
//     }
// }

// class ThrowableObject extends MovableObjects {
//     IMAGES_ROTATE = [
//         '../../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
//         '../../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
//         '../../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
//         '../../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
//     ];

//     IMAGES_SPLASH = [
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
//         'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
//     ];

//     throwInterval;
//     animateInterval;
//     direction;

//     constructor(x, y, world) {
//         super().loadImage('../../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
//         this.loadImages(this.IMAGES_ROTATE);
//         this.loadImages(this.IMAGES_SPLASH);
//         this.world = world;

//         // Bestimme die Richtung und setze die Flaschenposition basierend auf der Blickrichtung
//         this.direction = this.world.character.otherDirection ? -1 : 1;
//         const offsetX = this.direction === 1 ? 100 : -50; // Setzt die Position links oder rechts vom Charakter
//         this.setPosition(x + offsetX, y);
//         this.dimensions(60, 50);
//         this.hitByBottle = false;

//         // Starte Wurf und Animation
//         this.startThrow();
//         this.startAnimation();
//     }

//     setPosition(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     dimensions(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     startThrow() {
//         if (this.world.character.bottles > 0) {
//             this.speedY = 20;
//             this.applyGravity();
//             this.throwInterval = setInterval(() => {
//                 this.x += 10 * this.direction;
//             }, 25);
//             this.world.character.bottles -= 10;
//             this.world.bottleBar.setPercentage(this.world.character.bottles);
//         }
//     }

//     stopThrow() {
//         clearInterval(this.throwInterval);
//     }

//     startAnimation() {
//         if (this.world.character.bottles > 0) {
//             this.animateInterval = setInterval(() => {
//                 if (this.hitByBottle) {
//                     this.stopThrow();
//                     this.stopGravity();
//                     this.playAnimation(this.IMAGES_SPLASH);
//                     this.hideAfterSplash();
//                 } else {
//                     this.playAnimation(this.IMAGES_ROTATE);
//                 }
//             }, 100);
//         }
//     }

//     hideAfterSplash() {
//         setTimeout(() => {
//             this.dimensions(0, 0); // Versteckt die Flasche nach dem Splash
//         }, 200);
//     }
// }

class ThrowableObject extends MovableObjects {
    IMAGES_ROTATE = [
        '../../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGES_SPLASH = [
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    throwInterval;
    animateInterval;
    direction;

    constructor(x, y, world) {
        super(); // Konstruiere das Objekt
        this.world = world;

        // Überprüfe, ob der Charakter Flaschen hat, bevor die Flasche initialisiert wird
        if (this.world.character.bottles > 0) {
            this.loadImage('../../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
            this.loadImages(this.IMAGES_ROTATE);
            this.loadImages(this.IMAGES_SPLASH);

            // Bestimme die Richtung und setze die Flaschenposition basierend auf der Blickrichtung
            this.direction = this.world.character.otherDirection ? -1 : 1;
            const offsetX = this.direction === 1 ? 100 : -50; // Setzt die Position links oder rechts vom Charakter
            this.setPosition(x + offsetX, y);
            this.dimensions(60, 50);
            this.hitByBottle = false;

            // Starte Wurf und Animation
            this.startThrow();
            this.startAnimation();
        } else {
            // Keine Flaschen im Inventar -> Flasche sollte nicht erscheinen
            this.width = 0;
            this.height = 0;
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    dimensions(height, width) {
        this.height = height;
        this.width = width;
    }

    startThrow() {
        // Starte den Wurf nur, wenn noch Flaschen verfügbar sind
        if (this.world.character.bottles > 0) {
            this.speedY = 20;
            this.applyGravity();
            this.throwInterval = setInterval(() => {
                this.x += 10 * this.direction;
            }, 25);

            // Reduziere die Anzahl der Flaschen und aktualisiere die Flaschenanzeige
            this.world.character.bottles -= 10;
            this.world.bottleBar.setPercentage(this.world.character.bottles);
        }
    }

    stopThrow() {
        clearInterval(this.throwInterval);
    }

    startAnimation() {
        // Animation nur starten, wenn Flaschen vorhanden sind
        if (this.world.character.bottles > 0) {
            this.animateInterval = setInterval(() => {
                if (this.hitByBottle) {
                    this.stopThrow();
                    this.stopGravity();
                    this.playAnimation(this.IMAGES_SPLASH);
                    this.hideAfterSplash();
                } else {
                    this.playAnimation(this.IMAGES_ROTATE);
                }
            }, 100);
        }
    }

    hideAfterSplash() {
        setTimeout(() => {
            this.dimensions(0, 0); // Versteckt die Flasche nach dem Splash
        }, 200);
    }
}
