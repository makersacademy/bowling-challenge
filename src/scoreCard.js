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
    this.removeStrikeBonuses()
    var i;
    for (i = 0; i < this.allFrames().length - 1; i++) {
        var currentFrame = this.allFrames()[i];
        if (currentFrame.IsAStrike()) {
            currentFrame._strikeBonusRollsScores.push(this.listEnsuingScores(i)[0], this.listEnsuingScores(i)[1]);
        }
    }
};

ScoreCard.prototype.removeStrikeBonuses = function() {
    var i;
    for (i = 0; i < this.allFrames().length - 1; i++) {
        var currentFrame = this.allFrames()[i];
        if (currentFrame.IsAStrike()) {
            currentFrame._strikeBonusRollsScores = [];
            console.log(currentFrame._strikeBonusRollsScores)
        }
    }
}

ScoreCard.prototype.calculateSpareBonuses = function() {
    var i;
    for (i = 0; i < this.allFrames().length - 1; i++) {
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

ScoreCard.prototype.IsGutterGame = function() {
    var i;
    for (i = 0; i < 10; i++) {
        var bothZero = [0, 0];
        if ((this.allFrames()[i].scores[0] != 0) || (this.allFrames()[i].scores[1] != 0)) {
            return false
        }
    };
    return true
};

ScoreCard.prototype.IsPerfectGame = function() {
    var i;
    for (i = 0; i < 9; i++) {
        var bothZero = [0, 0];
        if ((this.allFrames()[i].scores[0] != 10)) {
            return false
        }
    };
    if ((this.allFrames()[9].scores[0] != 10) && (this.allFrames()[9].scores[1] != 10) && (this.allFrames()[9].scores[2] != 10)) {
        return false
    }
    return true
};
