'use strict';

class Game {
  constructor() {
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
    if (typeof score1 != "number") {
      var score1 = Number(score1);
      var score2 = Number(score2);
      var score3 = Number(score3);
    }
    this.error(score1, score2, score3);
    var frame = new Frame(score1, score2, score3);
    this.scoreSheet.push(frame);
    this.addBonusPoints();
  }
  addBonusPoints() {
    // for continuous strikes
    if (this.frameCount >= 3) {
      if (this.twoFramesAgo().isStrike() && this.previousFrame().isStrike()) {
        this.twoFramesAgo().add(this.currentFrame().values[0])
      }
    }
    if (this.frameCount > 1) {
      // for a spare
      if (this.previousFrame().isSpare()) {
        this.previousFrame().add(this.currentFrame().values[0]);
        // for a strike
      } else if (this.previousFrame().isStrike()) {
        this.previousFrame().add(this.currentFrame().values.slice(0,2));
      }
    }
  }
  isGutterGame() {
    return this.frameCount === 10 && this.getCurrentScore() === 0;
  }
  isPerfectGame() {
    return this.getCurrentScore() === 300;
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
  error(score1, score2, score3) {
    if (this.isFinalFrame() && (score1 + score2 < 10) && score3 !== 0) {
      throw 'Cannot roll for third time unless striked or spared in last frame'
    }
  }
  isFinalFrame() {
    return this.frameCount === 9;
  }

  resetGame() {
    this._scoreSheet = [];
  }

};