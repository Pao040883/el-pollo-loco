/**
 * Class representing the main character in the game.
 * Inherits from the MovableObjects class and manages character animations, sounds, and movement.
 * Handles user input through keyboard and mobile controls.
 */
class Character extends MovableObjects {
    height = 250;
    y = 180;
    speed = 10;

    IMAGES_IDLE = [
        './assets/img/2_character_pepe/1_idle/idle/I-1.png',
        './assets/img/2_character_pepe/1_idle/idle/I-2.png',
        './assets/img/2_character_pepe/1_idle/idle/I-3.png',
        './assets/img/2_character_pepe/1_idle/idle/I-4.png',
        './assets/img/2_character_pepe/1_idle/idle/I-5.png',
        './assets/img/2_character_pepe/1_idle/idle/I-6.png',
        './assets/img/2_character_pepe/1_idle/idle/I-7.png',
        './assets/img/2_character_pepe/1_idle/idle/I-8.png',
        './assets/img/2_character_pepe/1_idle/idle/I-9.png',
        './assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        './assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        './assets/img/2_character_pepe/2_walk/W-21.png',
        './assets/img/2_character_pepe/2_walk/W-22.png',
        './assets/img/2_character_pepe/2_walk/W-23.png',
        './assets/img/2_character_pepe/2_walk/W-24.png',
        './assets/img/2_character_pepe/2_walk/W-25.png',
        './assets/img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        './assets/img/2_character_pepe/3_jump/J-31.png',
        './assets/img/2_character_pepe/3_jump/J-32.png',
        './assets/img/2_character_pepe/3_jump/J-33.png',
        './assets/img/2_character_pepe/3_jump/J-34.png',
        './assets/img/2_character_pepe/3_jump/J-35.png',
        './assets/img/2_character_pepe/3_jump/J-36.png',
        './assets/img/2_character_pepe/3_jump/J-37.png',
        './assets/img/2_character_pepe/3_jump/J-38.png',
        './assets/img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        './assets/img/2_character_pepe/4_hurt/H-41.png',
        './assets/img/2_character_pepe/4_hurt/H-42.png',
        './assets/img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        './assets/img/2_character_pepe/5_dead/D-51.png',
        './assets/img/2_character_pepe/5_dead/D-52.png',
        './assets/img/2_character_pepe/5_dead/D-53.png',
        './assets/img/2_character_pepe/5_dead/D-54.png',
        './assets/img/2_character_pepe/5_dead/D-55.png',
        './assets/img/2_character_pepe/5_dead/D-56.png',
        './assets/img/2_character_pepe/5_dead/D-57.png'
    ];

    world;
    lastActionTime = Date.now();
    idleTimeout = 15000;
    isLongIdle = false;

    walkingSound = setStoppableSound('./assets/audio/character_run.mp3');
    jumpSound = setStoppableSound('./assets/audio/jump.mp3');
    snoringSound = setStoppableSound('./assets/audio/snoring.mp3');
    hurtSound = setStoppableSound('./assets/audio/hurt.mp3');
    deadSound = setStoppableSound('./assets/audio/character_death.mp3');

    /**
     * Creates a new character instance, loads images, and starts animations.
     */
    constructor() {
        super().loadImage('./assets/img/2_character_pepe/2_walk/W-21.png');
        this.loadAllImages();
        this.applyGravity();
        this.animate();
        this.energy = 100;
        this.coins = 0;
        this.bottles = 0;

        this.addMobileControls();
    }

    /**
     * Loads all the character's animation images.
     */
    loadAllImages() {
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
    }

    /**
     * Adds all the mobile controls for the character, linking them to specific actions.
     */
    addMobileControls() {
        this.setupMovementControls();
        this.setupActionControls();
    }

    /**
     * Sets up movement controls for the character (left and right).
     * Links touch and mouse events to left and right movement.
     */
    setupMovementControls() {
        const leftButton = document.getElementById('move-left');
        const rightButton = document.getElementById('move-right');

        this.addMovementControl(leftButton, 'LEFT');
        this.addMovementControl(rightButton, 'RIGHT');
    }

    /**
     * Sets up action controls for the character (jumping and throwing).
     * Links touch and click events to jump and throw actions.
     */
    setupActionControls() {
        const jumpButton = document.getElementById('jump');
        const throwBottleButton = document.getElementById('throw-bottle');

        this.addActionControl(jumpButton, 'SPACE');
        this.addActionControl(throwBottleButton, 'D');
    }

    /**
     * Adds movement control for a specific button, linking it to a direction.
     * @param {HTMLElement} button - The button element for movement.
     * @param {string} direction - The direction the character should move ('LEFT' or 'RIGHT').
     */
    addMovementControl(button, direction) {
        this.addTouchControl(button, direction);
        this.addMouseControl(button, direction);
    }

    /**
     * Adds action control for a specific button, linking it to an action.
     * @param {HTMLElement} button - The button element for the action.
     * @param {string} action - The action to be triggered (e.g., 'SPACE' for jump, 'D' for throw).
     */
    addActionControl(button, action) {
        button.addEventListener('touchstart', () => this.triggerAction(action));
        button.addEventListener('click', () => this.triggerAction(action));
    }

    /**
     * Adds touch control to the specified button for movement.
     * @param {HTMLElement} button - The button element.
     * @param {string} direction - The direction to be triggered on touch ('LEFT' or 'RIGHT').
     */
    addTouchControl(button, direction) {
        button.addEventListener('touchstart', () => this.handleTouchStart(direction));
        button.addEventListener('touchend', () => this.handleTouchEnd(direction));
        button.addEventListener('touchcancel', () => this.handleTouchEnd(direction));
    }

