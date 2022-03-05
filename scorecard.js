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
  doubleLastFrame() {
    return this.frames[this.frames.length - 3];
  }
  firstFrame() {
    return this.getFrameCount() === 1;
  }
  secondFrame() {
    return this.getFrameCount() === 2;
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
    else if (this.lastFrame().isSpare() === true ) {
      this.lastFrame().addPinsToScore(pins);
    }
  }
  strikeBonus(pins) {
    if (this.firstFrame()) {
      return;
    } else if (this.lastFrame().isStrike()) {
      this.lastFrame().addPinsToScore(pins);
    }
  }
  doubleStrikeBonus(pins) {
    if (this.firstFrame()|| this.secondFrame()) {
      return;
    } else if (this.lastFrame().isStrike() === true && pins === 10) {
      this.doubleLastFrame().addPinsToScore(pins);
    }
  }
  roll(pins) {
    if (!this.currentFrame().isLive() && this.getFrameCount() < 9) {
      this.createNewFrame()
      this.currentFrame().processOfTheRoll(pins)
      this.doubleStrikeBonus(pins);
      this.strikeBonus(pins);
      this.spareBonus(pins);
    } else if (this.currentFrame().isLive() && this.getFrameCount() < 9) {
      this.currentFrame().processOfTheRoll(pins)
      this.strikeBonus(pins);
    }
   else if (this.getFrameCount() === 9) {
      let lastFrameRollOne = Math.floor(Math.random() * 10)
      let lastFrameRollTwo = Math.floor(Math.random() * 10)
      let lastFrameRollThree = Math.floor(Math.random() * 10)
      if (this.lastFrame().isStrike() && pins === 10 ){
        console.log(`Your last two shots were strikes??? Have a random sprinkling of points from the bowling fairy. Have ${lastFrameRollOne + lastFrameRollTwo + lastFrameRollThree} points cause why not`)
        this.doubleStrikeBonus(pins);
        this.strikeBonus(pins);
        this.spareBonus(pins);
        this.currentFrame().addPinsToScore(lastFrameRollOne)
        this.currentFrame().addPinsToScore(lastFrameRollTwo)
        this.currentFrame().addPinsToScore(lastFrameRollThree)
      } else if (this.lastFrame().isStrike()) {
        console.log(`You scored an extra ${lastFrameRollOne + lastFrameRollTwo} points cause why not`)
        this.strikeBonus(pins);
        this.spareBonus(pins);
        this.currentFrame().addPinsToScore(lastFrameRollOne)
        this.currentFrame().addPinsToScore(lastFrameRollTwo)
      } else if (this.lastFrame().isSpare()) {
        console.log(`You got a spare last go? Don't care. You scored an extra ${lastFrameRollOne} points`)
        this.spareBonus(pins);
        this.currentFrame().addPinsToScore(lastFrameRollOne)
      } else if (this.lastFrame().isStrike() && pins === 10 ){
        console.log(`You scored an extra ${lastFrameRollOne + lastFrameRollTwo} points cause why not`)
      }
      else {
        console.log(`Here some extra points just for the crack like... ${lastFrameRollOne}!!`)
        this.currentFrame().addPinsToScore(lastFrameRollOne)
      }
    }
  }
}
module.exports = Scorecard
let scorecard = new Scorecard

 const printMessage = () => {
  console.log(scorecard.roll(10))
  console.log(scorecard.getFrames())
  console.log(scorecard.getTotal())
}
  (function theNotSoPerfectGame(){
    times = 10; 
    (function run(){
      console.log(scorecard.roll(10))
      console.log(scorecard.getFrames())
      console.log(scorecard.getTotal())
      if( --times )
        setTimeout(run, 2000);
    })();
  })();
