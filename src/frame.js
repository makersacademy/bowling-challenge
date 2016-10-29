'use strict';

function Frame() {
  this.totalScore = 0;
  this.workingScore = 0;
  this.shot = 0;
  this.bonus = 0;
  this.isStrike = false
  this.isOver = false
  this.isSpare = false
  this.turn = []
};

Frame.prototype.addScore = function(score) {
  this.checkForIllegalScore(score);
  this.checkIfStrike(score);
  if (!this.isOver) {
    this.workingScore += score;
    this.turn.push(score)
    this.shot += 1;
    this.checkIfOver();
  }
  this.checkIfSpare();
};

Frame.prototype.checkIfOver = function() {
  if (this.shot >= 2) {
    this.isOver = true;
    this.totalScore += this.workingScore;
  }
};

Frame.prototype.checkIfStrike = function(score) {
  if (score === 10) {
    this.isStrike = true;
    this.isOver = true;
    this.workingScore += score
  }
};

Frame.prototype.checkForIllegalScore = function(score) {
  if ((this.workingScore + score) > 10) {
    throw new Error('Illegal Score');
  }
};

Frame.prototype.checkIfSpare = function() {
  if (this.shot === 2 && this.workingScore === 10) {
    this.isSpare = true;
    this.totalScore = 0
  }
};
