function ScoreCard() {
  this.rollOne = 0
  this.rollTwo = 0
  this.frames = []
  this.rollNumber = 1
}

  ScoreCard.prototype.addRoll = function(pins) {
    if (this.rollNumber == 1) {
      this.rollOne += pins
      this.rollNumber = 2
    } else if (this.rollNumber == 2) {
      this.rollTwo += pins
      this.frames.push([this.rollOne, this.rollTwo])
      this.rollNumber = 1
      this.rollOne = 0
      this.rollTwo = 0
    }
  }

  ScoreCard.prototype.frameScore = function(frameNumber) {
    var frame = this.frames[frameNumber - 1]
    return frame[0] + frame[1]
  }

  ScoreCard.prototype.calculateTotal = function() {
    var total = 0

    for (i = 0; i < this.frames.length; i++) {
      total += this.frameScore(i + 1)
    }

    return total
  }
