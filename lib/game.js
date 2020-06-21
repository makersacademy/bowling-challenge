const Frame = require('./frame');

class Game {
    constructor() {
        this.pins = 10
        this.frames = []
    }
    roll = () => {
        const pinsKnockedDown = Math.floor(Math.random() * 11);
        var frame = new Frame([pinsKnockedDown]);
        this.frames.push(frame.bowls)
        return pinsKnockedDown
    }
}

module.exports = Game