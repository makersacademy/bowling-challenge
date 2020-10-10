"use strict";

class Game {
  constructor() {
    this.frame = [];
    this.gameFrames = [];
    this.currentScore = 0;
    this.round = 1;
    this.spareBonus = false;
    this.spareScore = [];
    this.strikeCounter = 0;
    this.strikeScore = [];
  }

  roll(score) {
    this._addRoll(score);
    this.addStrikeScore(score);
    this.isStrike(score);
    this.addSpareScore(score);
    this._isSpare();
    if (this.frame.length == 2) {
      this.addFrame();
      this.round++;
    }
  }

  addStrikeScore(score) {
    if (this.strikeCounter > 0) {
      this.strikeScore.push(score);
      this.strikeCounter--;
    }
  }

  isStrike(score) {
    if (score == 10) {
      this.strikeCounter += 2;
    }
  }

  addFrame() {
    this.gameFrames.push(this.frame);
    this.frame = [];
  }

  addSpareScore(score) {
    if (this.spareBonus == true) {
      this.spareScore.push(score);
    }
  }

  calculateScore() {
    this.currentScore = 0;
    for (let index = 0; index < this.gameFrames.length; index++) {
      const element = this.gameFrames[index];
      this.currentScore += this._sumArray(element);
    }
    this.currentScore += this._sumArray(this.spareScore);
    this.currentScore += this._sumArray(this.strikeScore);
  }

  _sumArray(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  _addRoll(score) {
    if (score < 10 && score >= 0) {
      this.frame.push(score);
    } else if (score == 10) {
      this.frame.push(score);
      this.addFrame();
    }
  }

  _isSpare() {
    if (this._sumArray(this.frame) === 10) {
      this.spareBonus = true;
    } else {
      this.spareBonus = false;
    }
  }
}
