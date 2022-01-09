const Frame = require('./frame')

class Game {

  constructor(frameClass = Frame) {
    this.frameClass = frameClass;
    this.currentFrame = new frameClass();
    this.frames = [];
  }

  inputRoll(pins) {
    this.currentFrame.roll(pins);
    if (this.currentFrame.isComplete()) {
      this.nextFrame();
    }
  }

  newFrame() {
    this.currentFrame = new this.frameClass();
  }

  logFrame() {
    this.frames.push(this.currentFrame);
  }

  nextFrame() {
    this.logFrame();
    this.newFrame();
  }

  getFrames() {
    return [...this.frames];
  }

  calculateSpareBonus() {
    // Bonus scoring for last round is done separately
    let limit;
    if (this.getFrames().length === 9) {
      limit = 8;
    } else {
      limit = this.getFrames().length;
    }

    for (let i = 0; i < limit; i++) {
      if (this.getFrames()[i].isSpare()) {
        let bonus = this.getFrames()[i+1].getRolls()[0]
        this.frames[i].addBonus(bonus);
      }
    }
  }

  calculateStrikeBonus() {
    // Bonus scoring for last round is done separately
    let limit;
    if (this.getFrames().length === 9) {
      limit = 8;
    } else {
      limit = this.getFrames().length;
    }

    for (let i = 0; i < limit; i++) {
      if (this.getFrames()[i].isStrike()) {
        let bonus = 0;
        let rollsLeftToCount = 2;
        for (let j = i + 1; j < limit; j++) {
          for (const roll of this.getFrames()[j].getRolls()) {
            bonus += roll;
            rollsLeftToCount--;
            if (rollsLeftToCount === 0) { break; }
          }
          if (rollsLeftToCount === 0) { break; }
        }
        this.frames[i].addBonus(bonus);
      }
    }
  }

  totalScore() {
    return this.frames.map((frame) => frame.getScore()).reduce((previousValue, currentValue) => previousValue + currentValue);
  }

}

module.exports = Game;