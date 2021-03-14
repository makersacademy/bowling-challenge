'use strict';

class Frame {
  constructor(score1, score2 = 0, score3 = 0){
  this._score1 = score1;
  this._score2 = score2;
  this.frameScore = [score1, score2, score3];
  }
  get values() {
    return this.frameScore;
  }

  isStrike() {
    return (this._score1 === 10 && this._score2 === 0);
  }

  isSpare() {
    var sum = this.totalScore();
    return ((sum === 10 && this._score2 !== 0));
  }

  totalScore() {
    var total = this.frameScore.flat().reduce((a, b) => {
      return a + b;
    }, 0);
    return total;
  }
  add(point) {
    this.frameScore.push(point)
  }
}
