class Game {
    constructor() {
        this.pins = 10
        this.frames = []
    }
    roll = () => {
        var pinsKnockedDown = Math.floor(Math.random() * 11);
        this.pins -= pinsKnockedDown;
        return pinsKnockedDown
    }
}

module.exports = Game