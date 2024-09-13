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
