function Frame() {
  this.frames = [];
  this.currentFrame = [];
}

Frame.prototype.receivePins = function(pins) {
  if (this.currentFrame.length < 2) {
    this.currentFrame.push(pins);
    if (pins === 10) {
      this.frames.push(this.currentFrame);
      this.currentFrame = [];
      return;
    }
    if (this.currentFrame.length === 2) {
      this.frames.push(this.currentFrame);
      this.currentFrame = [];
    }
  }
}

Frame.prototype.getFrameResults = function() {
  return this.frames;
};

Frame.prototype.getFrameScores = function() {
  var output = [];
  var score;
  var arrayLength = this.frames.length;
  for (var i = 0; i < arrayLength; i++) {
    var frame = this.frames[i];
    var nextFrame = this.frames[i+1];
    score = frame.reduce((a, b) => a + b, 0)
    if (frame.length === 2 && score === 10) {
      if (typeof nextFrame === 'undefined') {
        this.currentFrame.length === 0 ? (score = 0) : (score += this.currentFrame[0])
      } else if (typeof nextFrame === 'object') {
        score += nextFrame[0];
      }
    }
    output.push([score])
  }
  return output;
};

Frame.prototype.isTooManyPinsInOneFrame = function(numberOfPins) {
  if (this.currentFrame.length === 0 && numberOfPins === 10) {
    return false;
  }
  if (this.currentFrame[0]) {
    return ((this.currentFrame[0] + numberOfPins) > 10)
  } else {
    return (numberOfPins > 10)
  }
}
