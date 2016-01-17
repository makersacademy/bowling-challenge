function Game(frameKlass, gameLength) {
  var DEFAULT_LENGTH = 10;
  this.gameLength = gameLength || DEFAULT_LENGTH;
  this.frameKlass = frameKlass || Frame;
  
  this.frames = [];
  this.totalScore = null;
  this.currentFrame = 0;
  this.currentFrameNum = 0;
  this.isFinished = false;

  this._setGame();
}

Game.prototype.bowl = function(num) {
  if (this.isFinished === true) {
    throw new Error("You already finished this game");
  }

  if(this._isFinalFrame() && this.currentFrame.isComplete) {
    this.addToBonuses(num);
    this._completeSelf();
  } else {
    this.regularBowl(num);
  }
}

Game.prototype.regularBowl = function (num) {
  if (this.currentFrame.isComplete) {
    this._changeFrame();
  }

  this.currentFrame.bowl(num);
  this.addToBonuses(num);
  this._setBonus();
  this._completeSelf();
};

Game.prototype.calcTotalScore = function() {
  for (var i = 0; i < this.frames.length; i++) {
      this.totalScore += this.frames[i].getScore();
  }
  return this.totalScore;
}

Game.prototype.getCurrentFrame = function() {
  return this.currentFrame
}

Game.prototype.addToBonuses = function(num){
  this.frames.forEach(function(frame) {
    frame.bonus.addPoints(num);
  });
}

Game.prototype._completeSelf = function() {
  if (this._isFinalFrame() && this.currentFrame.isFinalised) {
    this.isFinished = true;
    return this.isFinished;
  }
}

Game.prototype._setGame = function() {
  for(var i=0; i < this.gameLength; i++) {
    this.frames.push(new this.frameKlass());
  }
  this._setCurrentFrame();
}

Game.prototype._setCurrentFrame = function() {
  this.currentFrame = this.frames[this.currentFrameNum];
}

Game.prototype._changeFrame = function() {
  this.currentFrameNum += 1;
  this._setCurrentFrame();
}

Game.prototype._setBonus = function() {
  var bonusType
  if (this.currentFrame.standingPins > 0) {
    bonusType = "none";
  } else if (this.currentFrame.scoreCard.length === 1) {
    bonusType = "strike";
  } else {
    bonusType = "spare";
  }
  this.currentFrame.setBonus(bonusType);
}

Game.prototype._isFinalFrame = function() {
  return (this.currentFrameNum >= this.gameLength -1);
}
