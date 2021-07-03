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
  this._currentFrame = 1;
};

Frame.prototype.next = function() {
  this._rolls = [];
  this._pinsRemaining = 10;
  this._pinScore = 0;
  this._bonus = 0;
  this._frameScore = 0;
  this._strike = false;
  this._spare = false;
  this._finalFrame = false;
  this._frameOver = false;
  this._currentFrame += 1;
}

Frame.prototype.add = function(rollscore) {
  this._rolls.push(rollscore);
  this._pinScore += rollscore;
  this._pinsRemaining -= rollscore;
  this.updateStatus(rollscore);
};

Frame.prototype.pinsRemaining = function() {
  return this._pinsRemaining;
};

Frame.prototype.pinScore = function() {
  return this._pinScore;
};

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

Frame.prototype.updateStatus = function(roll) {
  if (this._currentFrame === 10) {
    this._finalFrame = true;
  };
  if ((roll === 10) && (this._finalFrame === false)) {
    this._stike = true;
    this.endFrame();
  } else if (this.pinScore() === 10) {
    this._spare = true;
    this.endFrame();
  } else if ((this._rolls.length === 2) && (this._finalFrame === false)) {
    this.endFrame();
  } else if ((this._rolls.length === 3 ) && (this._finalFrame === true)) {
    this.endFrame();
  } else {
    null;
  };
};

Frame.prototype.currentFrame = function() {
  return this._currentFrame;
};

Frame.prototype.endFrame = function() {
  this._frameOver = true;
};

Frame.prototype.frameScore = function() {
  return this._frameScore;
};

Frame.prototype.strikeBonus = function(firstRoll, secondRoll) {
  this._bonus = (firstRoll + secondRoll);
};

Frame.prototype.spareBonus = function(firstRoll) {
  this._bonus = firstRoll;
};
