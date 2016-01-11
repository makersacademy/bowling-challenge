function Game() {
  this.currentFrame = null;
  this.frames = []
  this.totScore = 0;
}

Game.prototype.play = function (ball) {
  if (!this.currentFrame || this.currentFrame.isCompleted()) {
    this.currentFrame = new Frame(ball);
    if (ball === 10) {
      this.frames.push(this.currentFrame);
      return "Strike! / Tot score "+this.updateTotScore();
    } else {
      return ball+" hit / Tot score "+this.updateTotScore();
    }
  } else {
    this.currentFrame.setSecondRoll(ball);
    this.frames.push(this.currentFrame);
    return ball+" hit / Tot score "+this.updateTotScore();
  }
};

Game.prototype.getTotScore = function () {
  return this.totScore;
};

Game.prototype.updateTotScore = function () {
  if (this.currentFrame.readyToCalculateScore()) {
    var sum;
    if (this.prevFrame() && this.prevFrame()._isSpare()) {
      sum = this.prevFrame().getScore() + this.currentFrame.getScore() + this.currentFrame.firstRoll;
      this.totScore += sum
    } else if (this.prevFrame() && this.prevFrame()._isStrike()) {
      sum = this.prevFrame().getScore() + 2*this.currentFrame.getScore();
      this.totScore += sum
    } else {
      this.totScore += this.currentFrame.getScore();
    }
  }
  return this.totScore
};

Game.prototype.prevFrame = function () {
  return this.frames[this.frames.indexOf(this.currentFrame)-1]
};

Game.prototype.isOver = function () {
  if ((this.frames.length === 10) && lastOf(this.frames).isCompleted()) {
    return true
  }
  return false
}

function lastOf(array) {
  return array[array.length-1]
}
