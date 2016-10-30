var Frame = require('../lib/Frame.js');

function Game() {
    this.frames = [];
}

Game.prototype.start = function() {
    for (var i = 0; i < 10; i++) {
        this.frames.push(new Frame());
    }
};

Game.prototype.score = function() {
    return this.frames[0].totalScore();
};

Game.prototype.bowl = function(score) {
    this.frames[0].bowl(score);
};

module.exports = Game;