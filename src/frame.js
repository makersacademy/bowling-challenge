function Frame() {
  this._rolls = [];
  this._pinsRemaining = 10;
  this._pinScore = 0;
  this._bonus = 0;
  this._frameScore = 0;
  this._strike = false;
  this._spare = false;
  this._finalFrame = false;
  this._frameOver = false;
};

Frame.prototype.add = function(roll) {
  this._rolls.push(roll);
  this._pinScore += roll.score();
  this._pinsRemaining -= roll.score();
  this.updateStatus();
};

Frame.prototype.pinsRemaining = function() {
  return this._pinsRemaining;
};

Frame.prototype.pinScore = function() {
  return this._pinScore;
}

Frame.prototype.addPoints = function(points) {
  this._score += points;
  if ((points === 10) && (this._frameNumber !== 10)) {
    this._frameOver = true;
  } else if ((this._roll === 2) && (this._frameNumber !== 10)) {
    this._frameOver = true
  } else {
    this._roll += 1;
  }
};

// Frame.prototype.calculateBonus = function(previousFrame) {
//   if (previousFrame === null) {
//     null
//   }
//   else {
//     previousFrame._bonus += this._score;
//   }
// };

Frame.prototype.updateStatus = function() {
  if (roll.score() === 10) {
    this._stike = true;
    this.endFrame();
  } else if (this.pinScore() === 10) {
    this._spare = true;
    this.endFrame();
  } else if ((this._rolls.length === 2) && (this._finalFrame === false)) {
    this.endFrame();
  } else {
    null;
  };
};

Frame.prototype.endFrame = function() {
  this._frameOver = true;
};

Frame.prototype.frameScore = function() {
  return this._frameScore;
};

Frame.prototype.strikeBonus = function (firstRoll, secondRoll) {
  this._bonus = (firstRoll.score() + secondRoll.score());
};

Frame.prototype.spareBonus = function (firstRoll) {
  this._bonus = firstRoll.score();
}
