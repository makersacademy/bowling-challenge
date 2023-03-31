class Game {
    constructor() {
        this.frames = [];
        this.scores = [];
    }
    add(frame) {
        this.frames.push(frame);
    }
    scores(score1, score2) {
        this.scores.push({frame: this.frames.length, score1: score1, score2: score2});
    }
    

};

module.exports = Game;