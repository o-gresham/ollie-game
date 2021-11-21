export default class UI {
    constructor(game){
        this.game = game;
    }

    draw(ctx) {
        ctx.textAlign = 'center';
        ctx.font = '20px bold Calibri';
        ctx.fillStyle = "#FFF";
        if (this.game.drawing) ctx.fillRect(this.game.mouseX- 10, this.game.mouseY - 10, 20, 20);
    }

    update(deltaTime) {

    }
}

