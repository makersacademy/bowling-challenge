'use strict';

class FinalFrame {
  constructor(){
    this._roll1 = null;
    this._roll2 = null;
    this._bonusRoll = null;
    this.MAX_SINGLE_ROLL_PTS = 10;
    this.MAX_FRAME_PTS = 10;
    }

  pointsFirstRoll(){
    return this._roll1;
  }

  pointsSecondRoll(){
    return this._roll2;
  }

  pointsBonusRoll() {
    return this._bonusRoll;
  }

  firstRoll(points) {
    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    this._roll1 = points;
  }

  secondRoll(points) {
    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    if (this._isMoreThanFrameMaxPoints(points)) {
      throw new Error('invalid amount of points for single frame');
    }
    this._roll2 = points;
  }

  bonusRoll(points) {
    if (this._isNotEligibleForBonus()) {
      throw new Error('not eligible for bonus roll');
    }
    if (this._isMoreThanMaxPointsForSingleRoll(points)) {
      throw new Error('invalid amount of points for single roll');
    }
    this._bonusRoll = points;
  }

  _isMoreThanMaxPointsForSingleRoll(points) {
    return points > this.MAX_SINGLE_ROLL_PTS;
  }

  _isMoreThanFrameMaxPoints(points) {
    return (points + this.pointsFirstRoll()) > this.MAX_FRAME_PTS;
  }

  _isNotEligibleForBonus() {
    return (this.pointsFirstRoll() + this.pointsSecondRoll()) < this.MAX_FRAME_PTS;
  }

}
