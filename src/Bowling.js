function Scorecard() {
  this.scores = []
  this.frames = [[], [], [], [], [], [], [], [], [], []]
  this.pinsDown = 0
  // this.roll2 = 0
}

Scorecard.prototype.roll = function(pinsDown) {
  this.pinsDown = pinsDown
  this.scores.push(pinsDown)
};
//
// Scorecard.prototype.eachFrame = function() {
//   var i = 0
//   for (i = 0, i < 12, i ++) {
//     // scorecard.roll(pinsDown)
//     this.scores[i].push(this.pinsDown)
//   }
// }''
