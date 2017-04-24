'use strict';
function Game() {
  this.rolls = 0;
  this.totalScore = 0;
  this.strikePoints = 10;
  this.pinsRemaining = 10;
  this.currentFrameNumber = 1;
  this.currentFrame = [];
  this.cumulativeFrameScores = [];
  this.frameHistory = [];
  this.isASpare = false;
  this.isAStrike = false;
}

Game.prototype.roll = function(points) {
  if(this.currentFrameNumber > 10) {
    throw new Error("The game has finished. Start a new game to throw again.");
  }
  if(points < 0 || points > 10) {
    throw new Error("Invalid roll: points must be between 0-10")
  }
  if(points > this.pinsRemaining) {
    throw new Error("Invalid roll: only " + this.pinsRemaining + " pins remaining")
  }
  this.rolls += 1;
  this.updatePinsRemaining(points);
  this.addToCurrentFrame(points);
  this.isNextFrame();
};

Game.prototype.updatePinsRemaining = function(points) {
  this.pinsRemaining -= points;
  if (this.pinsRemaining === 0) {
    this.strikeOrSpare();
  }
};

Game.prototype.strikeOrSpare = function() {
  if(this.getNextRoll() === 1) {
    this.isASpare = true;
  } else {
    this.isAStrike = true;
    if(this.isTenthFrame() !== true) { this.rolls += 1; }
  }
};

Game.prototype.addToCurrentFrame = function(points) {
  this.currentFrame.push(points);
  if ((this.getNextRoll() === 1 && this.tenthFrameBonus() !== true)|| this.rolls === 21) {
    this.addCurrentFrameToFrameHistory(this.currentFrame);
    if (this.consecutiveStrikes() !== true) {
      this.updateScores();
    } else if(this.currentFrameNumber > 2){
      this.calculateSecondPreviousFrameScore();
    }
  } else if(this.spareInPreviousFrame() === true) {
    this.calculatePreviousFrameScore();
  } else if(this.twoPrecedingStrikes() === true) {
    this.calculateSecondPreviousFrameScore();
  }
};

Game.prototype.getNextRoll = function() {
  if(this.rolls % 2 === 0) { return 1; }
  else { return 2; }
};

Game.prototype.getFirstRollScore = function() {
  return this.currentFrame[0];
};

Game.prototype.getSecondRollScore = function() {
  return this.currentFrame[1];
};

Game.prototype.isNextFrame = function() {
  if(this.getNextRoll() === 2 && this.rolls < 21 && this.isAStrike === false) {
    return;
  }
  if(this.tenthFrameBonus() === true && this.rolls < 21) {
    this.prepareNextFrame();
    return;
  }
  this.prepareNextFrame();
  this.currentFrameNumber += 1;
};

Game.prototype.tenthFrameBonus = function() {
  if(this.isTenthFrame() === true && (this.isASpare === true || this.isAStrike === true || this.currentFrame[0] === 10)) {
      return true;
  }
};

Game.prototype.addCurrentFrameToFrameHistory = function(frame) {
  this.frameHistory.push(frame);
};

Game.prototype.prepareNextFrame = function() {
  if(this.tenthFrameBonus() !== true) { this.resetCurrentFrame(); }
  this.resetPins();
  this.resetStrikeOrSpare();
};

Game.prototype.updateScores = function(){
  if(this.strikeInPreviousFrame() === true){ this.calculatePreviousFrameScore(); }
  if((this.isAStrike !== true && this.isASpare !== true) || this.rolls === 21){
    this.calculateFrameScore();
    this.updateTotalScore();
  }
};

Game.prototype.calculateFrameScore = function() {
    var frameScore;
    if (this.rolls === 21) { frameScore = this.frameHistory[9][0] + this.frameHistory[9][1] + this.frameHistory[9][2] }
    else { frameScore = this.getFirstRollScore() + this.getSecondRollScore();}
    this.updateCumulativeFrameScore(frameScore);
};

Game.prototype.calculatePreviousFrameScore = function() {
  if(this.rolls === 21 || (this.rolls === 20 && this.strikeInPreviousFrame() !== true)) { return; }
  var previousFrameScore = this.strikePoints + this.getFirstRollScore()
  if(this.getSecondRollScore() !== undefined){
    previousFrameScore += this.getSecondRollScore();
  }
  this.updateCumulativeFrameScore(previousFrameScore);
};

Game.prototype.calculateSecondPreviousFrameScore = function() {
  if(this.twoPrecedingStrikes() === true) {
    var secondPreviousFrameScore = 2*(this.strikePoints) + this.getFirstRollScore();
    this.updateCumulativeFrameScore(secondPreviousFrameScore);
  }
};

Game.prototype.strikeInPreviousFrame = function() {
  if(this.currentFrameNumber === 1){
    return false;
  } else if(this.frameHistory[this.currentFrameNumber - 2][0] === 10) {
    return true;
  }
};

Game.prototype.consecutiveStrikes = function() {
  if(this.isAStrike === true && this.strikeInPreviousFrame() === true) {
    return true;
  }
};

Game.prototype.twoPrecedingStrikes = function() {
  if(this.currentFrameNumber < 3){
    return false;
  } else if(this.frameHistory[this.currentFrameNumber-2][0] === 10 && this.frameHistory[this.currentFrameNumber-3][0] === 10) {
    return true;
  }
};

Game.prototype.spareInPreviousFrame = function() {
  if(this.currentFrameNumber === 1){
    return false;
  } else if((this.frameHistory[this.currentFrameNumber - 2][0] + this.frameHistory[this.currentFrameNumber - 2][1]) === 10) {
    return true;
  }
};

Game.prototype.updateCumulativeFrameScore = function(frameScore) {
  if(typeof this.cumulativeFrameScores[0] === 'undefined') {
    this.cumulativeFrameScores.push(frameScore);
  } else {
    console.log(frameScore);
    this.cumulativeFrameScores.push(this.cumulativeFrameScores[(this.cumulativeFrameScores.length -1)] + frameScore);
  }
  this.updateTotalScore();
};

Game.prototype.isTenthFrame = function() {
  if(this.currentFrameNumber === 10){ return true; }
}

Game.prototype.updateTotalScore = function () {
  this.totalScore = this.cumulativeFrameScores[this.cumulativeFrameScores.length -1]
};

Game.prototype.resetCurrentFrame = function() {
  this.currentFrame = [];
};

Game.prototype.resetPins = function() {
  this.pinsRemaining = 10;
};

Game.prototype.resetStrikeOrSpare = function() {
  this.isASpare = false;
  this.isAStrike = false;
};
