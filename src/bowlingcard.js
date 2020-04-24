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
  if (this.roll % 2 != 0 && this.rollScores[this.roll - 1] === 10) {
    this.rollScores.push(NaN);
    this.roll++; 
    }
}

Bowlingcard.prototype.frameNumber = function() {
  if (this.rollScores.length < 3) {
    this.frame = 1;
  } else if (this.rollScores.length > 2 && this.rollScores.length < 5) {
    this.frame = 2;
  }
}



/*
//Build a dictionary with frame number as key and 
//the rolls as the values
//I am not sure you need this at all.
//all you want is to have an array of arrays in frameArray
Bowlingcard.prototype.gameFrame = function() {
  if (this.frame === 1) {
    this.frameArray.push(this.rollScores[0], this.rollScores[1]);
  } else if (this.frame === 2) {
    this.frameArray.push(this.rollScores[2], this.rollScores[3]);
  } // [[4, 5],[10, NaN], [8, 1]...]
}

Bowlingcard.prototype.framePoints = function(arr) {
  arr = this.frameArray;
  //for Frame with strike, find the next two valid rolls and add
  //for frame in frames if index 0 === 10 do...
  
  for (index = 0; index < arr.length; index++) {
    
  }
  
  let points = rollOne + rollTwo;
  return points;
}
*/

