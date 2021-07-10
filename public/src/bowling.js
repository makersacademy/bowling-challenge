
class Bowling {
  constructor() {
    this.frames = [];
  }
  addFrame(frame) {
    this.frames.push(frame);
  }
  score() {
    return this.frames.reduce((num, i) => num = num + i, 0);
  }
  isSpare(frame) {
    if(frame._frameScore() == 10) {
      this.frames.push(frame.rolls[frame.rolls.length -1])
    }
  }


  
}