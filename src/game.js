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
    updateMouse(x, y) {
        this.mouseX = x
        this.mouseY = y
    }

    draw(ctx) {
        this.UI.draw(ctx);
    }
}