function ScoreCard () {
  this.frames = []
  this.framesLimit = 10
}

ScoreCard.prototype.addFrame = function (frame) {
  this.frames.push(frame)
}

ScoreCard.prototype.frameScoreDisplay = function (frameNo) {
  var display = null
  var currentFrameRoll1 = this.frames[frameNo].bowls[0]
  var currentFrameRoll2 = this.frames[frameNo].bowls[1]
  var currentFrameRoll3 = this.frames[frameNo].bowls[2]
  var currentFrameTotal = this.frames[frameNo].total()
  var nextFrame = this.frames[frameNo + 1]
  if (nextFrame) {
    var nextFrameRoll1 = this.frames[frameNo + 1].bowls[0]
  }
  if (nextFrame) {
    var nextFrameRoll2 = this.frames[frameNo + 1].bowls[1]
  }
  var nextNextFrame = this.frames[frameNo + 2]
  if (nextNextFrame) {
    var nextNextFrameRoll1 = this.frames[frameNo + 2].bowls[0]
  }

  if (frameNo + 1 === this.framesLimit && currentFrameRoll3) {
    display = currentFrameTotal
  } else if (currentFrameRoll1 === frame.pins && nextFrame) {
    if (nextFrameRoll2) {
      display = currentFrameTotal + nextFrameRoll1 + nextFrameRoll2;
    } else if (nextNextFrame) {
      display = currentFrameTotal + nextFrameRoll1 + nextNextFrameRoll1;
    }
  } else if (currentFrameRoll1 + currentFrameRoll2 === frame.pins && nextFrame) {
    display = currentFrameTotal + nextFrameRoll1;
  } else if (currentFrameRoll1 + currentFrameRoll2 < frame.pins) {
    display = currentFrameTotal;
  }
  return display;
};

ScoreCard.prototype.currentFrameOver = function () {
  var currentFrame = this.frames.length - 1;
  var currentFrameRoll1 = this.frames[currentFrame].bowls[0];
  var currentFrameRoll2 = this.frames[currentFrame].bowls[1];
  var currentFrameRoll3 = this.frames[currentFrame].bowls[2];

  if (this.frames.length === this.framesLimit) {
    return (
      currentFrameRoll3 !== undefined ||
      currentFrameRoll1 + currentFrameRoll2 < frame.pins
    );
  } else {
    return currentFrameRoll2 !== undefined || currentFrameRoll1 === frame.pins;
  }
};

ScoreCard.prototype.gameOver = function() {
  if(this.frames.length === this.framesLimit) {
    var finalFrameRoll1 = this.frames[this.framesLimit-1].bowls[0];
    var finalFrameRoll2 = this.frames[this.framesLimit-1].bowls[1];
    var finalFrameRoll3 = this.frames[this.framesLimit-1].bowls[2];

    return (finalFrameRoll3 != undefined || (finalFrameRoll1 + finalFrameRoll2) < frame.pins);
  }
};
