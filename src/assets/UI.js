export default class UI {
    constructor(game){
        this.game = game;
    }

    draw(ctx) {
        ctx.textAlign = 'center';
        ctx.font = '20px bold Calibri';
        ctx.fillStyle = "#FFF"
        ctx.fillRect(355, 280, 90, 30);
        ctx.fillStyle = "#000"
        ctx.fillText(`X ${this.game.mouseX}`, this.game.gameWidth /2, this.game.gameHeight /2);
    }

    update(deltaTime) {

    }
}

