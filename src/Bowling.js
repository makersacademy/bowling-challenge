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

Scorecard.prototype.isEven = function(length) {
  if (length % 2 == 0) {return true}
  else {return false}
}
