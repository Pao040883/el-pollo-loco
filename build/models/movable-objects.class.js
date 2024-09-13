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
