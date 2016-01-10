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
      return "Strike! / Tot score "+this.temporaryTotScore();
    } else {
      return ball+" hit / Tot score "+this.temporaryTotScore();
    }
  } else {
    this.currentFrame.setSecondRoll(ball);
    this.frames.push(this.currentFrame);
    return ball+" hit / Tot score "+this.temporaryTotScore();
  }
};

Game.prototype.getTotScore = function () {
  return this.totScore;
};

Game.prototype.temporaryTotScore = function () {
  if (this.currentFrame.readyToCalculateScore()) {
    return this.updateTotScore();
  } else {
    return this.totScore+" (pending)"
  }
};

Game.prototype.updateTotScore = function () {
  var sum;
  if (this.prevFrame() && (this.prevFrame().pendingBonusPoints === 'spare')) {
    sum = this.prevFrame().getScore() + this.currentFrame.getScore() + this.currentFrame.firstRoll;
    this.totScore += sum
  } else if (this.prevFrame() && (this.prevFrame().pendingBonusPoints === 'strike')) {
    sum = this.prevFrame().getScore() + 2*this.currentFrame.getScore();
    this.totScore += sum
  } else {
    this.totScore += this.currentFrame.getScore();
  }
  return this.totScore;
};

Game.prototype.prevFrame = function () {
  return this.frames[this.frames.indexOf(this.currentFrame)-1]
};
