'use strict';

class Roll {
  constructor(score) {
    this._score = score;
  }

  setScore(score) {
    this._score = score;
  }

  getScore() {
    return this._score;
  }

  isScored() {
    if(this._score >= 0) return true;
    return false;
  }
}