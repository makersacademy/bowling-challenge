'use strict';

class Card {
  constructor() {
    this._totalScore = 0;
    this._scores = [];
  }

  addScore(roll){
    this._scores.push(roll);
  };

  getTotalScore(){
    var total = this._scores.reduce(function(a, b){
      return a + b;
    }, 0);
    this._totalScore = total;
    return this._totalScore;
  }

}