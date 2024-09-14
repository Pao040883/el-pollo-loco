class Chick extends MovableObjects {
    y = 370;
    height = 45;
    width = 60;
    speed = 10;
    IMAGES_WALKING = [
        '../../assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../../assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../../assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        '../../assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage('../../assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 500 + Math.random() * 4000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.energy = 5;
        this.applyGravity();
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            }
            if (this.energy > 0 && !this.isAboveGround()) {
                this.jump(15);
            }
        }, 1000 / 60);

        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);

        setStoppableInterval(() => {
            if (this.energy == 0) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    this.width = 0;
                    this.height = 0;
                }, 750);
            }
        }, 50);
    }

}