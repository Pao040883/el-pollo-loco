class Coins extends MovableObjects {
    height = 120;
    width = 120;
    isCollected = false;

    IMAGES = [
        '../../assets/img/8_coin/coin_1.png'
    ];


    constructor() {
        super().loadImage('../../assets/img/8_coin/coin_1.png');
        this.setPosition();
        this.value = 10;
    }

    setPosition() {
        this.x = 250 + Math.random() * 3500;
        this.y = 140 + Math.random() * 120;
    }

}
