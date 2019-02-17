'use strict';

function ScoreCard(constructorFunction = Game) {
    this._game = new constructorFunction();
}

ScoreCard.prototype.sum = function(array) {
    if (typeof array == 'number') {
        return array;
    }
    var accumulator = 0;
    var i;
    for (i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
};

ScoreCard.prototype.total = function() {
    this.calculateStrikeBonuses();
    this.calculateSpareBonuses();
    var accumulator = 0;
    var i;
    for (i = 0; i < 10; i++) {
        accumulator += this.sum(this.allFrames()[i].scores);
        accumulator += this.sum(this.allFrames()[i].sumStrikeBonusRollsScores());
        accumulator += this.sum(this.allFrames()[i]._spareBonusRollsScore);
    }
    return accumulator;
};

ScoreCard.prototype.allFrames = function() {
    return this._game.frames;
};

ScoreCard.prototype.calculateStrikeBonuses = function() {
    var i;
    for (i = 0; i < this.allFrames().length; i++) {
        var currentFrame = this.allFrames()[i];
        if (currentFrame.IsAStrike()) {
            currentFrame._strikeBonusRollsScores.push(this.listEnsuingScores(i)[0], this.listEnsuingScores(i)[1]);
        }
    }
};

ScoreCard.prototype.calculateSpareBonuses = function() {
    var i;
    for (i = 0; i < this.allFrames().length; i++) {
        var currentFrame = this.allFrames()[i];
        if (currentFrame.IsASpare()) {
            currentFrame._spareBonusRollsScore = this.listEnsuingScores(i)[0];
        }
    }
};

ScoreCard.prototype.listEnsuingScores = function(frameIndex) {
    var scoreList = [];
    var i;
    for (i = frameIndex + 1; i < frameIndex + 3; i++) {
        if (typeof this.allFrames()[i] != 'undefined') {
            this.pushAllElements(scoreList, this.allFrames()[i].scores);
        }
    }
    return scoreList;
};


ScoreCard.prototype.pushAllElements = function(array1, array2) {
    var i;
    for (i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
};
