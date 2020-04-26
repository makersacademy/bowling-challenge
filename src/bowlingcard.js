'use strict';

function Bowlingcard () {
  this.score = 0;
  this.roll = 0;
  this.rollScores = [];
  this.frameArray = [];
}

Bowlingcard.prototype.enterScore = function(number) {
  //can this be a while loop instead?
  this.endGame();
  //this test is failing but seems to work, check test
  if (number > 10) {
    return this.inputError();
  } else {
    //lines 17 - 18 can be its own method of like the rest below it
    this.rollScores.push(number);
    this.score += number;
    this.roll++;
    this.frameArrayAdd();
    this.strikeScore();
    this.spareScore();
    this.isStrike();
  }
}

Bowlingcard.prototype.inputError = function() {
    return "what?"
}

Bowlingcard.prototype.isStrike = function() {
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 1] === 10) {  
    this.rollScores.push(0);
    this.roll++; 
  }
}

Bowlingcard.prototype.strikeScore = function() {
  const strike1FrameBeforeRoll1 = this.roll % 2 != 0 && this.rollScores[this.roll - 3] === 10;
  const strike1FrameBeforeRoll2 = this.roll % 2 === 0 && this.rollScores[this.roll - 4] > 9;
  const strike2FramesBefore = strike1FrameBeforeRoll1 && this.rollScores[this.roll - 5] > 9;
  if (strike2FramesBefore) {
    //can this be refactored into a finction?
    this.rollScores[this.roll - 5] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 5];
    this.rollScores[this.roll - 3] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3]; 
  } else if (strike1FrameBefore) {
  this.rollScores[this.roll - 3] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3];
  } else if (strike1FrameBeforeRoll2) {
    this.rollScores[this.roll - 4] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 4]; 
  }
}

Bowlingcard.prototype.spareScore = function() {
  const previousRollSpare = this.roll % 2 != 0 && this.rollScores[this.roll - 2] === 10;
  const addSpare = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 2];
  if (previousRollSpare) {
    this.rollScores[this.roll - 2] = addSpare; 
  } 
}

Bowlingcard.prototype.frameArrayAdd = function() {
  const frameTotal = this.frameArray[this.frameArray.length - 1] + this.rollScores[this.roll - 1];
  if (this.roll % 2 != 0) {
    this.frameArray.push(this.rollScores[this.roll -1]);
  } else if (this.roll % 2 === 0) {
    this.frameArray[this.frameArray.length -1] = frameTotal; 
  }
}

Bowlingcard.prototype.endGame = function() {
  const noMoreRolls = this.rollScores.length === 20 && this.rollScores[this.roll - 2] != 10;
  const twoMoreRolls = this.rollScores.length === 20 && this.rollScores[this.roll - 2] === 10;
  const endOfGame = this.rollScores.length === 22;
  
  if (noMoreRolls) {
    console.log(`The end. Your total score was ${this.score}`)
  } else if (twoMoreRolls) {
    console.log("You still have 2 rolls.")
  } else if (endOfGame) {
    console.log(`The end. Your total score was ${this.score}`)
  }
}

