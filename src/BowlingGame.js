'use strict';

function BowlingGame() {
    this.rolls = [];
    this.score = 0;
    this.turn = 0;
    this.frame = 0;
    this.runningTotal = 0;
    this.rollNum = 0;
    this.scoreCard = [];
  }


  BowlingGame.prototype.roll = function(pinsKnocked) {
    this.rolls.push(pinsKnocked);
    this.calcRollNum()
    this.calcFrame()
    this.runningTotal += pinsKnocked;
    this.addScoreToCard(pinsKnocked)
  }


  BowlingGame.prototype.calculateScore = function() {
    this.turn = 0;
    for (var frameNum = 1; frameNum <= 10; frameNum ++) {
      if (this.turnIsStrike()){
        this.calcStrikeScore();
        this.turn += 1;
      }
      else if (this.turnIsSpare()) {
        this.calcSpareScore();
        this.turn += 2;
      }
      else {
        this.calcRegularScore();
        this.turn += 2;
      }
    }
  }
  
  BowlingGame.prototype.turnIsStrike = function() {
   return this.rolls[this.turn] === 10;
  }

  BowlingGame.prototype.turnIsSpare = function() {
   return (this.rolls[this.turn] + this.rolls[this.turn + 1])  === 10;
  }
  BowlingGame.prototype.calcStrikeScore = function() {
    this.score += (this.rolls[this.turn] + this.rolls[this.turn + 1] + this.rolls[this.turn + 2]);
  }

 BowlingGame.prototype.calcRegularScore = function() {
    this.score += this.rolls[this.turn] + this.rolls[this.turn + 1];
 } 

  BowlingGame.prototype.calcSpareScore = function() {
    this.score += (this.rolls[this.turn] + this.rolls[this.turn + 1] + this.rolls[this.turn + 2]);
  }

  BowlingGame.prototype.calcFrame = function() {
    if (this.rollNum === 1) {
      this.frame += 1
    } 
  }

  BowlingGame.prototype.calcRollNum = function() {
    if (this.rollNum < 2 ) {
      this.rollNum += 1
    }
    else {
      this.rollNum = 1
    }
  }

  BowlingGame.prototype.addScoreToCard = function(pinsKnocked) {
    this.scoreCard[this.turn] = {};
    this.scoreCard[this.turn].frame = this.frame;
    this.scoreCard[this.turn].rollNum = this.rollNum;
    this.scoreCard[this.turn].pinsKnocked = pinsKnocked;
    this.scoreCard[this.turn].score = this.runningTotal;
    this.turn += 1;
  }
    
   
module.exports = BowlingGame
