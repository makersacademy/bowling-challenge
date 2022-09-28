class ScoringTable {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    let prevFrame = null,
      twoPrevFrame = null;
    if (this.frames.length > 2) {
      twoPrevFrame = this.frames[this.frames.indexOf(frame) - 2];
    }
    if (this.frames.length > 1) {
      prevFrame = this.frames[this.frames.indexOf(frame) - 1];
    }
    if (prevFrame != null) {
      this.addBonusPoints(twoPrevFrame, prevFrame, frame);
    }
  }

  addBonusPoints(twoPrevFrame, prevFrame, currFrame) {
    if (
      twoPrevFrame != null &&
      twoPrevFrame.isStrike() &&
      prevFrame.isStrike()
    ) {
      let bonus = currFrame.getRollOne();
      twoPrevFrame.addBonus(bonus);
    }
    if (prevFrame.isStrike()) {
      let bonus = currFrame.getRollOne() + currFrame.getRollTwo();
      prevFrame.addBonus(bonus);
    } else if (prevFrame.isSpare()) {
      let bonus = currFrame.getRollOne();
      prevFrame.addBonus(bonus);
    }
  }

  addBonusFrame(frame) {
    let lastFrame = this.frames[this.frames.length - 1];
    let secondToLastFrame = this.frames[this.frames.length - 2];
    if (secondToLastFrame.isStrike()) {
      debugger;
      let bonus = frame.getRollOne();
      secondToLastFrame.addBonus(frame.getRollOne());
    }
    let bonus = frame.getTotalScore();
    debugger; //secoond
    lastFrame.addBonus(bonus);
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
