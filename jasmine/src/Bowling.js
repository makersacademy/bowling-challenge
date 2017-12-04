function Bowling(scorecard = new Scorecard) {
  this.scorecard = scorecard;
  this.currentRoll = this.currentRoll || new Roll;
  this._rollTracker = 0;
  this.allRolls = [];
}

Bowling.prototype = {
  nextRoll: function() {
    this.currentRoll = new Roll;
  },

  increaseRollPinfall: function() {
    if ((this.scorecard.currentFrame.getScore() + this.currentRoll.pinfall) < 10) {
      this.currentRoll.increasePinfall();
    }
  },

  decreaseRollPinfall: function() {
    this.currentRoll.decreasePinfall();
  },

  submitScore: function() {
    this.allRolls.push(this.currentRoll)
    this.scorecard.currentFrame.addToFrame(this.currentRoll);
    if (this.scorecard.currentFrame.isStrike()) {
      this._rollTracker += 2;
    } else {
      this._rollTracker++;
    }
    if ((this.scorecard.currentFrame.rollTally.length === 2) || this.scorecard.currentFrame.isStrike()) {
      this.scorecard.updateSpareScores()
      this.scorecard.updateStrikeScores()
      this.scorecard.addFrameToCard(this.scorecard.currentFrame)
      this.scorecard.startNewFrame();
    }

    this.nextRoll();
  },

  totalScore: function() {
    var total = 0;
    this.scorecard.frames.forEach(function(frame) {
      total += frame.getScore();
    })
    return total;
  }
}
