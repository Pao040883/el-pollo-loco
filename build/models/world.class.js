// // class World {
// //     character = new Character();
// //     level = level1;
// //     canvas;
// //     ctx;
// //     keyboard;
// //     camera_x = 0;
// //     statusBar = new Statusbar();
// //     bottleBar = new BottleBar();
// //     coinBar = new CoinBar();
// //     throwableObjects = [];

// //     constructor(canvas, keyboard) {
// //         this.canvas = canvas;
// //         this.ctx = canvas.getContext('2d');
// //         this.keyboard = keyboard;
// //         this.setWorld();
// //         this.run();
// //         this.startGameLoop();
// //     }

// //     setWorld() {
// //         this.character.world = this;
// //     }

// //     run() {
// //         this.throwCheckInterval = setInterval(() => this.checkThrowObjects(), 100);
// //     }

// //     checkThrowObjects() {
// //         if (this.keyboard.D) {
// //             const bottle = new ThrowableObject(this.character.x, this.character.y + 100, this);
// //             this.throwableObjects.push(bottle);
// //         }
// //     }

// //     checkBottleHit() {
// //         this.throwableObjects.forEach(bottle => {
// //             if (!bottle.hitByBottle) {
// //                 this.level.enemies.forEach(enemy => {
// //                     if (enemy.isColliding(bottle)) {
// //                         enemy.hit();
// //                         bottle.hitByBottle = true;
// //                         console.log(enemy.energy);

// //                     }
// //                 });
// //             }
// //         });
// //     }

// //     checkCollisions() {
// //         this.level.enemies.forEach(enemy => {
// //             if (enemy.energy > 0) {
// //                 if (this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isBoss) {
// //                     enemy.hit();
// //                     enemy.chicken_dead_sound.play();
// //                     this.character.jump(20);
// //                 } else if (this.character.isColliding(enemy) && !enemy.hasHit) {
// //                     this.character.hit();
// //                     enemy.hasHit = true;
// //                     this.statusBar.setPercentage(this.character.energy);
// //                 }
// //             }
// //         });
// //     }

// //     checkCoinHit() {
// //         this.level.coins.forEach(coin => {
// //             if (!coin.isCollected && this.character.isColliding(coin)) {
// //                 this.character.collect('coin');
// //                 coin.coin_sound.play();
// //                 coin.isCollected = true;
// //                 this.coinBar.setPercentage(this.character.coins);
// //                 coin.hideAfterCollect();
// //             }
// //         });
// //     }

// //     checkBottleCollect() {
// //         this.level.bottles.forEach(bottle => {
// //             if (!bottle.isCollected && this.character.isColliding(bottle)) {
// //                 this.character.collect('bottle');
// //                 bottle.bottle_sound.play();
// //                 bottle.isCollected = true;
// //                 this.bottleBar.setPercentage(this.character.bottles);
// //                 bottle.hideAfterCollect();
// //             }
// //         });
// //     }

// //     startGameLoop() {
// //         const gameLoop = () => {
// //             this.clearCanvas();
// //             this.updateGameObjects();
// //             this.drawGameObjects();
// //             requestAnimationFrame(gameLoop);
// //         };
// //         requestAnimationFrame(gameLoop);
// //     }

// //     updateGameObjects() {
// //         this.checkCollisions();
// //         this.checkBottleHit();
// //         this.checkCoinHit();
// //         this.checkBottleCollect();
// //     }

// //     drawGameObjects() {
// //         this.ctx.translate(this.camera_x, 0);
// //         this.addObjectsToMap(this.level.backgroundObjects);
// //         this.addObjectsToMap(this.level.clouds);
// //         this.addObjectsToMap(this.level.bottles);
// //         this.addObjectsToMap(this.level.enemies);
// //         this.addObjectsToMap(this.throwableObjects);
// //         this.addObjectsToMap(this.level.coins);
// //         this.ctx.translate(-this.camera_x, 0);
// //         this.drawUI();
// //         this.ctx.translate(this.camera_x, 0);
// //         this.addToMap(this.character);
// //         this.ctx.translate(-this.camera_x, 0);
// //     }

// //     drawUI() {
// //         this.addToMap(this.statusBar);
// //         this.addToMap(this.bottleBar);
// //         this.addToMap(this.coinBar);
// //     }

// //     clearCanvas() {
// //         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// //     }

