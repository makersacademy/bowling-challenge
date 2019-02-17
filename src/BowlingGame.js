"use strict";

function BowlingGame() {
  this.turn = 0;
  this.frame = 0;
  this.runningTotal = 0;
  this.rollNum = 0;
  this.scoreCard = [];
  this.isComplete = false;
}

BowlingGame.prototype.roll = function(pinsKnocked) {
  if (this.isComplete === false) {
    this.frame !== 10
      ? this.rollNormalFrame(pinsKnocked)
      : this.rollFinalFrame(pinsKnocked);
  }
};

BowlingGame.prototype.rollFinalFrame = function(pinsKnocked) {
  if (this.isTooManyPins(pinsKnocked)) {
    throw new Error("Too many pins");
  } else {
    this.calcFinalFrameRollNum();
    this.calcFinalFrameTotal(pinsKnocked);
    this.checkGameIsComplete(pinsKnocked);
    this.addScoreToCard(pinsKnocked);
  }
};

BowlingGame.prototype.rollNormalFrame = function(pinsKnocked) {
  if (this.isTooManyPins(pinsKnocked)) {
    throw new Error("Too many pins");
  } else {
    this.calcRollNum();
    this.calcFrame(pinsKnocked);
    this.calcRunningTotal(pinsKnocked);
    this.addScoreToCard(pinsKnocked);
  }
};

BowlingGame.prototype.isTooManyPins = function(pinsKnocked) {
  return (
    this.rollNum !== 0 &&
    this.scoreCard[this.turn - 1].rollNum === 1 &&
    this.lastTurnIsStrike() === false &&
    pinsKnocked + this.scoreCard[this.turn - 1].pinsKnocked > 10
  );
};

BowlingGame.prototype.calcFrame = function(pinsKnocked) {
  if (pinsKnocked === 10 || this.rollNum === 1) {
    this.frame += 1;
  }
};

BowlingGame.prototype.calcRollNum = function() {
  if (this.rollNum === 0) {
    this.rollNum += 1;
  } else if (this.lastTurnIsStrike() || this.rollNum === 2) {
    this.rollNum = 1;
  } else {
    this.rollNum += 1;
  }
};

BowlingGame.prototype.calcFinalFrameRollNum = function() {
  if (this.scoreCard[this.turn - 1].frame === 9) {
    this.rollNum = 1;
  } else {
    this.rollNum += 1;
  }
};

BowlingGame.prototype.calcRunningTotal = function(pinsKnocked) {
  this.runningTotal += pinsKnocked;
  this.calcLastTurnStrikeBonus(pinsKnocked);
  this.calcSecondLastStrikeBonus(pinsKnocked);
  this.calcSpareBonus(pinsKnocked);
};

BowlingGame.prototype.calcLastTurnStrikeBonus = function(pinsKnocked) {
  if (this.turn !== 0 && this.rollNum !== 3 && this.lastTurnIsStrike()) {
    this.runningTotal += pinsKnocked;
  }
};

BowlingGame.prototype.calcSecondLastStrikeBonus = function(pinsKnocked) {
  if (this.turn > 1 && this.rollNum !== 3 && this.secondLastTurnIsStrike()) {
    this.runningTotal += pinsKnocked;
  }
};

BowlingGame.prototype.calcSpareBonus = function(pinsKnocked) {
  if (this.turn > 1 && this.lastFrameIsSpare()) {
    this.runningTotal += pinsKnocked;
  }
};

BowlingGame.prototype.calcFinalFrameTotal = function(pinsKnocked) {
  this.runningTotal += pinsKnocked;
  if (this.rollNum < 3 && this.secondLastTurnIsStrike()) {
    this.runningTotal += pinsKnocked;
  } else if (this.rollNum < 2 && this.lastTurnIsStrike()) {
    this.runningTotal += pinsKnocked;
  }
};

BowlingGame.prototype.lastTurnIsStrike = function() {
  return this.scoreCard[this.turn - 1].pinsKnocked === 10;
};

BowlingGame.prototype.secondLastTurnIsStrike = function() {
  return this.scoreCard[this.turn - 2].pinsKnocked === 10;
};

BowlingGame.prototype.lastFrameIsSpare = function() {
  return (
    this.rollNum === 1 &&
    this.scoreCard[this.turn - 1].pinsKnocked +
      this.scoreCard[this.turn - 2].pinsKnocked ===
      10
  );
};

BowlingGame.prototype.addScoreToCard = function(pinsKnocked) {
  this.scoreCard[this.turn] = {};
  this.scoreCard[this.turn].frame = this.frame;
  this.scoreCard[this.turn].rollNum = this.rollNum;
  this.scoreCard[this.turn].pinsKnocked = pinsKnocked;
  this.scoreCard[this.turn].score = this.runningTotal;
  this.turn += 1;
};

BowlingGame.prototype.checkGameIsComplete = function(pinsKnocked) {
  if (
    this.isFinalRollNoBonus() &&
    this.isNotStrike(pinsKnocked) &&
    this.isNotBonusSpare(pinsKnocked) &&
    this.lastTurnIsStrike() === false
  ) {
    this.isComplete = true;
  } else if (this.isFinalBonusRoll()) {
    this.isComplete = true;
  }
};

BowlingGame.prototype.isFinalBonusRoll = function() {
  return this.rollNum === 3;
};

BowlingGame.prototype.isNotBonusSpare = function(pinsKnocked) {
  return this.scoreCard[this.turn - 1].pinsKnocked + pinsKnocked !== 10;
};
BowlingGame.prototype.isNotStrike = function(pinsKnocked) {
  return pinsKnocked !== 10;
};

BowlingGame.prototype.isFinalRollNoBonus = function() {
  return this.rollNum === 2;
};

module.exports = BowlingGame;
