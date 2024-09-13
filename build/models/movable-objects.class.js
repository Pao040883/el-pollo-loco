// class MovableObjects extends DrawableObject {
//     speed = 0.15;
//     otherDirection = false;
//     speedY = 0;
//     acceleration = 2.5;
//     energy = 100;
//     lastHit = 0;
//     gravityInterval;

//     constructor() {
//         super();
//     }

//     applyGravity() {
//         this.gravityInterval = setInterval(() => {
//             if (this.isAboveGround() || this.speedY > 0) {
//                 this.y -= this.speedY;
//                 this.speedY -= this.acceleration;
//             }
//         }, 1000 / 25);
//     }

//     stopGravity() {
//         clearInterval(this.gravityInterval);
//     }

//     isAboveGround() {
//         if (this instanceof ThrowableObject) {
//             return true;
//         } else if (this instanceof Chick) {
//             return this.y < 370;
//         }
//         else {
//             return this.y < 180;
//         }
//     }

//     isColliding(mo) {
//         return this.x + this.width > mo.x &&
//             this.y + this.height > mo.y &&
//             this.x < mo.x &&
//             this.y < mo.y + mo.height
//     }

//     jumpOnChicken(mo) {
//         if (this.y + this.height <= mo.y) {
//             return false;
//         }
//         if (this.x + this.width > mo.x && this.x < mo.x + mo.width) {
//             return this.y + this.height >= mo.y && this.y + this.height <= mo.y + mo.height / 2;
//         }
//         return false;
//     }


//     hit() {
//         this.energy -= 2;
//         if (this.energy < 0) {
//             this.energy = 0;
//         } else {
//             this.lastHit = new Date().getTime();
//         }
//     }

//     isDead() {
//         return this.energy == 0;
//     }

//     isHurt() {
//         let timepassed = new Date().getTime() - this.lastHit;
//         timepassed = timepassed / 1000;
//         return timepassed < 0.5;
//     }

//     playAnimation(images) {
//         let i = this.currentImage % images.length;
//         let path = images[i];
//         this.img = this.imageCache[path];
//         this.currentImage++;
//     }

//     moveRight() {
//         this.x += this.speed;
//         this.otherDirection = false;
//     }

//     moveLeft() {
//         this.x -= this.speed;
//     }

//     jump(speed) {
//         this.speedY = speed;
//     }
// }

// class MovableObjects extends DrawableObject {
//     speed = 0.15;
//     otherDirection = false;
//     speedY = 0;
//     acceleration = 2.5;
//     energy = 100;
//     coins = 0;
//     bottles = 0;
//     lastHit = 0;
//     gravityInterval;

//     constructor() {
//         super();
//     }

//     applyGravity() {
//         this.gravityInterval = setInterval(() => {
//             if (this.isAboveGround() || this.speedY > 0) {
//                 this.y -= this.speedY;
//                 this.speedY -= this.acceleration;
//             }
//         }, 1000 / 25);
//     }

//     stopGravity() {
//         clearInterval(this.gravityInterval);
//     }

//     isAboveGround() {
//         return this.y < this.getGroundLevel();
//     }

//     getGroundLevel() {
//         if (this instanceof ThrowableObject) return Infinity;
//         if (this instanceof Chick) return 370;
//         return 180;
//     }

//     isColliding(mo) {
//         return (
//             this.x + this.width > mo.x &&
//             this.y + this.height > mo.y &&
//             this.x < mo.x &&
//             this.y < mo.y + mo.height
//         );
//     }

//     hit() {
//         this.energy = Math.max(0, this.energy - 5);
//         if (this.energy > 0) {
//             // console.log(this + ' ' + this.energy);
//             this.lastHit = Date.now();
//         }
//     }

//     collect() {
//         if (this < 100) {
//             this += 5;
//         }
//     }

//     isDead() {
//         return this.energy === 0;
//     }

//     isHurt() {
//         return (Date.now() - this.lastHit) / 1000 < 0.5;
//     }

//     playAnimation(images) {
//         let i = this.currentImage % images.length;
//         this.img = this.imageCache[images[i]];
//         this.currentImage++;
//     }

//     moveRight() {
//         this.x += this.speed;
//         this.otherDirection = false;
//     }

//     moveLeft() {
//         this.x -= this.speed;
//     }

//     jump(speed) {
//         this.speedY = speed;
//     }

//     hideAfterCollect() {
//         this.width = 0;
//         this.height = 0;
//     }
// }

class MovableObjects extends DrawableObject {
    constructor() {
        super();
        this.speed = 0.15;
        this.otherDirection = false;
        this.speedY = 0;
        this.acceleration = 2.5;
        this.energy = 100;
        this.coins = 0;
        this.bottles = 0;
        this.lastHit = 0;
        this.gravityInterval = null;
    }

    applyGravity() {
        this.gravityInterval = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25); // 40 FPS für die Schwerkraft
    }

    stopGravity() {
        if (this.gravityInterval) {
            clearInterval(this.gravityInterval);
        }
    }

    isAboveGround() {
        return this.y < this.getGroundLevel();
    }

    getGroundLevel() {
        if (this instanceof ThrowableObject) return Infinity; // Flaschen sollen nicht auf dem Boden landen
        if (this instanceof Chick) return 370; // Spezielle Höhe für bestimmte Gegner
        return 180; // Standard-Bodenhöhe
    }

    isColliding(mo) {
        // Überprüfung auf Kollision zwischen zwei Objekten
        return (
            this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height
        );
    }

    hit(damage = 15) {
        // Schaden zufügen und verhindern, dass die Energie unter 0 fällt
        this.energy = Math.max(0, this.energy - damage);
        if (this.energy > 0) {
            this.lastHit = Date.now(); // Zeitpunkt des letzten Treffers
        }
    }

    /**
     * Sammle Coins oder Bottles, basierend auf dem übergebenen Item-Typ
     * @param {string} itemType - Der Typ des Items, entweder 'coin' oder 'bottle'
     */
    collect(itemType) {
        if (itemType === 'coin') {
            this.coins += 5; // Sammle eine Münze
        } else if (itemType === 'bottle') {
            this.bottles += 5; // Sammle eine Flasche
        }
    }

    isDead() {
        return this.energy === 0;
    }

    isHurt() {
        // Überprüfen, ob das Objekt kürzlich getroffen wurde
        return (Date.now() - this.lastHit) / 1000 < 0.5; // Objekt ist für 0.5 Sekunden "verletzt"
    }

    playAnimation(images) {
        // Spielt die Animation durch Wechslen der Bilder
        let i = this.currentImage % images.length;
        this.img = this.imageCache[images[i]];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false; // Blickrichtung nach rechts
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump(speed) {
        this.speedY = speed; // Setzt die vertikale Geschwindigkeit für den Sprung
    }

    hideAfterCollect() {
        // Versteckt das Objekt nach dem Einsammeln
        this.width = 0;
        this.height = 0;
    }
}
