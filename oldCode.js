BowlingScore.prototype._isStrikeOld = function(i) {
  return this.frameScores[i][0] === 10;
};

BowlingScore.prototype._isSpareOld = function(i) {
  return (this._isStrike(i) === false) && (this.frameScores[i][0] + this.frameScores[i][1] === 10);
};

BowlingScore.prototype._addFrameBonus_Old = function(i,bonusPool) {
  if (this._isStrikeOld(i)) {
    this.frameBonus.push(bonusPool[0] + bonusPool[1]);
  } else if (this._isSpareOld(i)) {
    this.frameBonus.push(bonusPool[0]);
  } else {
    this.frameBonus.push(0);
  };
};
