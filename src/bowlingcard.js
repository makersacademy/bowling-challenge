'use strict';

function Bowlingcard () {
  this.score = 0; //cummulative points
  this.roll = 0;//cummulative rolls
  this.frame = 0; //cummulative frames
  this.rollScores = []; //individual points
  this.frameArray = [];//individual frames
}

Bowlingcard.prototype.enterScore = function(number) {
    this.rollScores.push(number);
    this.score += number;
    this.roll++;
    this.strikeScore();
    this.spareScore();
    this.isStrike();
    
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

