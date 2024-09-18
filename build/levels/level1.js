let level1;

function generateElements() {
    level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Endboss()
        ],
        [
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('./assets/img/5_background/layers/4_clouds/2.png', 500),
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 1000),
            new Cloud('./assets/img/5_background/layers/4_clouds/2.png', 1500),
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 2500),
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 3000),
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 3500),
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 4000),
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 4500),
            new Cloud('./assets/img/5_background/layers/4_clouds/1.png', 5000)
        ],
        [
            new BackgroundObject('./assets/img/5_background/layers/air.png', -719),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 0),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 719),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719 * 5),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 6),
            new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 7),
            new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719 * 7)
        ],
        [
            new Coins(1000, 200),
            new Coins(1050, 175),
            new Coins(1100, 150),
            new Coins(1150, 125),
            new Coins(1200, 150),
            new Coins(1250, 175),
            new Coins(1300, 200),

            new Coins(2000, 225),
            new Coins(2050, 250),
            new Coins(2100, 275),
            new Coins(2150, 300),
            new Coins(2200, 275),
            new Coins(2250, 250),
            new Coins(2300, 225)
        ],
        [
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles()
        ]
    );
}