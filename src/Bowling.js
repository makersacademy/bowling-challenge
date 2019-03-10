function Scorecard() {
  this.totalScore = 0
  this.allFrames = [[], [], [], [], [], [], [], [], [], []]
  this.frame = []
  this.roll1 = 0
  this.roll2 = 0
}


Scorecard.prototype.firstRoll = function(pinsDown) {
  this.roll1 = pinsDown
}

Scorecard.prototype.secondRoll = function(pinsDown) {
  this.roll2 = pinsDown
}

Scorecard.prototype.eachFrame = function() {
  this.frame.push(this.roll1)
  this.frame.push(this.roll2)
}
