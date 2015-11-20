function BowlingScorer() {
  this._score = 0;
  this._firstFrame = null;
}

BowlingScorer.prototype.score = function() {
  if(!this._firstFrame) { return 0 };
  return this._firstFrame.score();
};

BowlingScorer.prototype.addFrame = function(roll1, roll2) {
  if(!this._firstFrame) {
    this._firstFrame = new Frame(roll1, roll2);
  } else {
    this._firstFrame.addNextFrame(new Frame(roll1, roll2));
  }
};