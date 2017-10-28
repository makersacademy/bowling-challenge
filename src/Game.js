function Game() {
  this._frames = [];
}

Game.prototype.numberOfFrames = function() {
  return this._frames.length;
}

Game.prototype.addRoll = function(rollValue) {
  if (this.numberOfFrames() === 0 || !this._lastFrame().isOngoing()) {
    var frameNumber = this.numberOfFrames() + 1;
    frame = new Frame(frameNumber, rollValue);
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
  })
  return totalScore;
}

Game.prototype._lastFrame = function() {
  return this._frames[this.numberOfFrames() - 1];
}
