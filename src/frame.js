function Frame() {
  this.frames = [];
  this.currentFrame = [];
}

Frame.prototype.receivePins = function(pins) {
  if (this.currentFrame.length < 2) {
    this.currentFrame.push(pins);
    if (this.currentFrame.length === 2) {
      this.frames.push(this.currentFrame);
      this.currentFrame = [];
    }
  }

Frame.prototype.getFrameResults = function() {
  return this.frames;
};

Frame.prototype.getFrameScores = function() {
  var output = [];
  var score;
  this.frames.forEach(function(frame) {
    score = frame.reduce((a, b) => a + b, 0);
    output.push([score]);
  });
  return output;
};

Frame.prototype.isTooManyPinsInOneFrame = function(numberOfPins) {
  if (this.currentFrame[0]) {
    return ((this.currentFrame[0] + numberOfPins) > 10)
  } else {
    return (numberOfPins > 10)
  }
}


}
