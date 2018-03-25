function Frame(scoreMultipliers, isFinalFrame) {
  this.scoreMultipliers = scoreMultipliers;
  this.rolls = [];
  this.score = 0;
  this.isFinalFrame = isFinalFrame;
}

Frame.prototype.roll = function(pinsKnocked) {
  this.rolls.push(pinsKnocked);
  this._updateScore(pinsKnocked);
  this._calculateScoreMultipliers();
};

Frame.prototype.isComplete = function() {
  if (this.isFinalFrame) {
    return this._finalFrameIsComplete();
  } else {
    return this._notFinalFrameIsComplete();
  }
};

Frame.prototype._updateScore = function(pinsKnocked) {
  let currentMultiplier = this.scoreMultipliers.shift();
  this.score += (pinsKnocked * currentMultiplier);
};

Frame.prototype._calculateScoreMultipliers = function() {
  let scoreMultipliers = this.scoreMultipliers;
  scoreMultipliers.push(1);
  if (this.isFinalFrame) { return; }
  if (this.rolls[0] === 10) {
    this.scoreMultipliers[1] += 1;
    this.scoreMultipliers[0] += 1;
  }
  if (this.rolls[0] + this.rolls[1] === 10) {
    this.scoreMultipliers[0] += 1;
  }
};

Frame.prototype._notFinalFrameIsComplete = function() {
  return this.rolls[0] === 10 || this.rolls.length > 1;
};

Frame.prototype._finalFrameIsComplete = function() {
  if (this.rolls.length === 1) {
    return false;
  } else if (this.rolls.length === 3) {
    return true;
  } else if (this.rolls[0] === 10 || this.rolls[0] + this.rolls[1] === 10) {
    return false;
  } else {
    return true;
  }
};
