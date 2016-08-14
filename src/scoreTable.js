'use strict';

function ScoreTable() {
  this.pinsLeft = 10;
  this.rollNumber = 1;
  this.frameNumber = 1;
  this.totalPoints = 0;
  this.pinsKnocked = 0;
  this.bonus = 0;
  this.scores = [];
};

ScoreTable.prototype = {
  getScore: function() {
    console.log("Frame: ",        this.frameNumber);
    console.log("Roll: ",         this.rollNumber);
    console.log("Pins knocked: ", this.pinsKnocked);
    console.log("Total score: ",  this.totalPoints);
  },

  getPinsLeft: function() {
    return this.pinsLeft;
  },

  countTotalPoints: function() {
    this.totalPoints = 0;
    for (var i = 0; i < this.scores.length ; i++) {
      this.totalPoints += this.scores[i];
    }
  },

  calculateRoll: function(score) {
    this.pinsKnocked = score;
    this.pinsLeft -= score;
    this._calculatePoints();
    this.getScore();
    this._nextTurn();
    return this.pinsLeft;
  },

  _calculatePoints: function () {
    this.scores.push(this.pinsKnocked);
    this._addBonus(this.bonus);
    this.countTotalPoints();
  },

  _addBonus: function (bonusCount) {
    if (bonusCount > 2) {
      this.scores[this.frameNumber - 1] += this.pinsKnocked;
      this.scores[this.frameNumber - 2] += this.pinsKnocked;
      this.bonus -= 1;
    }
    else if (bonusCount > 0){
      this.scores[this.frameNumber - 1] += this.pinsKnocked;
      this.bonus -= 1;
    }
  },

  _nextTurn: function () {
    if (this.pinsLeft > 0 && this.rollNumber === 1){
      this.rollNumber += 1;
    }
    else if (this.pinsLeft === 0 && this.rollNumber === 1){
      this._setNewFrame(2);
    }
    else if (this.pinsLeft === 0 && this.rollNumber === 2){
      this._setNewFrame(1);
    }
    else {
      this._setNewFrame(0);
    }
  },

  _setNewFrame: function (bonus) {
    this.frameNumber += 1;
    this.rollNumber = 1;
    this.bonus += bonus;
    this.pinsLeft = 10;
  }
};
