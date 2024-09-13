// class World {
//     character = new Character();
//     level = level1;
//     canvas;
//     ctx;
//     keyboard;
//     camera_x = 0;
//     statusBar = new Statusbar();
//     bottleBar = new BottleBar();
//     coinBar = new CoinBar();
//     throwableObjects = [];

//     constructor(canvas, keyboard) {
//         this.canvas = canvas;
//         this.ctx = canvas.getContext('2d');
//         this.keyboard = keyboard;
//         this.setWorld();
//         this.run();
//         this.draw();
//     }

//     setWorld() {
//         this.character.world = this;
//     }

//     run() {
//         this.throwCheckInterval = setInterval(() => this.checkThrowObjects(), 100);
//         this.collisionCheckInterval = setInterval(() => {
//             this.checkCollisions();
//             this.checkBottleHit();
//             this.checkCoinHit();
//         }, 50);
//     }

//     checkThrowObjects() {
//         if (this.keyboard.D) {
//             const bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this);
//             this.throwableObjects.push(bottle);
//         }
//     }

//     checkBottleHit() {
//         this.throwableObjects.forEach(bottle => {
//             if (!bottle.hitByBottle) {
//                 this.level.enemies.forEach(enemy => {
//                     if (enemy.isColliding(bottle)) {
//                         enemy.hit();
//                         bottle.hitByBottle = true;
//                     }
//                 });
//             }
//         });
//     }

//     checkCollisions() {
//         this.level.enemies.forEach(enemy => {
//             if (enemy.energy > 0) {
//                 if (this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isBoss) {
//                     enemy.hit();
//                 } else if (this.character.isColliding(enemy)) {
//                     this.character.hit();
//                     this.statusBar.setPercentage(this.character.energy);
//                 }
//             }
//         });
//     }

//     checkCoinHit() {
//         this.level.coins.forEach(coin => {
//             if (!coin.isCollected) {
//                 if (this.character.isColliding(coin)) {
//                     this.character.collect();
//                     coin.isCollected = true;
//                     this.coinBar.setPercentage(this.character.coins);
//                     console.log(this.character.coins);
//                     coin.hideAfterCollect();
//                 }
//             }
//         });
//     }


//     draw() {
//         this.clearCanvas();
//         this.ctx.translate(this.camera_x, 0);

//         this.addObjectsToMap(this.level.backgroundObjects);


//         this.addObjectsToMap(this.level.clouds);
//         this.addObjectsToMap(this.level.enemies);
//         this.addObjectsToMap(this.throwableObjects);
//         this.addObjectsToMap(this.level.coins);

//         this.ctx.translate(-this.camera_x, 0);
//         this.addToMap(this.statusBar);
//         this.addToMap(this.bottleBar);
//         this.addToMap(this.coinBar);
//         this.ctx.translate(this.camera_x, 0);

//         this.addToMap(this.character);

//         this.ctx.translate(-this.camera_x, 0);

//         requestAnimationFrame(() => this.draw());
//     }

//     clearCanvas() {
//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }

//     addObjectsToMap(objects) {
//         objects.forEach(object => this.addToMap(object));
//     }

//     addToMap(mo) {
//         if (mo.otherDirection) this.flipImage(mo);

//         mo.draw(this.ctx);
//         mo.drawFrame(this.ctx); // Optional debug mode

//         if (mo.otherDirection) this.flipImageBack(mo);
//     }

//     flipImage(mo) {
//         this.ctx.save();
//         this.ctx.translate(mo.width, 0);
//         this.ctx.scale(-1, 1);
//         mo.x = mo.x * -1;
//     }

//     flipImageBack(mo) {
//         mo.x = mo.x * -1;
//         this.ctx.restore();
//     }

//     stopAllIntervals() {
//         clearInterval(this.throwCheckInterval);
//         clearInterval(this.collisionCheckInterval);
//     }
// }

class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
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

    checkBottleHit() {
        this.throwableObjects.forEach(bottle => {
            if (!bottle.hitByBottle) {
                this.level.enemies.forEach(enemy => {
                    if (enemy.isColliding(bottle)) {
                        enemy.hit();
                        bottle.hitByBottle = true;
                        console.log(enemy.energy);

                    }
                });
            }
        });
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (enemy.energy > 0) {
                if (this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isBoss) {
                    enemy.hit();
                } else if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });
    }

    checkCoinHit() {
        this.level.coins.forEach(coin => {
            if (!coin.isCollected && this.character.isColliding(coin)) {
                this.character.collect('coin');
                coin.isCollected = true;
                this.coinBar.setPercentage(this.character.coins);
                coin.hideAfterCollect();
            }
        });
    }

    checkBottleCollect() {
        this.level.bottles.forEach(bottle => {
            if (!bottle.isCollected && this.character.isColliding(bottle)) {
                this.character.collect('bottle');
                bottle.isCollected = true;
                this.bottleBar.setPercentage(this.character.bottles);
                bottle.hideAfterCollect();
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
        this.checkCoinHit();
        this.checkBottleCollect();
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
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
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
        mo.drawFrame(this.ctx); // Optional debug mode
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
