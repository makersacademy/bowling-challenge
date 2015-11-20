function BowlingScorer(frameFactory) {
  this._frameFactory = frameFactory || Frame;
  this._firstFrame = null;
}

BowlingScorer.prototype.score = function() {
  if(!this._firstFrame) { return 0 };
  return this._firstFrame.score();
};

BowlingScorer.prototype.addFrame = function(roll1, roll2, roll3) {
  var frame = this._frameFactory.create(roll1, roll2, roll3);
  if(!this._firstFrame) {
    this._firstFrame = frame;
  } else { 
    this._firstFrame.addNextFrame(frame);
  }
};