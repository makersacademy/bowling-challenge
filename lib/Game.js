var Frame = require('../lib/Frame.js');

function Game() {
    this.frames = [];
}

Game.prototype.start = function() {
    for (var i = 0; i < 10; i++) {
        this.frames.push(new Frame());
    }
    this.bowlCount = 0;
};

Game.prototype.score = function() {
    var score = 0;
    this.frames.forEach(function(frame) {
        score += frame.totalScore();
    });
    return score;
};

Game.prototype.bowl = function(score) {
    this.frames[Math.floor(this.bowlCount/2)].bowl(score);
    this.bowlCount++
    
};

module.exports = Game;

// 