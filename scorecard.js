export default class ScoreCard {
  constructor() {
    this.frames = [];
    this.isStrike = false;
    this.isSpare = false;
    this.score = 0;
  }

  calculateScore() {
    this.score = this.frames.reduce((sum, frame) => sum + frame.frameTotalScore, 0);
    return this.score;
  }

  playBowling(frame) {
    this.updatePastScore(frame);
    this.saveStrike(frame);
    this.saveSpare(frame);
    this.frames.push(frame);
    return this.calculateScore();
  }

  saveStrike(frame) {
    if (frame.firstRoll === 10) {
      this.isStrike = true;
    } else {
      this.isStrike = false;
    }
  }

  saveSpare(frame) {
    if (frame.frameTotalScore === 10 && frame.firstRoll < 10) {
      this.isSpare = true;
    } else {
      this.isSpare = false;
    }
  }

  updatePastScore(frame) {
    const pastFrame = this.frames[this.frames.length - 1];
    if (this.isStrike === true) {
      pastFrame.frameTotalScore += (frame.firstRoll + frame.secondRoll);
    } else if (this.isSpare === true) {
      pastFrame.frameTotalScore += (frame.firstRoll);
    }
  }
}
