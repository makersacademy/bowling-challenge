'use strict';

class Frame {
  constructor(){
    this._roll1 = null
    this._roll2 = null
  }

  pointsFirstRoll(){
    return this._roll1
  }

  pointsSecondRoll(){
    return this._roll2
  }
  firstRoll(points){
    this._roll1 = points
  }

  secondRoll(points){
    this._roll2 = points
  }

}
