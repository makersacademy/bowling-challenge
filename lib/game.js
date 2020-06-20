class Game {
    constructor() {
        this.pins = 10
        this.frame = 1
    }
    roll = () => {
        return Math.floor(Math.random() * 11);
    }
}

module.exports = Game