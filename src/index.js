'use strict';

class Card {
  constructor() {
    this._totalScore = 0;
    this._scores = [];
    this._frameCount = 1;
    this._rollCount = 1;
    this._frameScore = [0, 0, 0];
  }

  addScore(roll){
    // adds the current roll to the right place
    if (this._rollCount === 1 && roll === 10) {
      this._frameScore[0] = 10;
      this._scores.push(this._frameScore);
      this._frameCount += 1;
    }
    else if (this._rollCount === 1 && roll < 10) {
      this._frameScore[0] = roll;
      this._rollCount = 2;
    }
    else {
      this._frameScore[1] = roll;
      this._scores.push(this._frameScore);
      this._rollCount = 1;
      this._frameCount += 1;
    }
  }
  getTotalScore() {
    // creates an array from the nested array of scores
    var flatScore = this._scores.flat([1]);
    // adds the scores from the flattened array together
    var total = flatScore.reduce(function (a, b) {
      return a + b;
    }, 0);
    // returns the total of the arrays to the bits it needs to
    this._totalScore = total;
    return this._totalScore;
  }
  };