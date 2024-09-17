class StatusBar extends DrawableObject {
    constructor(imagePaths, x, y, width = 200, height = 60, initialPercentage = 100) {
        super();
        this.IMAGES = imagePaths;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.loadImages(this.IMAGES);
        this.setPercentage(initialPercentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}

// Nutzung für die verschiedenen Statusbars
const healthBarImages = [
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
    './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
];

const bottleBarImages = [
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
    './assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
];

const coinBarImages = [
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
    './assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
];

const endbossBarImages = [
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
    './assets/img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
];