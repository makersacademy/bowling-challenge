function Scorecard() {
  this.frames = [];
}

Scorecard.prototype = {
  constructor: Scorecard,
  isComplete: function() {
    if (this.frames.length === 10) {
      return true;
    } else {
      return false;
    }
  },

  calculateTotalScore: function() {
    var total = 0;
    for (var i = 0; i < this.frames.length; i++) {
      var frameScore = this.frames[i].totalScore;
      total = total + frameScore;
    }
    return total;
  },

  captureFrame: function(frame = new Frame) {
    if (this.frames.length === 10) {
      throw new Error("Scorecard already contains the maximum 10 frames.");
    } else {
      this.frames.push(frame);
    }
  },

  // add unit test
  isPreviousFrameSpare: function(frame) {
    if (this.frames.length > 1) {
      var i = this.frames.indexOf(frame);
      var isSpare = this.frames[i - 1].spareFlag;
      return isSpare;
    } else {
      return false;
    }
  },

  // add unit test
  isPreviousFrameStrike: function(frame) {
    if (this.frames.length > 1) {
      var i = this.frames.indexOf(frame);
      var isStrike = this.frames[i - 1].strikeFlag;
      return isStrike;
    } else {
      return false;
    }
  },

  // add unit test
  isTwoFramesPreviousStrike: function(frame) {
    if (this.frames.length > 2) {
      var i = this.frames.indexOf(frame);
      var isStrike = this.frames[i - 2].strikeFlag;
      return isStrike;
    } else {
      return false;
    }
  }
}