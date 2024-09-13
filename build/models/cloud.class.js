class Cloud extends MovableObjects {
    y = 20;
    height = 250;
    width = 500;

    constructor(imagPath, x) {
        super().loadImage(imagPath);

        this.x = x + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60)
    }

}