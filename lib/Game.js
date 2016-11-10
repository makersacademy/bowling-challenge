var Frame = require('../lib/Frame.js');
var BonusBowl = require('../lib/BonusBowl.js');

function Game() {
    this.frames = [];
    for (var i = 0; i < 10; i++) {
        this.frames.push(new Frame());
    }
    this.currentFrameIndex = 0;
}

Game.prototype.bowl = function (score) {
    if (this.currentFrameIndex >= this.frames.length) {
        throw new Error("Game over");
    }

    this.currentFrame().bowl(score);

    if (this.currentFrame().isComplete()) {
        var isLastFrameOfStandardGame = this.currentFrameIndex === 9;
        if (isLastFrameOfStandardGame) {
            if (this.currentFrame().isASpare()) {
                this.frames.push(new BonusBowl());
            } else if (this.currentFrame().isAStrike()) {
                this.frames.push(new BonusBowl(), new BonusBowl());
            }
        }
        this.currentFrameIndex++;
    }
};

Game.prototype.currentFrame = function () {
    return this.frames[this.currentFrameIndex];
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

Game.prototype.calculateBonusForFrame = function (frameIndex) {
    var frame = this.frames[frameIndex];
    var bonusBowlsToAdd = 0;
    if (frame.isASpare()) {
        bonusBowlsToAdd = 1;
    } else if (frame.isAStrike()) {
        bonusBowlsToAdd = 2;
    }

    var bonusTotal = 0;
    var bonusFrameIndex = frameIndex + 1;

    while (bonusBowlsToAdd > 0 && bonusFrameIndex < this.frames.length) {
        var bonusFrame = this.frames[bonusFrameIndex];

        if (bonusFrame.bowlCount === 1 || (bonusFrame.bowlCount === 2 && bonusBowlsToAdd == 1)) {
            bonusBowlsToAdd--;
            bonusTotal += bonusFrame.firstBowl;
        } else if (bonusFrame.bowlCount === 2 && bonusBowlsToAdd == 2) {
            bonusBowlsToAdd -= 2;
            bonusTotal += bonusFrame.totalScore();
        }
        bonusFrameIndex++;
    }
    return bonusTotal;
};

module.exports = Game;