    /**
     * Adds mouse control to the specified button for movement.
     * @param {HTMLElement} button - The button element.
     * @param {string} direction - The direction to be triggered on mouse events ('LEFT' or 'RIGHT').
     */
    addMouseControl(button, direction) {
        button.addEventListener('mousedown', () => this.handleMouseDown(direction));
        button.addEventListener('mouseup', () => this.handleMouseUp(direction));
    }

    /**
     * Handles the start of a touch event, setting the movement direction.
     * @param {string} direction - The direction the character should move ('LEFT' or 'RIGHT').
     */
    handleTouchStart(direction) {
        this.world.keyboard[direction] = true;
    }

    /**
     * Handles the end of a touch event, stopping the movement.
     * @param {string} direction - The direction the character was moving ('LEFT' or 'RIGHT').
     */
    handleTouchEnd(direction) {
        this.world.keyboard[direction] = false;
    }

    /**
     * Handles the start of a mouse event, setting the movement direction.
     * @param {string} direction - The direction the character should move ('LEFT' or 'RIGHT').
     */
    handleMouseDown(direction) {
        this.world.keyboard[direction] = true;
    }

    /**
     * Handles the end of a mouse event, stopping the movement.
     * @param {string} direction - The direction the character was moving ('LEFT' or 'RIGHT').
     */
    handleMouseUp(direction) {
        this.world.keyboard[direction] = false;
    }

    /**
     * Triggers an action by setting a keyboard action and resetting it after a specified duration.
     * @param {string} action - The action to trigger (e.g., 'SPACE' for jump).
     * @param {number} [duration=150] - The duration for how long the action is triggered.
     */
    triggerAction(action, duration = 150) {
        this.world.keyboard[action] = true;
        setTimeout(() => {
            this.world.keyboard[action] = false;
        }, duration);
    }

    /**
     * Updates the time of the last action performed by the character.
     * Resets idle status and stops snoring sound.
     */
    updateLastActionTime() {
        this.lastActionTime = Date.now();
        this.isLongIdle = false;
        this.snoringSound.pause();
    }

    /**
     * Handles character jumping logic and plays the jump sound if the character is not already in the air.
     */
    handleJump() {
        if (this.isDead()) return;

        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump(25);
            this.stopWalkingSound();
            this.jumpSound.play();
            this.updateLastActionTime();
        }
    }

    /**
     * Moves the character to the right if the right key is pressed and the character is within the level boundaries.
     */
    handleMoveRight() {
        if (this.isDead()) return;

        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.walkingSound.play();
            this.updateLastActionTime();
        }
    }

    /**
     * Moves the character to the left if the left key is pressed and the character is within the level boundaries.
     */
    handleMoveLeft() {
        if (this.isDead()) return;

        if (this.world.keyboard.LEFT && this.x > -500) {
            this.moveLeft();
            this.otherDirection = true;
            this.walkingSound.play();
            this.updateLastActionTime();
        }
    }

    /**
     * Moves the game camera based on the character's position.
     */
    handleCameraMovement() {
        this.world.camera_x = -this.x + 200;
    }

    /**
     * Stops the walking sound if neither the left nor right movement keys are pressed.
     */
    stopWalkingSound() {
        if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.walkingSound.stop();
        }
    }

    /**
     * Handles all character movement actions including jumping and moving left or right.
     */
    handleMovement() {
        this.handleJump();
        this.handleMoveRight();
        this.handleMoveLeft();
        this.handleCameraMovement();
    }

    /**
     * Checks if the character has been idle for too long, triggering the long idle state.
     */
    checkIdleState() {
        if (Date.now() - this.lastActionTime > this.idleTimeout) {
            this.isLongIdle = true;
        }
    }

    /**
     * Plays the death animation and sound, then triggers the game over sequence.
     */
    handleDeadAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            this.deadSound.play();

            setTimeout(() => {
                this.deadSound.stop();
                this.stopWalkingSound();
                gameOver();
            }, this.IMAGES_DEAD.length * 150);
        }
    }

    /**
     * Plays the hurt animation and sound when the character is injured.
     */
    handleHurtAnimation() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.stopWalkingSound();
            this.hurtSound.play();
            this.updateLastActionTime();
        }
    }

    /**
     * Plays the jumping animation when the character is in the air.
     */
    handleJumpAnimation() {
        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        }
    }

    /**
     * Plays the walking animation when the character is moving on the ground.
     */
    handleWalkingAnimation() {
        if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isAboveGround()) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    /**
     * Plays the long idle animation when the character has been idle for a prolonged period.
     */
    handleLongIdleAnimation() {
        if (this.isLongIdle && !winGame) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
            this.stopWalkingSound();
            this.snoringSound.play();
        }
    }

    /**
     * Plays the regular idle animation when the character is standing still.
     */
    handleIdleAnimation() {
        if (!this.isLongIdle && !this.isDead() && !this.isHurt() && !this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.stopWalkingSound();
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    /**
     * Handles the correct animation based on the character's current state (idle, walking, jumping, hurt, dead).
     */
    handleAnimation() {
        if (this.isDead()) {
            this.handleDeadAnimation();
        } else {
            this.handleHurtAnimation();
            this.handleJumpAnimation();
            this.handleWalkingAnimation();
            this.handleLongIdleAnimation();
            this.handleIdleAnimation();
        }
    }

    /**
     * Animates the character by handling movement and animations at fixed intervals.
     */
    animate() {
        setStoppableInterval(() => {
            this.handleMovement();
            this.checkIdleState();
        }, 1000 / 60);

        setStoppableInterval(() => {
            this.handleAnimation();
        }, 75);
    }
}
