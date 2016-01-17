function Game() {
  this.currentFrame = new Frame();
  this.frames = [];
  this.totScore = 0;
}

Game.prototype.play = function () {
  if (this.currentFrame.isCompleted()) {
    this.frames.push(this.currentFrame);
    this.currentFrame = new Frame()
  }
  var rollValue = this.currentFrame.rollBall()
  if (this.prevFrame()) {
    this.prevFrame().updateScore(this.currentFrame);
    this._setTotScore();
  }
  console.log("Score forframe n"+this.currentFrameNumber()+""+this.currentFrame.getScore())
  return rollValue;
};

Game.prototype.currentFrameNumber = function () {
  return this.frames.length+1;
};

Game.prototype.prevFrameNumber = function () {
  return this.frames.length;
};

Game.prototype.currentRoll = function () {
  return ((this.currentFrame.isCompleted()) ? 2 : 1)
};

Game.prototype.getTotScore = function () {
  return this.totScore;
};

Game.prototype.isOver = function (first_argument) {
  return (this.frames.length === 9 && this.currentFrame.isCompleted())
};

Game.prototype.prevFrame = function () {
  return lastOf(this.frames)
};

Game.prototype._setTotScore = function (first_argument) {
  this.totScore = 0;
  for (var i = 0; i < this.frames.length; i++) {
    this.totScore += this.frames[i].getScore()
  }
  return this.totScore += this.currentFrame.getScore();
};

// HELPERS

function lastOf(array) {
  return array[array.length-1]
}
