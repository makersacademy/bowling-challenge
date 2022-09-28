class ScoringTable {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    if (this.frames.length > 1 && (frame.isStrike() || frame.isSpare())) {
      let prevFrame = this.frames[this.frames.indexOf(frame) - 1];
      this.addBonusPoints(prevFrame, frame);
    }
  }

  addBonusPoints(prevFrame, frame) {
    let bonus = 0;
    if (prevFrame.isSpare()) {
      bonus += frame.getRollOne();
    } else if (prevFrame.isStrike() && !frame.isStrike) {
      bonus += frame.getRollOne();
      bonus += frame.getRollTwo();
    }
    prevFrame.setBonus(bonus);
  }

  addBonusFrame(frame) {
    let bonus = frame.getTotalScore();
    let lastFrame = this.frames[this.frames.length - 1];
    lastFrame.setBonus(bonus);
  }

  getTotalScore(index) {
    let total = this.frames
      .slice(0, index)
      .map((frame) => frame.getTotalScore())
      .reduce((a, b) => a + b, 0);
    return total;
  }

  getAllFrames() {
    return this.frames;
  }
}

module.exports = ScoringTable;
