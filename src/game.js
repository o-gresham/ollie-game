import UI from './assets/UI';
import InputHandler from './input'

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.mouseX = 0;
        this.UI = new UI(this);
        new InputHandler(this);
    }
    updateMouse(x) {
        this.mouseX = x
    }

    draw(ctx) {
        this.UI.draw(ctx);
    }
}