'use strict';

function Frame(firstRoll) {
  const MAX_PINS_PER_ROLL = 10;
  const STRIKE = 10;

  if (firstRoll > MAX_PINS_PER_ROLL) {
    throw ('Cannot roll: too many pins');
  };
 // const MAX_PINS_PER_FRAME = 10;
 // const SPARE = 10;
  this._complete = firstRoll === STRIKE;
  this._strike = firstRoll === STRIKE;
  this.firstRoll = firstRoll;
  this.secondRoll = 0;
  this.bonus = 0;
};

Frame.prototype = {
  
  getScore: function() {
    return this.firstRoll + this.secondRoll + this.bonus;
  },

  isComplete: function() {
    return this._complete;
  },

  isSpare: function() {
    return this.secondRoll > 0 && (this.firstRoll + this.secondRoll === 10);
  },

  roll: function(pins) {
    if (pins > 10 || (this.getScore() + pins) > 10) {
      throw ('Cannot roll: too many pins');
    }
    if (!this._complete) {
      this.secondRoll = pins;
      this._complete = true;
    } else {
      ('Cannot roll: frame already completed');
    }
  },

  isStrike: function() {
    return this._strike;
  },

  addBonus: function(bonusPoints) {
    if (this.bonus === 0) {
      this.bonus +=  bonusPoints;
    }
  },

};
