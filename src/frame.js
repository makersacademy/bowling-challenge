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

  calculateScore() {
    return this._roll1 + this._roll2;
  }

  getNextRoll(frame) {
    return this.next_Roll = frame;
  }

  nextRoll() {
    return this.next_Roll
  }

  getNextNextRoll(frame) {
    return this.next_Next_Roll = frame;
  }

  nextNextRoll() {
    return this.next_Next_Roll
  }

  calculateBonus() {
    if (this._isASpare()) {
      return this._spareBonus();
    }
    if (this._isAStrike()) {
      return this._strikeBonus();
    }
    else {
      return 0;
    }
  }

  totalFrameScore() {
    return this.calculateScore() + this.calculateBonus();
  }

  _isAStrike() {
    return this._roll1 === this.MAX_FRAME_PTS;
  }

  _isASpare() {
    return (this._roll1 !== this.MAX_FRAME_PTS) && (this.calculateScore() === this.MAX_FRAME_PTS);
  }

  _spareBonus() {
    if (this._isNextRollNull()) {
      return 0
    } else {return this.nextRoll().pointsFirstRoll()}
   
  }

  _strikeBonus() {
    if (this._isNextRollNull()) {
      return 0
    }
    if (this.nextRoll()._isAStrike() && (this._isNextNextRollNull())) {
      return this.nextRoll().pointsFirstRoll() + this.nextRoll().pointsSecondRoll();
    }
    if (this.nextRoll()._isAStrike()) {
      return this.MAX_FRAME_PTS + this.nextNextRoll().pointsFirstRoll();
    }
    return this.nextRoll().pointsFirstRoll() + this.nextRoll().pointsSecondRoll();
  }

  _isMoreThanMaxPointsForSingleRoll(points) {
    return points > this.MAX_SINGLE_ROLL_PTS;
  }

  _isMoreThanFrameMaxPoints(points) {
    return (points + this.pointsFirstRoll()) > this.MAX_FRAME_PTS;
  }

  _isNextRollNull() {
    return this.nextRoll() === null || this.nextRoll() === undefined;
  }

  _isNextNextRollNull(){
    return this.nextNextRoll() === undefined || this.nextRoll() === null;
  }



}
