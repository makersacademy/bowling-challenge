class ScoringTable {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    this.#addBonusFrames(frame);
  }

  getTenFrames() {
    return this.frames.slice(0, 10);
  }

  getTotalScoreAtFrame(frameNumber) {
    const total = this.frames
      .slice(0, frameNumber)
      .map((frame) => frame.getTotalScore())
      .reduce((a, b) => a + b, 0);
    return total;
  }

  #addBonusFrames(frame) {
    let prevFrame = null;
    let twoPrevFrame = null;
    if (this.frames.length > 1) {
      prevFrame = this.frames[this.frames.indexOf(frame) - 1];
      this.#addPrevFrameBonus(prevFrame, frame);
    }
    if (this.frames.length > 2) {
      twoPrevFrame = this.frames[this.frames.indexOf(frame) - 2];
      this.#addTwoPrevFrameBonus(twoPrevFrame, prevFrame, frame);
    }
  }

  #addPrevFrameBonus(prevFrame, currFrame) {
    let bonus = 0;
    if (prevFrame.isStrike()) {
      bonus += currFrame.getRollOne() + currFrame.getRollTwo();
    } else if (prevFrame.isSpare()) {
      bonus += currFrame.getRollOne();
    }
    prevFrame.addBonus(bonus);
  }

  #addTwoPrevFrameBonus(twoPrevFrame, prevFrame, currFrame) {
    if (twoPrevFrame.isStrike() && prevFrame.isStrike()) {
      const bonus = currFrame.getRollOne();
      twoPrevFrame.addBonus(bonus);
    }
  }
}

module.exports = ScoringTable;
