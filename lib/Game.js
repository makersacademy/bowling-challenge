var Frame = require('../lib/Frame.js');

function Game() {
    this.frames = [];
    for (var i = 0; i < 10; i++) {
        this.frames.push(new Frame());
    }
    this.currentFrameIndex = 0;
}

Game.prototype.lastFrame = function () {
    return this.frames[this.frames.length - 1]
};

Game.prototype.calculateStrikeBonus = function (frameIndex) {
    var nextFrame = this.frames[frameIndex + 1];
    var frameAfterNextExists = frameIndex + 2 < this.frames.length;
    if (!frameAfterNextExists) {
        return nextFrame.totalScore();
    }
    var frameAfterNext = this.frames[frameIndex + 2];
    return nextFrame.totalScore() + frameAfterNext.firstBowl;
};

Game.prototype.calculateBonusForFrame = function (frameIndex) {
    var frame = this.frames[frameIndex];
    var hasANextFrame = frameIndex + 1 < this.frames.length;
    if (!hasANextFrame) {
        return 0;
    }
    var nextFrame = this.frames[frameIndex + 1];
    if (frame.isASpare()) {
        return nextFrame.firstBowl;
    }
    if (frame.isAStrike()) {
        return this.calculateStrikeBonus(frameIndex);
    }
    return 0;
};

Game.prototype.score = function () {
    var game = this;
    return this.frames.reduce(function (score, frame, i) {
        if (i >= 10) {
            return score;
        }
        var bonus = game.calculateBonusForFrame(i);
        return score + frame.totalScore() + bonus;
    }, 0);
};

Game.prototype.bowl = function (score) {
    var isBonusFrame = this.currentFrameIndex === this.frames.length &&
        (this.lastFrame().isAStrike() || this.lastFrame().isASpare());
    if (isBonusFrame) {
        this.frames.push(new Frame());
    }
    this.currentFrame().bowl(score);
    if (this.currentFrame().isComplete()) {
        this.currentFrameIndex++;
    }
};

Game.prototype.currentFrame = function () {
    return this.frames[this.currentFrameIndex];
};

module.exports = Game;

