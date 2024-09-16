// class Bottles extends MovableObjects {
//     height = 100;
//     width = 70;
//     isCollected = false;
//     bottle_sound = new Audio('../../assets/audio/bottle.mp3');

//     IMAGES = [
//         '../../assets/img/6_salsa_bottle/salsa_bottle.png'
//     ];


//     constructor() {
//         super().loadImage('../../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
//         this.setPosition();
//         this.value = 10;
//     }

//     setPosition() {
//         this.x = 750 + Math.random() * 3500;
//         this.y = 330;
//     }

// }

class Bottles extends MovableObjects {
    height = 100;
    width = 70;
    isCollected = false;
    bottleSound = setStoppableSound('../../assets/audio/bottle.mp3');

    IMAGES = [
        '../../assets/img/6_salsa_bottle/salsa_bottle.png'
    ];

    constructor() {
        super().loadImage('../../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.setPosition();
        this.value = 10;
    }

    setPosition() {
        this.x = 750 + Math.random() * 3500;
        this.y = 330;
    }

    collect() {
        this.isCollected = true;
        this.bottleSound.play(); // Sound abspielen, wenn die Flasche eingesammelt wird
    }
}
