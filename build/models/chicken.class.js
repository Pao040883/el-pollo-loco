// class Chicken extends MovableObjects {
//     y = 360;
//     height = 55;
//     width = 70;
//     speed = 10;
//     IMAGES_WALKING = [
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
//         '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
//     ];

//     IMAGES_DEAD = [
//         '../../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
//     ];

//     constructor() {
//         super().loadImage('../../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_DEAD);
//         this.x = 500 + Math.random() * 1500;
//         this.speed = 0.15 + Math.random() * 0.5;
//         this.energy = 5;
//         this.animate();

//     }

//     animate() {
//         setInterval(() => {
//             if (this.energy > 0) {
//                 this.moveLeft();
//                 this.jump(20);
//             }
//         }, 1000 / 60);

//         setInterval(() => {
//             this.playAnimation(this.IMAGES_WALKING);
//         }, 200);

//         setInterval(() => {
//             if (this.energy == 0) {
//                 this.playAnimation(this.IMAGES_DEAD);
//                 setTimeout(() => {
//                     this.width = 0;
//                     this.height = 0;
//                 }, 500);
//             }
//         }, 50);
//     }

// }

class Chicken extends MovableObjects {
    y = 360;
    height = 55;
    width = 70;
    speed = 10;
    energy = 5;

    IMAGES_WALKING = [
        '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        '../../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.setPosition();
        this.setSpeed();
        this.animate();
    }

    setPosition() {
        this.x = 500 + Math.random() * 4000;
    }

    setSpeed() {
        this.speed = 0.15 + Math.random() * 0.5;
    }

    animate() {
        this.moveLeftAnimation();
        this.walkAnimation();
        this.deadAnimation();
    }

    moveLeftAnimation() {
        this.movementInterval = setInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
                this.jump(20); // Placeholder, replace jump logic as needed
            }
        }, 1000 / 60);
    }

    walkAnimation() {
        this.walkingInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    deadAnimation() {
        this.deathCheckInterval = setInterval(() => {
            if (this.energy === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.hideAfterDeath();
            }
        }, 50);
    }

    hideAfterDeath() {
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
        }, 500);
    }

    stopAllAnimations() {
        clearInterval(this.movementInterval);
        clearInterval(this.walkingInterval);
        clearInterval(this.deathCheckInterval);
    }
}
