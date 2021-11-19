export default class InputHandler {
    constructor(game) {
        this.game = game
        document.addEventListener('mousemove', (e) => {
            this.game.updateMouse(e.screenX);
        });
    }
}