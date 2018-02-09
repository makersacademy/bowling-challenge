function Frame() {
  this.bowls = []
  this.isSpare = false
  this.isStrike = false
  // this.isLastFrame = false
};

Frame.prototype.enterRoll = function(pins) {
  this.bowls.push(pins)
  this.total = this.bowls.reduce(function(a, b) { return a + b; }, 0);
  if (this.bowls[0] === 10) {
    this.isStrike = true
  } else if (this.total === 10) {
    this.isSpare = true
  }
};

// Frame.prototype.notFinalFrame = function() {
//   this.assignsFinalFrame()
//   this.matchScores.push(this.Score())
//   this.updatesScoring()
//   this.emptyFrame()
// };
//
// Frame.prototype.assignsFinalFrame = function() {
//   if (this.matchScores.length === 9) {
//     this.isLastFrame = true
//   }
// };

// Frame.prototype.finalFrameAlerts = function() {
//   if (this.isLastFrame) {
//     if (this.isPreviouslySpare) {
//       return "One more roll"
//     } else if (this.isPreviouslyStrike) {
//       return "Two more rolls"
//     } else {
//       return "Game over"
//     }
//   }
// };
