var Game = function() {
  this.allFrames =[];
  this.scoreCalculator = new ScoreCalculator();
  this.rollCount = 1;
  this.gameOver = false;
  this.bonusRoll = false;
  this.legalScores = [0,1,2,3,4,5,6,7,8,9,10];
};

Game.prototype.rollBall = function(rollScore) {
  this.rollCheck(rollScore);
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

Game.prototype.rollCheck = function(rollScore) {
  if (this.gameOver) throw 'Game is over!';
  else if (this._isNotLegalInput(rollScore)) throw 'Roll value is not legal, input a value from 1 to 10';
  else if (this._isSecondRollOfFrame() && !this._isTenthFrame()) {
    var currentFrame = (this.allFrames[(this.allFrames.length)-1]);
    var firstRollCurrentFrame = this.scoreCalculator.firstRollScore(currentFrame);
    if ((firstRollCurrentFrame + rollScore) > 10) throw 'Roll count over the two roles in this frame is too high, input a legal value';
  }
};

Game.prototype._isNotLegalInput = function(rollScore) {
  return ($.inArray(rollScore, this.legalScores) === -1);
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
  }
  else {this.bonusRoll = true;}
};
