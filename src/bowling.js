'use strict'

var Score = function(rolls) {
    this.frames = [];
    this._rolls = rolls;
};

Score.prototype.total = function() {
    return this._last(this.frames).score;
}

Score.prototype._plays = function(rolls) {
    if (this._isLastFrame() === true) {
        return this._frame(rolls);
    }
    if (this._isStrike()) {
        return this._strike();
    }
    if (this._isSpare()) {
        return this._spare();
    }
    return this._noBonus();
};

Score.prototype._strike = function() {
    this._frame(this._firstRolls(3));
    this._removeRolls(1);
    this._plays(this._rolls);
};

Score.prototype._spare = function() {
    this._frame(this._firstRolls(3));
    this._removeRolls(2);
    this._plays(this._rolls);
};

Score.prototype._noBonus = function() {
    this._frame(this._firstRolls(2));
    this._removeRolls(2);
    this._plays(this._rolls);
};

Score.prototype._isStrike = function() {
    return this._rolls[0] === 10;
};

Score.prototype._isSpare = function() {
    return this._add(this._firstRolls(2)) === 10;
};

Score.prototype._isLastFrame = function() {
    if (this.frames.length > 0) {
        if (this._last(this.frames).number >= 9) {
            return true;
        }
        return false;
    }
    return false;
}

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
    return this._last(this.frames).score + this._add(rolls);
};

Score.prototype._frameNumber = function() {
   if (this.frames.length === 0) {
        return 1;
    }
    return this._last(this.frames).number + 1;
};

//Helpers

Score.prototype._firstRolls = function(n) {
    return this._rolls.slice(0, n);
};

Score.prototype._add = function(array) {
    return array.reduce((a, b) => a + b, 0);
};

Score.prototype._last = function(array) {
    return array[array.length - 1];
};

Score.prototype._removeRolls = function(n) {
    this._rolls.splice(0, n);
}
