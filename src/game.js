function Game(frameKlass, gameLength) {
  var DEFAULT_LENGTH = 10;
  this.gameLength = gameLength || DEFAULT_LENGTH;
  this.frameKlass = frameKlass || Frame;

  this.frames = [];
  this.currentFrame = 0;
  this.currentFrameNum = 0;
  this.isFinished = false;
  this.scoreCard = 0;

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
  this.addToBonuses(num);
  this.currentFrame.bowl(num);
  this._completeSelf();
};

Game.prototype.calcTotalScore = function() {
  var runningTotal = 0
  this.frames.forEach(function(frame) {
    if(frame.isFinalised) {
      runningTotal += frame.getScore();
    }
  });
  this.totalScore = runningTotal;
  return this.totalScore
}

Game.prototype.getCurrentFrame = function() {
  return this.currentFrame
}

Game.prototype.addToBonuses = function(num){
  this.frames.forEach(function(frame) {
    if(frame.bonus) {
      frame.addToBonus(num);
    }
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

Game.prototype._isFinalFrame = function() {
  return (this.currentFrameNum >= this.gameLength -1);
}
