'use strict';

function Player(scoreCard) {
  this.TOTALROUNDS = 10;
  this.roundNumber = 0;
  this.rollNumber = 0;
  this.gameOver = false;
  this.scoreCard = scoreCard;
};

Player.prototype.bowl = function(pinsKnockedDown) {
  if(this.gameOver) { return; }
  this.processRoll(pinsKnockedDown);
};

Player.prototype.processRoll = function(pinsKnockedDown) {
  this.scoreCard.store(pinsKnockedDown, this.roundNumber);
  if(this.isGameOver() && this.isLastRound()) { this.endGame(); }
  else if(this.isRoundOver(pinsKnockedDown) && !this.isLastRound()) { this.endTurn() }
  else { this.rollNumber += 1; }
};

Player.prototype.endTurn = function(pinsKnockedDown) {
  this.roundNumber += 1;
  this.rollNumber = 0;
};

Player.prototype.endGame = function() { this.gameOver = true; };

Player.prototype.currentRoll = function() {
  return this.scoreCard.getRound(this.roundNumber);
};

Player.prototype.getRoll = function(number) {
  return this.currentRoll()[number];
};

Player.prototype.isRoundOver = function() {
  if(this.rollNumber === 1 || this.getRoll(0) === 10) { return true; }
};

Player.prototype.isLastRound = function() {
  return (this.roundNumber + 1) === this.TOTALROUNDS
};

Player.prototype.isGameOver = function() {
  if((this.currentRoll().reduce(getSum) < 10 && this.rollNumber === 1) ||
      this.rollNumber === 2) {
    return true; }
};
