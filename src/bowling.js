'use strict'

var Score = function(rolls) {
    this.frames = [];
    this._rolls = rolls;
};

Score.prototype._isStrike = function() {
    return this._rolls[0] === 10;
};

Score.prototype._isSpare = function() {
    return this._add(this._firstRolls(2)) === 10;
};

Score.prototype._frame = function(rolls) {
    this.frames.push(this._createFrame(rolls));
};

Score.prototype._createFrame = function(rolls) {
    return new Frame(rolls, this._frameScore(rolls), this._frameNumber());
};

Score.prototype._frameScore = function(rolls) {
    if (this.frames.length === 0) {
        return this._add(rolls);
    }
    return this.frames[this.frames.length - 1].score() + this._add(rolls);
};

Score.prototype._frameNumber = function() {
   if (this.frames.length == 0) {
        return 1;
    }
    return this._frames[this.frames.length - 1].number;
};

//Helpers

Score.prototype._firstRolls = function(n) {
    return this._rolls.slice(0, n);
};

Score.prototype._add = function(array) {
    return array.reduce((a, b) => a + b, 0);
};
