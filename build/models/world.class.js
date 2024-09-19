/**
 * Class representing the game world.
 * It contains the character, level, game logic, and handles rendering and interactions within the game world.
 */
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
    endbossActive = false;
    isBottleActive = false;

    /**
     * Creates a new game world instance.
     * @param {HTMLCanvasElement} canvas - The canvas element where the game is drawn.
     * @param {Object} keyboard - The object representing keyboard input.
     */
    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
        this.startGameLoop();
    }

    /**
     * Sets the reference to the world in the character object.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Starts the interval that checks for throwable objects (bottles).
     */
    run() {
        this.throwCheckInterval = setInterval(() => this.checkThrowObjects(), 100);
    }

    /**
     * Checks if the player is pressing the throw key (D) and adds a throwable object (bottle).
     * Only allows throwing a bottle if none is currently active.
     */
    checkThrowObjects() {
        if (this.keyboard.D && !this.isBottleActive) {  // Prüfe, ob keine Flasche aktiv ist
            this.addThrowableObject();
            this.isBottleActive = true;  // Flasche ist jetzt aktiv
        }
    }

    /**
     * Adds a new throwable object (bottle) to the world.
     */
    addThrowableObject() {
        const bottle = new ThrowableObject(this.character.x, this.character.y + 100, this);
        this.throwableObjects.push(bottle);

        // Flasche verschwunden oder Ziel erreicht, Flag zurücksetzen
        setTimeout(() => {
            this.isBottleActive = false; // Setze die Flag zurück
        }, 500);  // Beispielhaft nach 3 Sekunden (abhängig von deiner Spielmechanik)
    }

    /**
     * Starts the game loop that updates and redraws the game at each frame.
     */
    startGameLoop() {
        const gameLoop = () => {
            this.clearCanvas();
            this.updateGameObjects();
            this.checkEndbossActivation();
            this.drawGameObjects();  // Ensure this method is correctly defined
            requestAnimationFrame(gameLoop);
        };
        requestAnimationFrame(gameLoop);
    }

    /**
     * Updates the game objects, including checking for collisions, bottle hits, and collectibles.
     */
    updateGameObjects() {
        this.checkCollisions();
        this.checkBottleHit();
        this.checkCollectibles();
    }

    /**
     * Checks for collisions between the character and enemies.
     */
    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (enemy.energy > 0 && this.character.isColliding(enemy)) {
                this.handleEnemyCollision(enemy);
            }
        });
    }

    /**
     * Handles collisions between the character and enemies.
     * @param {Object} enemy - The enemy that the character collides with.
     */
    handleEnemyCollision(enemy) {
        if (this.character.isAboveGround() && this.character.speedY < 0 && (this.character.y + this.character.height - enemy.height - this.character.speedY > enemy.y - enemy.offset.top - enemy.offset.bottom) &&
            !enemy.isBoss) {
            this.handleJumpCollision(enemy);
        } else {
            this.handleDirectOrBossCollision(enemy);
        }
    }


    /**
     * Handles logic when the character jumps on an enemy.
     * @param {Object} enemy - The enemy that the character collides with.
     */
    handleJumpCollision(enemy) {
        enemy.hit();
        enemy.chickenDeadSound.play(); // Play the sound
    }

    /**
     * Handles logic for direct collisions with an enemy or a boss.
     * @param {Object} enemy - The enemy or boss that the character collides with.
     */
    handleDirectOrBossCollision(enemy) {
        if (enemy.isBoss) {
            this.handleBossCollision(enemy);
        } else if (!enemy.hasHit) {
            this.handleDirectCollision(enemy);
        }
    }

    /**
     * 
    * Handles logic for direct collisions with non-boss enemies.
    * @param {Object} enemy - The enemy that the character collides with.
    */
    handleDirectCollision(enemy) {
        this.character.hit();
        this.healthBar.setPercentage(this.character.energy);
        enemy.hasHit = true;  // Gegner verursacht keinen Schaden mehr
        setTimeout(() => {
            enemy.hasHit = false;  // Nach 1 Sekunde kann der Gegner wieder Schaden verursachen
        }, 1000);  // 1000 Millisekunden = 1 Sekunde
    }


    /**
     * Handles logic for collisions with the boss, including the cooldown between hits.
     * @param {Object} boss - The boss that the character collides with.
     */
    handleBossCollision(boss) {
        const currentTime = new Date().getTime();
        if (currentTime - boss.lastHitTime > 1000) {  // 1-second cooldown between hits
            this.handleDirectCollision(boss);
            boss.lastHitTime = currentTime;
        }
    }

    /**
     * Checks for collectible items (coins and bottles) and updates the corresponding bars.
     */
    checkCollectibles() {
        this.checkItemCollection(this.level.coins, 'coin', this.coinBar);
        this.checkItemCollection(this.level.bottles, 'bottle', this.bottleBar);
    }

    /**
     * Checks if the character collects a specific type of item and updates the UI.
     * @param {Array} items - The list of items to check for collection.
     * @param {string} type - The type of item ('coin' or 'bottle').
     * @param {Object} bar - The status bar corresponding to the item type.
     */
    checkItemCollection(items, type, bar) {
        items.forEach(item => {
            if (!item.isCollected && this.character.isColliding(item)) {
                this.handleItemCollection(item, type, bar);
            }
        });
    }

    /**
     * Handles the logic when an item is collected.
     * @param {Object} item - The item being collected.
     * @param {string} type - The type of the item ('coin' or 'bottle').
     * @param {Object} bar - The status bar for the collected item.
     */
    handleItemCollection(item, type, bar) {
        this.character.collect(type);
        item[type + 'Sound'].play(); // Dynamically play the correct sound
        item.isCollected = true;
        bar.setPercentage(this.character[type + 's']); // Dynamically update the bar
        item.hideAfterCollect();
    }

    /**
     * Checks if a throwable object (bottle) hits any enemies and handles the collision.
     */
    checkBottleHit() {
        this.throwableObjects.forEach(bottle => {
            if (!bottle.hitByBottle) {
                this.level.enemies.forEach(enemy => {
                    if (enemy.isColliding(bottle)) {
                        this.handleBottleHitEnemy(bottle, enemy);
                    }
                });
            }
        });
    }

    /**
 * Handles the logic when a bottle hits an enemy or boss.
 * @param {Object} bottle - The throwable object that collides with the enemy.
 * @param {Object} enemy - The enemy or boss that the bottle hits.
 */
    handleBottleHitEnemy(bottle, enemy) {
        enemy.hit();
        bottle.hitByBottle = true;
        if (enemy.isBoss) {
            enemy.startHurtAnimation();
            enemy.endbossDeadSound.play();
            this.endbossBar.setPercentage(enemy.energy);  // Aktualisiere die Endboss-Statusbar
        } else {
            enemy.chickenDeadSound.play();
        }
    }

    /**
     * Checks if the character has reached the X-coordinate to activate the Endboss.
     * If so, the Endboss and its status bar are activated.
     */
    checkEndbossActivation() {
        const triggerX = 4000; // Setze die X-Koordinate, bei der der Endboss aktiviert werden soll
        if (this.character.x >= triggerX && !this.endbossActive) {
            this.endbossActive = true;
            this.endbossBar.setPercentage(this.level.enemies.find(enemy => enemy.isBoss).energy);
            this.activateEndboss();
        }
    }

    /**
     * Activates the Endboss, starting its movement and animations.
     */
    activateEndboss() {
        this.level.enemies.forEach(enemy => {
            if (enemy.isBoss) {
                enemy.activate(); // Aktiviere den Endboss (Bewegung und Animationen starten)
            }
        });
    }

    /**
     * Draws the game objects on the canvas.
     */
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

    /**
     * Draws the UI elements (health bar, bottle bar, coin bar, endboss bar) on the canvas.
     */
    drawUI() {
        this.addToMap(this.healthBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        if (this.endbossActive) {
            this.addToMap(this.endbossBar); // Zeige die Endboss-Leiste nur, wenn der Endboss aktiviert ist
        }

    }

    /**
     * Clears the entire canvas.
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Adds a list of objects to the map by drawing them on the canvas.
     * @param {Array} objects - The list of objects to add to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => this.addToMap(object));
    }

    /**
     * Adds an object to the map and draws it on the canvas.
     * @param {Object} mo - The movable object to draw.
     */
    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    /**
     * Flips an image horizontally for objects facing the opposite direction.
     * @param {Object} mo - The movable object to flip.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the flipped image back to its original orientation.
     * @param {Object} mo - The movable object to flip back.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
     * Stops all intervals running in the game.
     */
    stopAllIntervals() {
        clearInterval(this.throwCheckInterval);
    }
}
