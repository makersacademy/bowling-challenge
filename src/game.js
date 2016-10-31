(function(){'use strict';}());

function Game(){
  var frames;
  this.frames = [];
  var gameOver;
  this.gameOver = false;
  var totalScore;
  this.totalScore = 0;
}

Game.prototype.newGame = function(){
  this.frames = [];
};

Game.prototype.addFrame = function(frameScore){
  if (this.frames.length === 10){
    throw new Error("Game over");
  }
    this.frames.push(frameScore);
    if (this.frames.length === 10){
      this.gameOver = true;
    }
};

Game.prototype.showFrame = function(frameNo){
  return this.frames[frameNo-1];
};

Game.prototype.currentRollNumber = function(){
 return parseInt(this.frames.length);
}

Game.prototype.showAllFrames = function(){
  return this.frames;
};

// XXXXXXXXXXXXXXXXXXXXXXXXXXX Roll XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
function Roll(){
  var roll, rollComplete, lookAhead, score;
  this.roll = [];
  // var rollComplete;
  this.rollComplete = false;
  // var rollComplete;
  this.lookAhead = 0;
  this.score = 0;
}

Roll.prototype.addRoll = function(rollScore){
  this.checkForRollErrors(rollScore);
  this.roll.push(rollScore);
  if (this.roll.length === 2){
    this.rollComplete = true;
    this.score = this.addScore2Rolls();
  }
  if ((this.roll.length === 1)&&(this.roll[0] === 10)){
    this.rollComplete = true;
    this.score = this.addScore1Roll();
    this.lookAhead = 2;
  }
};

Roll.prototype.addScore2Rolls = function(){
  return this.roll[0]+this.roll[1];
}

Roll.prototype.addScore1Roll = function(){
  return this.roll[0];
}

Roll.prototype.showRoll = function(rollNo){
  return this.roll[rollNo-1];
};

Roll.prototype.checkForRollErrors = function(rollScore){
  if (this.roll.length >= 2) {
    throw new Error('There are a maximum of 2 rolls per frame');
  }
  if (this.roll.length === 1){
    if (this.roll[0] === 10){
      throw new Error('You cannot roll a second time if your 1st roll was a strike');
    }
    if ((rollScore + this.roll[0]) > 10){
      throw new Error("Score for 2 throws cannot exceed 10");
    }
  }
}
