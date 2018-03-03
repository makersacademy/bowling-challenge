function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1;
  this.addFrame();
  this.MAX_FRAMES = 10;
}

Game.prototype.bowl = function (pins) {
  this.currentFrame.bowl(pins);
  if (this.frameIndex < this.MAX_FRAMES) {
    if (this.currentFrame.isStrike() || this.currentFrame.bowlIndex > 2) {
      this.nextFrame();
    }
  } else {
    this.currentFrame.finalFrame = true;
  }
};

Game.prototype.totalScore = function () {
  let score = 0;

  if (this.currentFrame.finalFrame) {
    for (let index = 0; index < this.frameIndex; index++) { score += this.bowlScore(index); }
  } else {
    for (let index = 0; index < this.frameIndex - 1; index++) { score += this.bowlScore(index); }
  }
  return score;
};

Game.prototype.addFrame = function () {
  this.frames.push(this.currentFrame);
};

Game.prototype.nextFrame = function () {
  this.currentFrame = new Frame();
  this.addFrame();
  this.frameIndex++;
};

Game.prototype.bowlScore = function (index) {
  let score = 0;

  if (this.frames[index].isStrike()) {
    if (isNaN(this._strikeScore(index))) {
      score += 0;
    } else {
      score += this.currentFrame.MAX_PINS + this._strikeScore(index);
    }
  } else if (this.frames[index].isSpare()) {
    if (isNaN(this._spareScore(index))) {
      score += 0;
    } else {
      score += this.currentFrame.MAX_PINS + this._spareScore(index);
    }
  } else if (this.frames[index].finalFrame) {
    score += this.frames[index].finalFrameScore();
  } else {
    score += this.frames[index].FrameScore();
  }
  return score;
};

Game.prototype._strikeScore = function (index) {
  if (index < this.frameIndex - 2) {
    if (this.frames[index + 1].isStrike()) {
      return this._targetBowl(index, 1, 0) + this._targetBowl(index, 2, 0);
    }
    return this._targetBowl(index, 1, 0) + this._targetBowl(index, 1, 1);
  }
  return this.finalFrameStrikeScore(index);
};

Game.prototype._spareScore = function (index) {
  if (index < this.frameIndex - 1) {
    return this._targetBowl(index, 1, 0);
  }
  return this.finalFrameSpareScore(index);
};

Game.prototype.finalFrameStrikeScore = function (index) {
  if (index < this.frameIndex - 1) {
    return this._targetBowl(index, 1, 0) + this._targetBowl(index, 1, 1);
  }
  return this._targetBowl(index, 0, 1) + this._targetBowl(index, 0, 2);
};

Game.prototype.finalFrameSpareScore = function (index) {
  return this._targetBowl(index, 0, 2);
};

Game.prototype._targetBowl = function (index, skipBy, bowlIndex) {
  return this.frames[index + skipBy].bowls[bowlIndex];
};
