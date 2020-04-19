'use strict';

function Bowlingcard () {
  this.score = 0; //cummulative points
  this.roll = 0;//cummulative rolls
  this.frame = 0; //cummulative frames
  this.rollScores = []; //individual points
  this.inGameFrames = [];
}

Bowlingcard.prototype.enterScore = function(number) {
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

Bowlingcard.prototype.gameFrame = function() {
  if (this.frame === 1) {
    this.inGameFrames.push(1);
  } else if (this.frame === 2) {
    this.inGameFrames.push(1, 2);
  }
}


