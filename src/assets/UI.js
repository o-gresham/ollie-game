export default class UI {
    constructor(game){
        this.game = game;
    }

    draw(ctx) {
        ctx.textAlign = 'center';
        ctx.font = '20px bold Calibri';
        ctx.fillStyle = "#FFF";
        ctx.fillRect(20, 20);
    }

    update(deltaTime) {

    }
}

