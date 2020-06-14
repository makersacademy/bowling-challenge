'use strict';

class Frame {
  constructor(){
    this._roll1 = null;
    this._roll2 = null;
    this.MAX_SINGLE_ROLL_PTS = 10;
  }

  pointsFirstRoll(){
    return this._roll1;
  }

  pointsSecondRoll(){
    return this._roll2;
  }
  firstRoll(points){
    if (points > this.MAX_SINGLE_ROLL_PTS) {
      throw new Error('invalid amount of points for single roll');
    }
    this._roll1 = points;
  }

  secondRoll(points){
    this._roll2 = points;
  }

  totPointsBeforeBonus() {
    return this._roll1 + this._roll2;
  }

  _isMoreThanMaxPointsForSingleRoll() {
    return (this.firstRoll(points) > this.MAX_FIRST_ROLL_PTS);
  }

}
