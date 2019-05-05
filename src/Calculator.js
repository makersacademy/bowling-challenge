'use strict';

function Calculator() {
  this.currentGame = undefined
  this.totalScore = 0
  this.eachScore = []
}

Calculator.prototype.scoreGame = function() {
  this.eachScore = []
  var i = 0;
  var frame = this.currentGame.frames[i];
  while (i < 10 && frame.isFinished && !this.cantScore(frame, i)){
    this.eachScore.push(this.frameScore(frame, i));
    i ++;
    frame = this.currentGame.frames[i];
  }
}

Calculator.prototype.frameScore = function(frame, index) {
  if(index === 9) { return this.ultimateFrame(frame) }
  if(frame.special === 'strike') { return this.strikeScore(frame, index) }
  if(frame.special === 'spare') { return this.spareScore(frame, index) }
  return (frame.firstRoll + frame.secondRoll)
}

Calculator.prototype.ultimateFrame = function(frame) {
  if(frame.firstRoll + frame.secondRoll < 10) {
    return frame.firstRoll + frame.secondRoll
  } else {
    return frame.firstRoll + frame.secondRoll + frame.thirdRoll
  }
}

Calculator.prototype.strikeScore = function(frame, index) {
  var frames = this.currentGame.frames
  if(frames[index+1].special === 'strike') {
    return(20 + frames[index+2].firstRoll)
  } else {
    return(10 + frames[index+1].firstRoll + frames[index+1].secondRoll)
  }
}

Calculator.prototype.spareScore = function(frame, index) {
  return(10 + this.currentGame.frames[index+1].firstRoll)
}

Calculator.prototype.cantScore = function(frame, index) {
  var frames = this.currentGame.frames
  var nextFrame = frames[index+1];
  if(frame.special === 'spare') {
    return (nextFrame.firstRoll === undefined);
  } else if(frame.special === 'strike') {
    if(nextFrame.special === 'strike') {
      return (frames[index+2].firstRoll === undefined);
    }
    return (nextFrame.secondRoll === undefined)
  }
  return false
}

Calculator.prototype.calcTotalScore = function() {
  if(this.eachScore.length === 0) {
    return 0
  } else {
    return this.eachScore.reduce((x, y) => x + y);
  }
}
