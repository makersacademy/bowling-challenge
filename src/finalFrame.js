'use strict';

class FinalFrame {
  constructor(){
    this._roll1 = null;
    this._roll2 = null;
    this._roll3 = null;
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

  firstRoll(points) {
    this._roll1 = points;
  }

  secondRoll(points) {
    this._roll2 = points;
  }

  thirdRoll(points) {
    this._roll3 = points;
  }

}
