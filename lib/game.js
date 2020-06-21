const Frame = require('./frame');

class Game {
    constructor() {
        this.pins = 10
        this.frames = []
        this.frameNth = 1
        this.pinsKnockedDown = 0
        this.pinsKnockedDown2 = 0
    }
    roll = () => {
        for (let i = 0; i < 10; i++) {
            this.pinsKnockedDown = Math.floor(Math.random() * 11);
            this.pinsKnockedDown2 = (Math.floor(Math.random() * ((this.pins - this.pinsKnockedDown) + 1)));
            if (this.pinsKnockedDown == 10) {
                var _frame = new Frame([this.pinsKnockedDown]);
                this.frames.push(_frame.bowls)
            }

            else {
                var _frame = new Frame([this.pinsKnockedDown, this.pinsKnockedDown2]);
                this.frames.push(_frame.bowls)
            }
        }

    }
}

var game = new Game();
game.roll();
console.log(game.frames)

module.exports = Game