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

}
