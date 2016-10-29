'use strict';

function Frame() {
  this.score = 0;
  this.shot = 0;
  this.isStrike = false
  this.isOver = false
  this.isSpare = false
};

Frame.prototype.addScore = function(score) {
  this.checkForIllegalScore(score);
  this.checkIfStrike(score);
  if (!this.isOver) {
    this.score += score;
    this.shot += 1;
    this.checkIfOver();
  }
  this.checkIfSpare();
};

Frame.prototype.checkIfOver = function() {
  if (this.shot >= 2) {
    this.isOver = true;
  }
};

Frame.prototype.checkIfStrike = function(score) {
  if (score === 10) {
    this.isStrike = true;
    this.isOver = true;
    this.score += score
  }
};

Frame.prototype.checkForIllegalScore = function(score) {
  if ((this.score + score) > 10) {
    throw new Error('Illegal Score');
  }
};

Frame.prototype.checkIfSpare = function() {
  if (this.shot === 2 && this.score === 10) {
    this.isSpare = true;
  }
};
