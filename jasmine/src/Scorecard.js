function Scorecard() {
  this.frames         = [];
  this._frameTracker  = 0;
  this._rollTracker   = 0;
  this.currentFrame   = this.currentFrame || new Frame;
}

Scorecard.prototype = {
  allRolls: function() {
    return [].concat.apply([], this.frames);
  },

  startNewFrame: function() {
    this.currentFrame = new Frame;
  },

  addFrameToCard: function(frame) {
    this.frames.push(frame);
    this._frameTracker++;
  },

  _nextRoll: function() {
    this._rollTracker++;
  },

  updateStrikeScores: function() {
    if (this.frames.length >= 1) {
      var lastFrame = this.frames[(this._frameTracker - 1)]
      if (lastFrame.isStrike() && this.currentFrame.rollTally.length >= 2) {
        this.currentFrame.rollTally.forEach(function(roll) {
          lastFrame.awardBonusPoint(roll.pinfall);
        })
      }
    }

    if (this.frames.length >= 2) {
      var twoFramesAgo = this.frames[(this._frameTracker - 2)]
      if (twoFramesAgo.isStrike() && !twoFramesAgo.isBonusAwarded) {
        twoFramesAgo.awardBonusPoint(lastFrame.rollTally[0].pinfall)
        twoFramesAgo.awardBonusPoint(this.currentFrame.rollTally[0].pinfall)
      }
    }

  }
}
