function Scorecard(frame = new Frame) {
  this.frames         = arrayWithItems(10, frame);
  this._frameTracker  = 0;
  this._rollTracker   = 0;
}

Scorecard.prototype = {
  allRolls: function() {
    return [].concat.apply([], this.frames);
  },

  _nextFrame: function() {
    this._frameTracker++;
  },

  currentFrame: function() {
    return this.frames[this._frameTracker];
  },

  _nextRoll: function() {
    this._rollTracker++;
  },

  updateStrikeScores: function() {
    
  }
}
