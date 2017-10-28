function Game() {
  this._frames = [];
}

Game.prototype.numberOfFrames = function() {
  return this._frames.length;
}

Game.prototype.addRoll = function(rollValue) {
  if (this.numberOfFrames() === 0 || !this._lastFrame().isOngoing()) {
    var frame;
    var frameNumber = this.numberOfFrames() + 1;
    if (frameNumber === 10) {
      frame = new FrameTen(frameNumber, rollValue);
    } else {
      frame = new Frame(frameNumber, rollValue);
    }
    this._frames.push(frame);
  } else {
    this._lastFrame().addRoll(rollValue);
  }
}

Game.prototype.totalScore = function() {
  var totalScore = 0;
  var numberOfFrames = this.numberOfFrames();
  var frames = this._frames;
  frames.forEach(function(frame, index) {
    totalScore += frame.total();
    if (frame.isSpare() && index < numberOfFrames - 1) {
      totalScore += frames[index + 1]._firstRoll;
    }
    else if (frame.isStrike() && index < numberOfFrames - 1) {
      totalScore += frames[index + 1]._firstRoll + frames[index + 1]._secondRoll;
      if (frames[index + 1].isStrike() && index < numberOfFrames - 2) {
        totalScore += frames[index + 2]._firstRoll;
      }
    }
  })
  return totalScore;
}

Game.prototype._lastFrame = function() {
  return this._frames[this.numberOfFrames() - 1];
}
