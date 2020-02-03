ScoreCard = function() { this.frames = [], this.score = 0}

  // ScoreCard.prototype.addFrame = function(frame) {
  //   this.frames.push(frame)
  // }
  ScoreCard.prototype.addFrame = function() {
    this.frames.push(new Frame)
  }
  ScoreCard.prototype.current = function() { 
    return this.frames[this.frames.length - 1]
  }
  ScoreCard.prototype.last = function() { 
    return this.frames[this.frames.length - 2]
  }
  ScoreCard.prototype.calc_score = function() { 
    // if (!this.frames.length) {
    //   this.score += this.current().score()
    // } else
    if (this.current().complete) {
      if (this.frames.length > 0 && this.frames.length < 10) {
        if (this.last().isStrike()) {
          this.last().bonus += this.current().score();
          this.score += this.last().score();
        } else
        if (this.last().isSpare()) {
          this.last().bonus += this.current().rolls[0];
          this.score += this.last().score();
        }
        else {
          // this.score += this.current().score();
          this.score += this.last().score();
        };
      }
    }
  }
  

Frame = function() { this.rolls = [], this.rollCount = 0, this.bonus = 0 }

  Frame.prototype.roll = function(pins) {
    this.rolls.push(pins)
    this.rollCount ++
  }
  Frame.prototype.complete = function(frame_count) {
    if (frame_count < 10) {
      return (this.score() === 10 || this.rollCount === 2)
    } 
    else {
      return (this.rollCount <= 2 && this.score() < 10) || (this.rollCount === 3)  
   }
  }
  Frame.prototype.isStrike = function() {
    return (this.score() === 10 && this.rollCount === 1)
  }
  Frame.prototype.isSpare = function() {
    return (this.score() === 10 && this.rollCount > 1)
  }
  Frame.prototype.score = function() {
    return (this.rolls.reduce((a,b) => a + b, 0) + this.bonus)
  }
  Frame.prototype.bonus = function() {
    return (this.isStrike) ? 1 : 0
  }
  
  let score = new ScoreCard
  score.addFrame()
  score.current().roll(10)
  console.log(score.current())
  score.addFrame()
  score.current().roll(5)
  score.current().roll(3)
  console.log(score.current())
  console.log(score.last())
  score.calc_score()
  console.log(score.score)
  console.log(score.frames[0].score())

let s = new ScoreCard
// let f = new Frame
// f
// f.roll(10)
// f
// f.bonus()
// console.log(f.bonus())
s.addFrame()
s.current().roll(5)
s.addFrame()
s.current().roll(10)


s
// console.log(f.score())
// s.addFrame(f)
// console.log(s.last())
// r = new Frame
// s.addFrame(r)
// console.log(s.last())
