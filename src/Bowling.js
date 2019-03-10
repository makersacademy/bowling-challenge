function Scorecard() {
  this.score = []
  this.frames = [[], [], [], [], [], [], [], [], [], []]
  this.pinsDown = 0
  // this.roll2 = 0
}

Scorecard.prototype.roll = function(pinsDown) {
  this.pinsDown = pinsDown
};

Scorecard.prototype.eachFrame = function() {
  this.score.push(this.pinsDown)
}
