'use strict';

function Bowlingcard () {
  this.score = 0; //cummulative points
  this.roll = 0;//cummulative rolls
  this.rollScores = []; //individual points
  this.frameArray = [];//individual frames
}

Bowlingcard.prototype.enterScore = function(number) {
  this.endGame();
  if (number > 10) {
    this.inputError();
  } else {
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
    console.log("what?");
}

Bowlingcard.prototype.isStrike = function() {
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 1] === 10) {  
    this.rollScores.push(0);
    this.roll++; 
  }
}

Bowlingcard.prototype.strikeScore = function() {
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 3] === 10 && this.rollScores[this.roll - 5] > 9) {
    this.rollScores[this.roll - 5] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 5];
    this.rollScores[this.roll - 3] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3]; 
  } else if (this.roll % 2 != 0 && this.rollScores[this.roll - 3] === 10) {
  this.rollScores[this.roll - 3] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3];
  } else if (this.roll % 2 === 0 && this.rollScores[this.roll - 4] > 9) {
    this.rollScores[this.roll - 4] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 4]; 
  }
}

Bowlingcard.prototype.spareScore = function() {
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 2] === 10) {
    this.rollScores[this.roll - 2] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 2]; 
  } else if (this.roll % 2 === 0 && this.rollScores[this.roll - 1] === 0 && this.rollScores[this.roll - 2] === 10) {
    this.rollScores[this.roll - 3] = this.rollScores[this.roll - 2] + this.rollScores[this.roll - 3]; 
  }
}

Bowlingcard.prototype.frameArrayAdd = function() {
  if (this.roll % 2 != 0) {
    this.frameArray.push(this.rollScores[this.roll -1]);
  } else if (this.roll % 2 === 0) {
    this.frameArray[this.frameArray.length -1] = this.frameArray[this.frameArray.length -1] + this.rollScores[this.roll - 1]; 
  }
}

Bowlingcard.prototype.endGame = function() {
  if (this.rollScores.length === 20 && this.rollScores[this.roll - 2] != 10) {
    console.log(`The end. Your total score was ${this.score}`)
  } else if (this.rollScores.length === 20 && this.rollScores[this.roll - 2] === 10) {
    console.log("You still have 2 rolls.")
  } else if (this.rollScores.length === 22) {
    console.log(`The end. Your total score was ${this.score}`)
  }
}

