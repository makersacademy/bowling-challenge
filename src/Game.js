function Game(frame) {
  this.frameKlass = frame || Frame
  this.currentFrame = new this.frameKlass()
  this.frames = [];
  this.totScore = 0;
}

Game.prototype.play = function () {
  if (this.currentFrame.bothBallThrown()) {
    this.frames.push(this.currentFrame);
    this.currentFrame = new this.frameKlass()
  }
  var rollValue = this.currentFrame.rollBall()
  if (this.prevFrame()) {
    this.prevFrame().updateScore(this.currentFrame);
  }
  return rollValue;
};

Game.prototype.currentFrameNumber = function () {
  return this.frames.length+1;
};

Game.prototype.prevFrameNumber = function () {
  return this.frames.length;
};

Game.prototype.prevFrame = function () {
  return this.frames[this.frames.length-1]
};

Game.prototype.currentRoll = function () {
  return ((this.currentFrame.bothBallThrown()) ? 2 : 1)
};

Game.prototype.getTotScore = function () {
  var totScore = 0;
  for (var i = 0; i < this.frames.length; i++) {
    totScore += this.frames[i].getTempScore()
  }
  return (this.totScore = totScore + this.currentFrame.getTempScore());
};

Game.prototype.isOver = function () {
  return (this.frames.length === 9 && this.currentFrame.bothBallThrown())
};
