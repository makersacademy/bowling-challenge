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

// roll returning a string instead of a valid number was a really bad idea
// instead it should have defaulted to 0 I think
// and then a score should have been assigned which sets score and isScored to true.