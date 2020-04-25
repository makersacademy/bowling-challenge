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
    this.isStrike();
    
}

Bowlingcard.prototype.isStrike = function() {
  // if roll is odd and score is ten
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 1] === 10) {  //if the preceding this.roll was 10
    this.rollScores.push(0);
    this.roll++; 
  }
}

Bowlingcard.prototype.strikeScore = function() {
  //if this is an odd roll
  //was the roll before the one befoere also a strike?
  //if the current roll is odd and the 4 rolls before is 10
  //if so, add these points to that one too
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 3] === 10 && this.rollScores[this.roll - 5] === 10) {
    this.rollScores[this.roll - 5] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3] + this.rollScores[this.roll - 5];
  //if this is an odd roll
  //was the roll before a strike?
  //if so, add these points to that one
  } else if (this.roll % 2 != 0 && this.rollScores[this.roll - 3] === 10) {
    this.rollScores[this.roll - 3] = this.rollScores[this.roll - 1] + this.rollScores[this.roll - 3]; 
} 
}
    
    //else if {
  // was the roll before the one before me a strike? 
  // => if this is an even roll, was the previous frame a strike
  // if so, add these points there too



Bowlingcard.prototype.frameNumber = function() {
  if (this.rollScores.length < 3) {
    this.frame = 1;
  } else if (this.rollScores.length > 2 && this.rollScores.length < 5) {
    this.frame = 2;
  }
}

