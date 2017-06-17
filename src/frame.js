"use strict";

function Frame() {
  this.rolls = [new Roll, new Roll];
  this.result;
  this.score = [0,0]
}

Frame.prototype.calculateFrameScore = function(rollsArray) {
  this.score[0] = rollsArray[0].score
  this.score[1] = rollsArray[1].score
};

Frame.prototype.results = function(scoreArray) {
  var score = scoreArray[0] + scoreArray[1];
    if (score === 10 && scoreArray[0]=== 10) {
    this.result = 'STRIKE'
  }
    else if (score === 10) {
      this.result = "SPARE"
    }
}

Frame.prototype.roll = function(rollsArray, index) {
  rollsArray[index].bowl(10 - this.score[0]);
}
