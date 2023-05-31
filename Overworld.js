class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');   
    }

    init() {

        //  Test Map
        const testMap = new Image();
        testMap.onload = () => {
            this.ctx.drawImage(testMap, 0, 0);
        };
        testMap.src = './images/maps/DemoLower.png';

        // Test Hero
        let x = 1;
        let y = 4;
        const hero = new Image();
        hero.onload = () => {
            // this.ctx.drawImage(hero, 0, 0);
            this.ctx.drawImage(
                hero,
                0, // left cut
                0, // top cut
                32, // width cut
                32, // height cut
                x * 16 - 8, // position. Default moves by pixel value. We multiple by grid size to move by grid.
                y * 16 - 18, // position. We substract for nudging the character to where we want him.
                32, // size of character on screen
                32  // size of character on screen
            )
        };
        hero.src= '/images/characters/people/hero.png';
    }
}
