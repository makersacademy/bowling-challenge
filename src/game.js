function Game(frameKlass, gameLength) {
  var DEFAULT_LENGTH = 10;
  var DEFAULT_FRAME_KLASS = Frame;

  this.gameLength = gameLength || DEFAULT_LENGTH;
  this.frameKlass = frameKlass || DEFAULT_FRAME_KLASS;

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
    this.isGameFinished()
}

Game.prototype.getTotalScore = function() {
  for (var i = 0; i < this.frames.length; i++) {
      this.totalScore += this.frames[i].getScore();
  }
  return this.totalScore;
}

Game.prototype.getCurrentFrame = function() {
  return this.currentFrame
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

Game.prototype._isFinalFrame = function() {
  return this.currentFrameNum >= this.gameLength -1
}
