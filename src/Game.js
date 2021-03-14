'use strict';

class Game {
  constructor() {
    this._score = 0;
    this._scoreSheet = [];
  }
  getCurrentScore() {
    var sheet = this._scoreSheet;
    var total = 0
    sheet.forEach(frame => {
      total += frame.totalScore();
    });
    return total;
  }
  input(score1, score2 = 0, score3 = 0) {
    var frame = new Frame(score1, score2, score3);
    this.scoreSheet.push(frame);
    this.addBonusPoints();
  }
  addBonusPoints() {
    if (this.frameCount >= 3) {
      if (this.twoFramesAgo().isStrike() && this.previousFrame().isStrike()) {
        this.twoFramesAgo().add(this.currentFrame().values[0])
      }
    }
    if (this.frameCount > 1) {
      if (this.previousFrame().isSpare()) {
        this.previousFrame().add(this.currentFrame().values[0]);
      } else if (this.previousFrame().isStrike()) {
        this.previousFrame().add(this.currentFrame().values.slice(0,2));
      }
    }
  }
  get scoreSheet() {
    return this._scoreSheet;
  }
  previousFrame() {
    return this.scoreSheet[(this.frameCount) - 2];
  }
  currentFrame() {
    return this.scoreSheet[(this.frameCount) - 1];
  }
  twoFramesAgo() {
    return this.scoreSheet[(this.frameCount) - 3]
  }
  get frameCount() {
    return (this.scoreSheet).length;
  }

};