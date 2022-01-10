const Frame = require('./frame')

class Game {

  constructor(frameClass = Frame) {
    this.frameClass = frameClass;
    this.currentFrame = new frameClass();
    this.frames = [];
  }

  inputRoll(pins) {
    if (this.currentFrame.isExtra()) {
      this.extraRoll(pins);
    } else {
      this.normalRoll(pins);
    }

    this.decisionOnExtraRoll();

    if (this.currentFrame.isComplete()) {
      this.nextFrame();
    }
  }

  normalRoll(pins) {
    this.currentFrame.roll(pins);
  }

  extraRoll(pins) {
    this.currentFrame.nonScoringRoll(pins);
    this.currentFrame.addBonus(pins);
  }

  isLastFrame() {
    return this.frames.length === 9;
  }

  decisionOnExtraRoll() {
    if (this.isLastFrame() && (this.currentFrame.isSpare() || this.currentFrame.isStrike())) {
      this.currentFrame.addExtraRoll();
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
    for (let i = 0; i < this.frames.length; i++) {
      if (this.getFrames()[i].isSpare() && i != 9) {
        let bonus = this.getFrames()[i+1].getRolls()[0]
        this.frames[i].addBonus(bonus);
      }
    }
  }

  calculateStrikeBonus() {
    for (let i = 0; i < this.frames.length; i++) {
      if (this.getFrames()[i].isStrike() && i != 9) {
        // If there is a strike, the next two rolls will be added as a bonus.
        // Since frames can be of varying length, we will search through the next frames until we have counted two rolls.
        // Bonus for the final round is calculated separately in the extraRoll function hence i != 9
        let bonus = 0;
        let rollsLeftToCount = 2;
        for (let j = i + 1; j < this.frames.length; j++) {
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

  calculateBonus() {
    this.calculateSpareBonus();
    this.calculateStrikeBonus();
  }

  totalScore() {
    this.calculateBonus();
    return this.frames.map((frame) => frame.getScore() + frame.getBonus()).reduce((previousValue, currentValue) => previousValue + currentValue);
  }

}

module.exports = Game;