'use strict';

class FinalFrame {
  constructor(){
    this._roll1 = null;
    this._roll2 = null;
    this._roll3 = null;
    this.MAX_SINGLE_ROLL_PTS = 10;
    }

  pointsFirstRoll(){
    return this._roll1;
  }

  pointsSecondRoll(){
    return this._roll2;
  }

  pointsThirdRoll() {
    return this._roll3;
  }

  firstRoll(points){
    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    this._roll1 = points;
  }

  secondRoll(points) {
    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    this._roll2 = points;
  }

  thirdRoll(points) {
    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    this._roll3 = points;
  }

  _isMoreThanMaxPointsForSingleRoll(points) {
    return points > this.MAX_SINGLE_ROLL_PTS;
  }

}
