var Frame = require('../lib/Frame.js');

function Game() {
    this.frames = [];
}

Game.prototype.start = function () {
    for (var i = 0; i < 10; i++) {
        this.frames.push(new Frame());
    }
    this.currentFrame = 0;
};

Game.prototype.lastFrame = function () {
    this.frames[this.frames.length - 1]
}

Game.prototype.score = function () {
    var score = 0;
    this.frames.forEach(function (frame, i, allFrames) {
        var bonus = 0;
        if (frame.isASpare() && i + 1 < allFrames.length) {
            bonus = allFrames[i + 1].firstBowl;
        }
        if (frame.isAStrike() && i + 1 < allFrames.length) {
            if (allFrames[i + 1].isAStrike() && i + 2 < allFrames.length) {
                bonus = allFrames[i + 1].totalScore() + allFrames[i + 2].firstBowl;
            } else {
                bonus = allFrames[i + 1].totalScore();
            }
        }
        score += (frame.totalScore() + bonus);
    });
    return score;
};

Game.prototype.bowl = function (score) {
    this.frames[this.currentFrame].bowl(score);
    if (this.frames[this.currentFrame].isComplete()) {
        this.currentFrame++;
    }
};

module.exports = Game;

