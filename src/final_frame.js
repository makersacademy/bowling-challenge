'use strict';

function FinalFrame() {
  this.totalScore = 0;
  this.allowedTurns = 2;
  this.isStrike = false;
  this.isOver = false;
  this.isSpare = false;
  this.turn = []
  this.turnNumber = 1
  this.isOver = false
};

FinalFrame.prototype.addScore = function(skittles) {
   this.checkIfSpare(skittles);
   this.checkIfFirstStrike(skittles);
   this.checkForIllegalScore(skittles);
   this.totalScore += skittles;
   this.turn.push(skittles)
   this.turnNumber += 1
   this.checkIfOver();
};

FinalFrame.prototype.checkIfFirstStrike = function(skittles) {
  if (skittles === 10 && this.turnNumber === 1) {
    this.isStrike = true;
    this.totalScore = null
    this.workingScore += skittles
    this.addThirdTurn();
  }
};

FinalFrame.prototype.addThirdTurn = function() {
    this.allowedTurns = 3
};

FinalFrame.prototype.checkForIllegalScore = function(skittles) {
  if (this.isOver) {
    throw new Error('Game Over')
  }
  else if ((!this.isSpare && !this.isStrike && ((this.totalScore + skittles) > 10))) {
    throw new Error('Illegal Score');
  }
};

FinalFrame.prototype.checkIfSpare = function(skittles) {
  if (this.turnNumber === 2 && (this.totalScore + skittles) == 10) {
    this.isSpare = true
    this.addThirdTurn();
  }
};

FinalFrame.prototype.checkIfOver = function () {
  if (this.turnNumber > this.allowedTurns){
    this.isOver = true
  }
};
