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
  if (this.roll1 == 10) {
    this.roll12 = 0
    this.frame.push(10)
    this.frame.push(0)
  } else {
    this.frame.push(this.roll1)
    this.frame.push(this.roll2)
  }
}
