
var Game = function () {
  this.frames = [];
  for (var i = 0; i < 11; i++) {
    this.frames.push(new Frame ());
  }
  this.frameIndex = 0;
  this.finalizedIndex = -1;
}

Game.prototype.currentFrame = function () {
  return this.frames[this.frameIndex];
}

Game.prototype.tryFinalize = function (frame, index) {

  balls = frame.scores.length;
  bonus = 0;

  // does the frame require a bonus?
  if (frame.total() != 10) {
    return true;
  }
  // is this the last frame?
  else if (index == 11) {
    return true;
  }

  nextFrame = this.frames[index + 1];

  // is it a spare bonus?
  if (balls === 2) {

    if (nextFrame.scores.length > 0) {
      bonus += nextFrame.scores[0]
    }
    // otherwise try again next ball
    else {
      return false;
    }
  }

  // is it a strike bonus?
  else if (balls === 1) {

    // are the next 2 balls both in the next frame?
    if ( nextFrame.scores.length === 2) {
      bonus += nextFrame.total();
    }

    // was the next frame a strike?
    else if (nextFrame.frameType == FrameType.STRIKE) {

      // get second bonus from the frame after
      frameAfter = this.frames[index + 2];
      if (frameAfter.scores.length > 0) {
        bonus += frameAfter.scores[0] + 10;
      }
      else {
        return false;
      }
    }
    // if not try again next ball
    else {
      return false;
    }
  }
  frame.setBonus(bonus);
  this.finalizedIndex = index;
  return true;
}

Game.prototype.ball = function (score) {
  this.currentFrame().addScore(score);
  if (this.currentFrame().scores.length === 2 || this.currentFrame().total() === 10) {
    this.frameIndex ++;
  }
  for (var i = this.finalizedIndex + 1; i < this.frameIndex; i++) {
    if (!this.tryFinalize(this.frames[i], i)) {
      break;
    }
  }
}

Game.prototype.total = function () {
  if (this.frames.length === 0) {
    return 0;
  }
  total = 0;
  for (var i = 0; i < this.frameIndex; i++) {
    total += this.frames[i].total()
  }
  return total;
};
