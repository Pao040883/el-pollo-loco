// class Coins extends MovableObjects {
//     height = 120;
//     width = 120;
//     isCollected = false;
//     coin_sound = new Audio('../../assets/audio/coin.mp3');


//     IMAGES = [
//         '../../assets/img/8_coin/coin_1.png'
//     ];


//     constructor() {
//         super().loadImage('../../assets/img/8_coin/coin_1.png');
//         this.setPosition();
//         this.value = 10;
//     }

//     setPosition() {
//         this.x = 250 + Math.random() * 3500;
//         this.y = 140 + Math.random() * 120;
//     }

// }

class Coins extends MovableObjects {
    height = 120;
    width = 120;
    isCollected = false;
    coinSound = setStoppableSound('./assets/audio/coin.mp3'); // Nutzung der Sound-Klasse

    IMAGES = [
        '/assets/img/8_coin/coin_1.png'
    ];

    constructor() {
        super().loadImage('./assets/img/8_coin/coin_1.png', 0.8);
        this.setPosition();
        this.value = 10;
    }

    setPosition() {
        this.x = 250 + Math.random() * 3500;
        this.y = 140 + Math.random() * 120;
    }

    collect() {
        this.isCollected = true;
        this.coinSound.play(); // Sound abspielen, wenn die Münze eingesammelt wird
    }
}
