function Frame(firstRoll,secondRoll) {
  'use strict';
  this._rolls = [firstRoll, secondRoll];
  this._score = this.calculateScore();
  this._type = this.calculateType();
  this._doubleStrike = false;
}
  Frame.prototype.getRoll = function(index) {
    return index === "first" ? this._rolls[0] : this._rolls[1];
  };

  Frame.prototype.getScore = function() {
    return this._score;
  };

  Frame.prototype.setScore = function(value) {
    this._score = value;
  }

  Frame.prototype.getType = function() {
    return this._type;
  };

  Frame.prototype.updateType = function(value) {
    this._type = value;
  }

  Frame.prototype.calculateType = function() {
    if (this._rolls[0] === 10) {
      this._type = 'STRIKE';
      this._rolls[1] = "-";
    } else if (this._score === 10) {
      this._type = 'SPARE';
    } else {
      this._type = 'regular';
    }
    return this._type;
  }

  Frame.prototype.getDoubleStrike = function() {
    return this._doubleStrike;
  }

  Frame.prototype.updateDoubleStrike = function() {
    this._doubleStrike = true;
  }

  Frame.prototype.calculateScore = function() {
    var result;
    if (this._rolls[0] === 10) {
      result = 10;
    } else {
      result = this._rolls[0] + this._rolls[1];
    }
    return result;
  }
