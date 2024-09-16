class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new StatusBar(healthBarImages, 40, 0, 200, 60, 100);
    bottleBar = new StatusBar(bottleBarImages, 40, 50, 200, 60, 0);
    coinBar = new StatusBar(coinBarImages, 40, 100, 200, 60, 0);
    endbossBar = new StatusBar(endbossBarImages, 510, 50, 200, 60, 0);
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
        this.startGameLoop();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        this.throwCheckInterval = setInterval(() => this.checkThrowObjects(), 100);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            const bottle = new ThrowableObject(this.character.x, this.character.y + 100, this);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (enemy.energy > 0 && this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && !enemy.isBoss) {
                    this.handleJumpCollision(enemy);
                } else {
                    if (enemy.isBoss) {
                        const currentTime = new Date().getTime();  // Aktuelle Zeit in Millisekunden
                        if (currentTime - enemy.lastHitTime > 1000) {  // Eine Sekunde (1000 Millisekunden) ist vergangen
                            this.handleDirectCollision(enemy);
                            enemy.lastHitTime = currentTime;  // Setze den Zeitpunkt des letzten Treffers auf die aktuelle Zeit
                        }
                    } else if (!enemy.hasHit) {
                        this.handleDirectCollision(enemy);
                    }
                }
            }
        });
    }



    handleJumpCollision(enemy) {
        enemy.hit();
        enemy.chickenDeadSound.play(); // Play the sound
        this.character.jump(20);
    }

    handleDirectCollision(enemy) {
        this.character.hit();
        this.healthBar.setPercentage(this.character.energy);

        if (!enemy.isBoss) {
            enemy.hasHit = true;  // Nur bei normalen Gegnern setzen
        }
    }

    checkCollectibles() {
        this.checkItemCollection(this.level.coins, 'coin', this.coinBar);
        this.checkItemCollection(this.level.bottles, 'bottle', this.bottleBar);
    }

    checkItemCollection(items, type, bar) {
        items.forEach(item => {
            if (!item.isCollected && this.character.isColliding(item)) {
                this.character.collect(type);
                item[type + 'Sound'].play(); // Dynamically plays the correct sound
                item.isCollected = true;
                bar.setPercentage(this.character[type + 's']); // Dynamically updates the bar
                item.hideAfterCollect();
            }
        });
    }

    checkBottleHit() {
        this.throwableObjects.forEach(bottle => {
            if (!bottle.hitByBottle) {
                this.level.enemies.forEach(enemy => {
                    if (enemy.isColliding(bottle) && !enemy.isBoss) {
                        enemy.hit();
                        enemy.chickenDeadSound.play();
                        bottle.hitByBottle = true;
                    } else if (enemy.isColliding(bottle) && enemy.isBoss) {
                        enemy.hit();
                        enemy.endbossDeadSound.play();
                        bottle.hitByBottle = true;
                    }
                });
            }
        });
    }

    startGameLoop() {
        const gameLoop = () => {
            this.clearCanvas();
            this.updateGameObjects();
            this.drawGameObjects();
            requestAnimationFrame(gameLoop);
        };
        requestAnimationFrame(gameLoop);
    }

    updateGameObjects() {
        this.checkCollisions();
        this.checkBottleHit();
        this.checkCollectibles(); // Handles both coins and bottles
    }

    drawGameObjects() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);
        this.drawUI();
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
    }

    drawUI() {
        this.addToMap(this.healthBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.endbossBar);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addObjectsToMap(objects) {
        objects.forEach(object => this.addToMap(object));
    }

    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx); // Optional debug mode
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    stopAllIntervals() {
        clearInterval(this.throwCheckInterval);
    }
}
