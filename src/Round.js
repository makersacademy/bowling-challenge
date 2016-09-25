// responsible for tracking the frame

'use-strict';

function Round() {
  this._pinsLeft = 10;
  this._rolls = [];
  this._rawScore = 0;
  this._spare = false;
  this._strike = false;
  this._complete = false;
}

Round.prototype = {

  showPinsLeft: function() {
    return this._pinsLeft;
  },

  showRolls: function() {
    return this._rolls;
  },

  showSpare: function() {
    return this._spare;
  },

  showStrike: function() {
    return this._strike;
  },

  showRawScore: function() {
    return this._rawScore;
  },

  showNumRolls: function() {
    return this._rolls.length;
  },

  firstRollPinsHit: function() {
    return this._rolls[0].showPinsHit();
  },

  secondRollPinsHit: function() {
    if (this.showNumRolls() === 2) { return this._rolls[1].showPinsHit()}
  },

  isSpare: function () {
    if ((this.showStrike() === false) && (this.firstRollPinsHit() + this.secondRollPinsHit() === 10)) {
      this._spare = true;
    }
  },

  isStrike: function () {
    if ((this.showNumRolls() === 1) && (this.firstRollPinsHit() === 10)) {
      this._strike = true;
    }
  },

  roll: function (roll) {
    var newRoll = typeof roll !== 'undefined' ? roll : new Roll(this._pinsLeft);
    this._rolls.push(newRoll);
    this._pinsLeft -= newRoll.showPinsHit();
    this._rawScore += newRoll.showPinsHit();
    this.isStrike();
    this.isSpare();
  }

}
