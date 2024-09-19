/**
 * Class representing a game level.
 * It contains enemies, clouds, background objects, coins, and bottles for the level.
 */
class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 4800;

    /**
     * Creates a new Level instance.
     * @param {Array} enemies - The enemies present in the level.
     * @param {Array} clouds - The cloud objects in the level.
     * @param {Array} backgroundObjects - The background objects in the level.
     * @param {Array} coins - The collectible coins in the level.
     * @param {Array} bottles - The collectible bottles in the level.
     */
    constructor(enemies, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }

    /**
     * Returns the total number of enemies in the level.
     * @returns {number} - The number of enemies.
     */
    getEnemyCount() {
        return this.enemies.length;
    }

    /**
     * Returns the total number of coins in the level.
     * @returns {number} - The number of coins.
     */
    getCoinCount() {
        return this.coins.length;
    }

    /**
     * Returns the total number of bottles in the level.
     * @returns {number} - The number of bottles.
     */
    getBottleCount() {
        return this.bottles.length;
    }

    /**
     * Returns the total number of clouds in the level.
     * @returns {number} - The number of clouds.
     */
    getCloudCount() {
        return this.clouds.length;
    }

    /**
     * Returns the total number of background objects in the level.
     * @returns {number} - The number of background objects.
     */
    getBackgroundObjectCount() {
        return this.backgroundObjects.length;
    }
}
