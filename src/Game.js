function Game() {
  this.currentFrame = null;
  this.frames = [];
  this.totScore = 0;
  this.bonusPoints = 0;
}

// PUBLIC

Game.prototype.play = function (ball) {
  if (!this.currentFrame || this.currentFrame.isCompleted()) {
    this.currentFrame = new Frame();
  }
  this.currentFrame.rollBall(ball);
  console.log(this.frames.length)
  if (this.currentFrame.isCompleted()) {
    this.setBonusPoints();
    this.setTotScore();
    this.frames.push(this.currentFrame);
    return lastOf(this.frames).getScore();
  }
  return this.currentFrame.getFirstRoll();
};

Game.prototype.currentFrameNumber = function () {
  if (this.currentFrame && this.frames.length > 0) {
    return this.frames.length
  } else if (this.frames.length === 0) {
    return 1
  }
};

Game.prototype.setTotScore = function () {
  return (this.totScore += this.getBonusPoints());
};

Game.prototype.getTotScore = function () {
  return this.totScore;
};

Game.prototype.setBonusPoints = function () {
  if (this.prevFrame() && this.prevFrame().isSpare()) {
    this.bonusPoints = this.currentFrame.firstRoll;
  } else if (this.prevFrame() && this.prevFrame().isStrike()) {
    this.bonusPoints = 2*this.currentFrame.getScore();
  } else {
    this.bonusPoints = 0;
  }
};

Game.prototype.getBonusPoints = function () {
  return this.bonusPoints;
};

Game.prototype.isOver = function () {
  return (((this.frames.length === 10) && lastOf(this.frames).isCompleted())?true:false);
}

// HELPERS

Game.prototype.prevFrame = function () {
  return this.frames[this.frames.indexOf(this.currentFrame)-1]
};

function lastOf(array) {
  return array[array.length-1]
}
