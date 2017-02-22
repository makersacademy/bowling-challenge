"use strict";

function Frame(startingArray) {
  this.startArray = startingArray || [[null,null], [null,null]]
  this.frameScore = [this.startArray[0], this.startArray[1],  [null,null]];

  this.record = function(pinCount) {
    for(var i in this.frameScore) {
      if(this.frameScore[i][0] === null) {
        this.frameScore[i][0] = pinCount;

        if(pinCount === 10) {
          this.frameScore[i][1] = 0;
        }
        break;
      }
      else if(this.frameScore[i][1] === null) {
        this.frameScore[i][1] = pinCount;
        break;
      }
    }
  }

  this.total = function() {
    this.totalScore = 0;
    for(var i in this.frameScore) {
      this.totalScore += (this.frameScore[i][0] + this.frameScore[i][1]);
    }
    return this.totalScore;
  }

  this.carryOver = function() {
    return [this.frameScore[1], this.frameScore[2]];
  }

  this.frameComplete = function(frame) {
    return (this.frameScore[frame][0] !== null &&
      this.frameScore[frame][1] !== null &&
      this.frameScore[frame][0] + this.frameScore[frame][1] !== 10) ||
      this.allFramesComplete(frame);
  }

  this.allFramesComplete = function(frame) {
    return this.frameScore[frame][0] + this.frameScore[frame][1] === 10 &&
      this.frameScore[frame][0] !== 10 &&
      this.frameScore[frame + 1][0] !== null;
  }

  this.isComplete = function() {
    return this.frameComplete(0) || this.frameComplete(1) || this.frameScore[2][1] !== null;
  }
}
