'use strict';

function Bowlingcard () {
  this.score = 0; //cummulative points
  this.roll = 0;//cummulative rolls
  this.frame = 0; //cummulative frames
  this.rollScores = []; //individual points
  this.inGameFrames = [];
}

Bowlingcard.prototype.enterScore = function(number) {
 /*
  if (number === 10) {
    this.rollScores.push(number);
    this.score += number;
    this.roll++;
    this.rollScores.push(0);
    this.roll++; 
  }
  */
  this.rollScores.push(number);
  this.score += number;
  this.roll++;
}

Bowlingcard.prototype.frameNumber = function() {
  if (this.rollScores.length < 3) {
    this.frame = 1;
  } else if (this.rollScores.length > 2 && this.rollScores.length < 5) {
    this.frame = 2;
  }
}

//I do not think you need ths one and the one above
Bowlingcard.prototype.gameFrame = function() {
  if (this.frame === 1) {
    this.inGameFrames.push(1);
  } else if (this.frame === 2) {
    this.inGameFrames.push(1, 2);
  }
}

Bowlingcard.prototype.framePoints = function(rollOne, rollTwo) {
  let points = rollOne + rollTwo;
  return points;
}

Bowlingcard.prototype.strike = function() {
  this.rollScores.push(0);
  this.roll++; 
}