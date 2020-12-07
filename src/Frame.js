'use strict';

function Frame() {
  this.strike = false;
  this.spare = false;
  this.frameScore = {roll1: 0, roll2: 0};
  this.skipSecondRoll = false;
}

Frame.prototype = {
  _isStrike: function(pins) {
    if (pins === 10) {
      this._implementStrike();
      return true;
    }
    return false;
  },

  _isSpare: function(pins) {
    if (this.frameScore['roll1'] + pins === 10) {
      this._implementSpare(pins);
      return true;
    }
    return false;
  },

  firstRoll: function(pins) {
    if (this._isStrike(pins)) {
      this.skipSecondRoll = true;
      return;
    }
    this._recordScore(pins, 'roll1');
  },

  secondRoll: function(pins) {
    if (this.skipSecondRoll) {
      return;
    }
    if (this._isSpare(pins)) {
      return;
    }
    this._recordScore(pins, 'roll2');
  },

  executeRolls: function(firstRollPins, secondRollPins) {
    this.firstRoll(firstRollPins);
    this.secondRoll(secondRollPins);
  },

  sumScores: function() {
    return this.frameScore['roll1'] + this.frameScore['roll2'];
  },

  _recordScore: function(pins, roll) {
    this.frameScore[roll] += pins;
  },

  _implementStrike: function() {
    this.strike = true;
    this._recordScore(10, 'roll1');
  },

  _implementSpare: function(pins) {
    this.spare = true;
    this._recordScore(pins, 'roll2');
  }};
