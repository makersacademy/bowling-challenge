"use strict";

class Bowling {
  constructor() {
    this.frame = [];
    this.gameFrames = [];
    this.currentScore = 0;
    this.round = 1;
    this.spareBonus = false;
    this.spareScore = [];
    this.strikeScoreCounter = 0;
    this.strikeScore = [];
    this.strikeStreak = 0;
  }

  roll(score) {
    if (this.round == 10) {
      this.tenthRound(score);
      return;
    }
    this._addRoll(score);
    this.addStrikeScore(score);
    this.isStrike(score);
    this.addSpareScore(score);
    this.isSpare();
    this.nextFrame();
  }

  tenthRound(score) {
    //check if we are on round 10 and run all logic in this function then break
    if (this.round == 10 && score < 10 && this.spareBonus == false) {
      this._addRoll(score);
      this.nextFrame();
    }
  }

  addStrikeScore(score) {
    if (this.strikeScoreCounter > 0) {
      this.strikeScore.push(score);
      this.strikeScoreCounter--;
    }
    if (this.strikeStreak > 1) {
      this.strikeScore.push(score);
    }
  }

  isStrike(score) {
    if (score == 10 && this.strikeStreak > 0) {
      this.strikeScoreCounter += 1;
      this.strikeStreak++;
    } else if (score == 10) {
      this.strikeScoreCounter += 2;
      this.strikeStreak++;
    } else if (score != 10) {
      this.strikeStreak = 0;
    }
  }

  addFrame() {
    this.gameFrames.push(this.frame);
    this.frame = [];
  }

  nextFrame() {
    if (this.frame.length == 2) {
      this.addFrame();
      this.round++;
    }
  }

  addSpareScore(score) {
    if (this.spareBonus == true) {
      this.spareScore.push(score);
    }
  }

  isSpare() {
    if (this._sumArray(this.frame) === 10) {
      this.spareBonus = true;
    } else {
      this.spareBonus = false;
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
}
