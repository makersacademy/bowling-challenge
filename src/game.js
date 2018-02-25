var Game = function() {
  this.allFrames =[];
  this.scoreCalculator = new ScoreCalculator();
  this.rollCount = 1;
  this.gameOver = false;
  this.bonusRoll = false;
};

Game.prototype.rollBall = function(rollScore) {
  if (this._isTenthFrame()) {
    this._tenthFrame(rollScore);
  } else if (this._isSecondRollOfFrame()) {
    this._addSecondRollOfFrame(rollScore);
  } else {
    this._addFirstRollOfFrame(rollScore);
  }
  this.rollCount += 1;
  this.scoreCalculator.calculateTotalScore(this.allFrames);
};

Game.prototype.readScore = function(frame, roll) {
  return this.allFrames[(frame - 1)][(roll - 1)];
};

Game.prototype.isStrike = function(rollScore) {
  return rollScore === 10;
};

Game.prototype._isSecondRollOfFrame = function() {
  return (this.rollCount % 2 === 0);
};

Game.prototype._isTenthFrame = function() {
  if (this.allFrames.length > 8) {
    return(this.allFrames[8].length === 2);
  }
  else {return false;}
};

Game.prototype._addFirstRollOfFrame = function(rollScore) {
  if (this.isStrike(rollScore)) {
    this.allFrames.push([rollScore, 0]);
    this.rollCount += 1;
  } else {
    this.allFrames.push([rollScore]);
  }
};

Game.prototype._addSecondRollOfFrame = function(rollScore) {
  this.allFrames[(this.allFrames.length)-1].push(rollScore);
};

Game.prototype._tenthFrame = function(rollScore) {
  if (this.bonusRoll) {
    this._addSecondRollOfFrame(rollScore);
    this.gameOver = true;
  }
  else if (this._isSecondRollOfFrame()) {
    this._addSecondRollOfFrame(rollScore);
    this._isGameOver();
  }
  else {
    this.allFrames.push([rollScore]);
  }
};

Game.prototype._isGameOver = function() {
  if ((this.scoreCalculator.frameScore(this.allFrames[9]) < 10)) {
    this.gameOver = true;
    //TODO - Work out how to end game here -> managed by interface change
  }
  else {this.bonusRoll = true;}
};
