'use strict';

class Frame {
  constructor(score1, score2 = 0){
  this._score1 = score1;
  this._score2 = score2;
  }
  get values() {
    var array = [];
    array.push(this._score1, this._score2);
    return array;
  }

  isStrike() {
    return (this._score1 === 10 && this._score2 === 0);
  }

  isSpare() {
    var sum = this.values.reduce((a, b)=> {
      return a + b;
    }, 0);
    return ((sum === 10 && this._score2 !== 0));
  }
}