// //     addObjectsToMap(objects) {
// //         objects.forEach(object => this.addToMap(object));
// //     }

// //     addToMap(mo) {
// //         if (mo.otherDirection) this.flipImage(mo);
// //         mo.draw(this.ctx);
// //         mo.drawFrame(this.ctx); // Optional debug mode
// //         if (mo.otherDirection) this.flipImageBack(mo);
// //     }

// //     flipImage(mo) {
// //         this.ctx.save();
// //         this.ctx.translate(mo.width, 0);
// //         this.ctx.scale(-1, 1);
// //         mo.x = mo.x * -1;
// //     }

// //     flipImageBack(mo) {
// //         mo.x = mo.x * -1;
// //         this.ctx.restore();
// //     }

// //     stopAllIntervals() {
// //         clearInterval(this.throwCheckInterval);
// //     }
// // }

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
//         this.startGameLoop();
//     }

//     setWorld() {
//         this.character.world = this;
//     }

//     run() {
//         this.throwCheckInterval = setInterval(() => this.checkThrowObjects(), 100);
//     }

//     checkThrowObjects() {
//         if (this.keyboard.D) {
//             const bottle = new ThrowableObject(this.character.x, this.character.y + 100, this);
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
//                         console.log(enemy.energy);
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
//                     enemy.chickenDeadSound.play(); // Der Sound wird einfach abgespielt
//                     this.character.jump(20);
//                 } else if (this.character.isColliding(enemy) && !enemy.hasHit) {
//                     this.character.hit();
//                     enemy.hasHit = true;
//                     this.statusBar.setPercentage(this.character.energy);
//                 }
//             }
//         });
//     }

//     checkCoinHit() {
//         this.level.coins.forEach(coin => {
//             if (!coin.isCollected && this.character.isColliding(coin)) {
//                 this.character.collect('coin');
//                 coin.coinSound.play(); // Aufruf des Sounds in der Coin-Klasse
//                 coin.isCollected = true;
//                 this.coinBar.setPercentage(this.character.coins);
//                 coin.hideAfterCollect();
//             }
//         });
//     }

//     checkBottleCollect() {
//         this.level.bottles.forEach(bottle => {
//             if (!bottle.isCollected && this.character.isColliding(bottle)) {
//                 this.character.collect('bottle');
//                 bottle.bottleSound.play(); // Aufruf des Sounds in der Bottle-Klasse
//                 bottle.isCollected = true;
//                 this.bottleBar.setPercentage(this.character.bottles);
//                 bottle.hideAfterCollect();
//             }
//         });
//     }

//     startGameLoop() {
//         const gameLoop = () => {
//             this.clearCanvas();
//             this.updateGameObjects();
//             this.drawGameObjects();
//             requestAnimationFrame(gameLoop);
//         };
//         requestAnimationFrame(gameLoop);
//     }

//     updateGameObjects() {
//         this.checkCollisions();
//         this.checkBottleHit();
//         this.checkCoinHit();
//         this.checkBottleCollect();
//     }

//     drawGameObjects() {
//         this.ctx.translate(this.camera_x, 0);
//         this.addObjectsToMap(this.level.backgroundObjects);
//         this.addObjectsToMap(this.level.clouds);
//         this.addObjectsToMap(this.level.bottles);
//         this.addObjectsToMap(this.level.enemies);
//         this.addObjectsToMap(this.throwableObjects);
//         this.addObjectsToMap(this.level.coins);
//         this.ctx.translate(-this.camera_x, 0);
//         this.drawUI();
//         this.ctx.translate(this.camera_x, 0);
//         this.addToMap(this.character);
//         this.ctx.translate(-this.camera_x, 0);
//     }

//     drawUI() {
//         this.addToMap(this.statusBar);
//         this.addToMap(this.bottleBar);
//         this.addToMap(this.coinBar);
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

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (enemy.energy > 0 && this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && !enemy.isBoss) {
                    this.handleJumpCollision(enemy);
                } else if (!enemy.hasHit) {
                    this.handleDirectCollision(enemy);
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
        enemy.hasHit = true;
        this.statusBar.setPercentage(this.character.energy);
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
                    if (enemy.isColliding(bottle)) {
                        enemy.hit();
                        enemy.chickenDeadSound.play();
                        bottle.hitByBottle = true;
                        console.log(enemy.energy);
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
