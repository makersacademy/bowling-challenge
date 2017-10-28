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
  this._frames.forEach(function(frame) {
    totalScore += frame.total();
  })
  return totalScore;
}

Game.prototype._lastFrame = function() {
  return this._frames[this.numberOfFrames() - 1];
}
