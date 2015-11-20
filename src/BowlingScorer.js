function BowlingScorer() {
  this._score = 0;
  this._first_frame = null;
}

BowlingScorer.prototype.score = function() {
  return this._score;
};

BowlingScorer.prototype.addFrame = function(roll1, roll2) {
  // have to check if first frame is null or not ...
  // not sure about adding up frames?  some recursive call perhaps?
  this._first_frame = new Frame(roll1, roll2)
  this._score = this._first_frame.score();
};