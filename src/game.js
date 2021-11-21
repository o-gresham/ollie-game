import UI from './assets/UI';
import InputHandler from './input'

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.mouseX = 0;
        this.clearAll = false;
        this.drawing = false;
        this.UI = new UI(this);
        new InputHandler(this);
    }
    updateMouse(x, y) {
        this.mouseX = x
        this.mouseY = y
    }

    draw(ctx) {
        this.UI.draw(ctx);
        if (this.clearAll) {
            ctx.fillStyle = "#000"
            ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
            this.clearAll = false;
        }
    }

    clearScreen() {
        this.clearAll = true;
    }
}