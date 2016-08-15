'use strict';

  function Bowling() {
    this._rolls = [];
    this._current = 0;
  };

  Bowling.prototype.roll = function(pins) {
    if (typeof(pins) !== 'number') {
      throw new Error('Pins must be an Integer');
    };
    this._rolls[this._current++] = pins;
  };

  Bowling.prototype.score = function() {
    var score = 0, i;
    var hasBonusRoll = this._hasBonusRoll();
    var scoringRolls = (hasBonusRoll) ? hasBonusRoll + 1 : this._rolls.length;

    for (i = 0; i < scoringRolls; i++) {
      if (this._isStrike(i)) {
        score += 10 + this._rolls[i + 1] + this._rolls[i + 2];
      } else if (this._isSpare(i)) {
        score += 10 + this._rolls[i + 2];
        i++;
      } else {
        score += this._rolls[i];
      };
    };
    return score;
  };

  Bowling.prototype._isSpare = function(roll) {
    return this._rolls[roll] + this._rolls[roll + 1] === 10;
  };

  Bowling.prototype._isStrike = function(roll) {
    return this._rolls[roll] === 10;
  };

  Bowling.prototype._hasBonusRoll = function() {
    var tenthFrame = this._rolls.length - 3, hasBonus;
    hasBonus = (this._isStrike(tenthFrame) || this._isSpare(tenthFrame));
    return (hasBonus) ? tenthFrame : null;
  };
