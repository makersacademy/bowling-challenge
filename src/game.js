function Game(frameKlass, gameLength, bonusKlass) {
  var DEFAULT_LENGTH = 10;
  this.gameLength = gameLength || DEFAULT_LENGTH;
  this.frameKlass = frameKlass || Frame;
  this.bonusKlass = bonusKlass || Bonus;

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

  if (this.currentFrame.isComplete) {
    this.currentFrameNum += 1;
    this._setCurrentFrame();
  }

  this.currentFrame.bowl(num);
  this.addToBonuses(num);
  this._setBonus();
  this.isGameFinished();
}

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

Game.prototype.isGameFinished = function() {
  if (this._isFinalFrame() && this.currentFrame.isComplete) {
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

Game.prototype._setBonus = function() {
  var bonusType
  if (this.currentFrame.standingPins > 0) {
    return "No bonus";
  } else if (this.currentFrame.length === 1) {
    bonusType = "strike";
  } else {
    bonusType = "spare";
  }
  this.currentFrame.triggerBonus(this.bonusKlass);
}

Game.prototype._isFinalFrame = function() {
  return this.currentFrameNum >= this.gameLength -1
}
