'use strict';

class Frame {
  constructor(){
    this._roll1 = null;
    this._roll2 = null;
    this.MAX_SINGLE_ROLL_PTS = 10;
    this.MAX_FRAME_PTS = 10;
    this.next_Roll = null;
    this.next_Next_Roll = null;
  }

  pointsFirstRoll(){
    return this._roll1;
  }

  pointsSecondRoll(){
    return this._roll2;
  }
  firstRoll(points){

    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    this._roll1 = points;
  }

  secondRoll(points){
    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    if (this._isMoreThanFrameMaxPoints(points)) {
      throw new Error('invalid amount of points for single frame');
    }
    this._roll2 = points;
  }

  totPointsBeforeBonus() {
    return this._roll1 + this._roll2;
  }

  getNextRoll(frame) {
    this.next_Roll = frame;
  }

  getNextNextRoll(frame) {
    this.next_Next_Roll = frame;
  }

  _isAStrike() {
    return this._roll1 === this.MAX_FRAME_PTS;
  }

  _isASpare() {
    return (this._roll1 !== this.MAX_FRAME_PTS) && (this.totPointsBeforeBonus() === this.MAX_FRAME_PTS);
  }

  _isMoreThanMaxPointsForSingleRoll(points) {
    return points > this.MAX_SINGLE_ROLL_PTS;
  }

  _isMoreThanFrameMaxPoints(points) {
    return (points + this.pointsFirstRoll()) > this.MAX_FRAME_PTS;
  }

}
