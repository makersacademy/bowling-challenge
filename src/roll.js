'use strict';

class Roll {
  constructor() {
    this._score = '';
  }

  setScore(score) {
    this._score = score;
  }

  getScore() {
    return this._score;
  }

  isScored() {
    if(typeof(this._score) == 'number') return true;
    return false;
  }
}