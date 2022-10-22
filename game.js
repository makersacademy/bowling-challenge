class Game {
    constructor() {
        this.frames = [];
    };

    add(frame) {
        this.frames.push(frame);
    };

    // total() {
    //     const calculate = (i) => {
    //         i += 1
    //         return
    //     }
    //     const totalGame = [...Array(10).keys().map(calculateFrame)]
    // }
    
}

module.exports = Game;