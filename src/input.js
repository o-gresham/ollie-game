export default class InputHandler {
    constructor(game) {
        this.game = game
        document.addEventListener('mousemove', (e) => {
            this.game.updateMouse(e.clientX, e.clientY);
        });

        document.addEventListener('keydown', event => {
            switch(event.key) {
                case ' ':
                    game.clearScreen();
                    break;
            }
        });
        document.addEventListener('mousedown', function() {
            game.drawing = true;
        });
        document.addEventListener('mouseup', function() {
            game.drawing = false;
        });
    }
}