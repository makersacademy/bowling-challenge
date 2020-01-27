ScoreCard = function() { this.frames = [], this.score = 0}

  ScoreCard.prototype.addFrame = function(frame) {
    this.frames.push(frame)
  }
  ScoreCard.prototype.last = function() { 
    return this.frames[this.frames.length - 1]
  }


Frame = function() { this.rolls = [], this.rollCount = 0 }

  Frame.prototype.roll = function(pins) {
    this.rolls.push(pins)
    this.rollCount ++
  }
  Frame.prototype.complete = function() {
    return (this.score() === 10 || this.rollCount === 2)
  }
  Frame.prototype.isStrike = function() {
    return (this.score() === 10 && this.rollCount === 1)
  }
  Frame.prototype.isSpare = function() {
    return (this.score() === 10 && this.rollCount > 1)
  }
  Frame.prototype.score = function() {
    return this.rolls.reduce((a,b) => a + b, 0)
  }
  Frame.prototype.bonus = function() {
    return (this.isStrike) ? 1 : 0
  }
let f = new Frame
f
f.roll(10)
f.bonus()
console.log(f.bonus())
let s = new ScoreCard
f.score()
s.addFrame(f)
console.log(s.last())
r = new Frame
s.addFrame(r)
console.log(s.last())
