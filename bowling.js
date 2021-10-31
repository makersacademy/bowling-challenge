const Frame = require('./frame');
const Scorecard = require('./scorecard');

class Bowling {
  constructor() {
    this.frames = [];
    this.scorecardClass = new Scorecard();
  }

  scorecard() {
    return [
      this.scorecardClass.showPins(this.frames),
      this.scorecardClass.showTotals(this.frames),
    ].join('\n');
  }

  totalScore() {
    return this.frames.reduce((sum, frame) => sum + frame.total, 0);
  }

  inputFullGame(arrayOfRolls) {
    arrayOfRolls.forEach((pins) => this.roll(pins));
  }

  roll(pins) {
    if (this.gameOver) {
      throw 'Game Over!';
    } else if (this.finalFrame()) {
      this.updateFinalFrame(pins);
    } else {
      this.updateFrames(pins);
      if (this.currentFrame.isComplete()) {
        this.currentFrame.calculateBonus();
        this.storeFrame();
      }
    }
  }

  updateFrames(pins) {
    this.currentFrame ||= new Frame.Frame();
    if (this.bonusFrames) {
      this.updateBonusFrames(pins);
    }
    this.updateCurrentFrame(pins);
  }

  bonusFrames() {
    return this.frames.filter((frame) => frame.hasActiveBonus());
  }

  updateBonusFrames(pins) {
    this.bonusFrames().forEach((bonusframe) => {
      bonusframe.updateTotal(pins), bonusframe.deductBonusRoll();
    });
  }

  updateCurrentFrame(pins) {
    this.currentFrame.addPins(pins);
    this.currentFrame.calculateTotal();
  }

  updateFinalFrame(pins) {
    this.currentFrame ||= new Frame.FinalFrame();
    this.updateFrames(pins);
    this.currentFrame.calculateBonus();
    if (this.currentFrame.isComplete()) {
      this.endGame();
    }
  }

  storeFrame() {
    this.frames.push(this.currentFrame);
    this.currentFrame = null;
  }

  finalFrame() {
    return this.frames.length === 9;
  }

  endGame() {
    this.storeFrame();
    this.gameOver = true;
  }
}

module.exports = Bowling;
