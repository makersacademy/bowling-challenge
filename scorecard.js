const Frame = require('./frame')

class Scorecard {

  constructor(frame = Frame) {
    this.frame = frame
    this.frames = [new frame()];
  }
  getFrameCount() {
    return this.frames.length;
  }
  getFrames() {
    return this.frames;
  }
  currentFrame() {
    return this.frames[this.frames.length - 1];
  }
  lastFrame() {
    return this.frames[this.frames.length - 2];
  }
  firstFrame() {
    return this.frames.length === 1
  }
  createNewFrame() {
      this.frames.push(new this.frame());
    }
    getTotal(array = this.frames) {
      let total = 0;
      for (let i = 0, _length = array.length; i < _length; i++) {
        total += array[i].getScore();
      }
      return total;
    }
  spareBonus(pins) {
    if (this.firstFrame()) {
      return;
    }
    if (this.lastFrame().isSpare() === true ) {
      this.lastFrame().addPinsToScore(pins);
    }
  }
  strikeBonus(pins) {
    if (this.firstFrame()) {
      return;
    }
    if (this.lastFrame().isStrike() === true ) {
      this.lastFrame().addPinsToScore(pins);
    }
  }
  doubleStrikeBonus(pins) {
    if (this.firstFrame()) {
      return;
    }
    if (this.lastFrame().isSpare() === true ) {
      this.lastFrame().addPinsToScore(pins);
    }
  }
  roll(pins) {
    if (!this.currentFrame().isLive() && this.getFrameCount() < 10) {
      this.createNewFrame()
      this.currentFrame().processOfTheRoll(pins)
      this.doubleStrikeBonus(pins);
      this.strikeBonus(pins);
      this.spareBonus(pins);
    } else if (this.currentFrame().isLive() && this.getFrameCount() < 10) {
      this.currentFrame().processOfTheRoll(pins)
      this.strikeBonus(pins);
    }
   else if (this.getFrameCount() === 10) {
      let lastFrameRollOne = Math.floor(Math.random() * 10)
      let lastFrameRollTwo = Math.floor(Math.random() * 10)
      if (this.lastFrame().isStrike()) {
        console.log(`You scored an extra ${lastFrameRollOne + lastFrameRollTwo} points cause why not`)
        this.currentFrame().push(lastFrameRollOne)
        this.currentFrame().push(lastFrameRollTwo)
      }else if (this.lastFrame().isSpare()) {
        console.log(`You got a spare last go? Don't care. You scored an extra ${lastFrameRollOne} points`)
        this.currentFrame().push(lastFrameRollOne)
      } else {
        console.log(`Here some extra points just for shits... ${lastFrameRollOne}!!`)
        this.currentFrame().addPinsToScore(lastFrameRollOne)
      }
    }
  }
}


module.exports = Scorecard

let scorecard = new Scorecard
console.log(scorecard.roll(10))
console.log(scorecard.roll(10))
console.log(scorecard.roll(10))
// console.log(scorecard.roll(2))
// console.log(scorecard.roll(3))
// console.log(scorecard.roll(4))
// console.log(scorecard.roll(1))
// console.log(scorecard.roll(3))
// console.log(scorecard.roll(5))
// console.log(scorecard.roll(2))
// console.log(scorecard.roll(1))
// console.log(scorecard.roll(2))
// console.log(scorecard.roll(5))
// console.log(scorecard.roll(2))
// console.log(scorecard.roll(4))
// console.log(scorecard.roll(3))
// console.log(scorecard.roll(1))
// console.log(scorecard.roll(2))
// console.log(scorecard.roll(7))
// console.log(scorecard.roll(7))
console.log(scorecard.getFrames())
console.log(scorecard.getTotal())