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
    this.isStrike();//was preceding roll a strike? if yes push 0 to current roll and
    this.strikeScore();//checks if roll before last was a strike and adds points
}

Bowlingcard.prototype.isStrike = function() {
  // if roll is odd and score is ten
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 1] === 10) {  //if the preceding this.roll was 10
    this.rollScores.push(0);
    this.roll++; 
  }
}

Bowlingcard.prototype.strikeScore = function() {
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 3] === 10 && this.rollScores[this.roll - 5] > 9) {
    this.rollScores[this.roll - 5] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3] + this.rollScores[this.roll - 5];
    this.rollScores[this.roll - 3] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3]; 
  } 
  else if (this.roll % 2 != 0 && this.rollScores[this.roll - 3] === 10) {
  this.rollScores[this.roll - 3] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3];
  } 
  else if (this.roll % 2 === 0 && this.rollScores[this.roll - 4] > 9) {
    this.rollScores[this.roll - 4] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 4]; 
  }
}

Bowlingcard.prototype.frameNumber = function() {
  if (this.rollScores.length < 3) {
    this.frame = 1;
  } else if (this.rollScores.length > 2 && this.rollScores.length < 5) {
    this.frame = 2;
  }
}

