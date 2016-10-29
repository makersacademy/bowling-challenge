'use strict';
function Game(){
  var frames;
  this.frames = [];
  var gameOver;
  this.gameOver = false;
  // console.log("function Game###|: " + this);
};

Game.prototype.addFrame = function(frameScore){
  if (this.frames.length === 10){
    throw new Error("Game over");
  }
    this.frames.push(frameScore);
    if (this.frames.length === 10){
      this.gameOver = true;
    }
  // console.log("Game.prototype.addFrame###|: " + this);
};

Game.prototype.showFrame = function(frameNo){
  return this.frames[frameNo-1];
  // console.log("Game.prototype.showFrame###|: " + this);
};


// For verfication purposes only!!!
Game.prototype.showAllFrames = function(){
  return this.frames;
  // console.log("Game.prototype.showFrame###|: " + this);
};

// XXXXXXXXXXXXXXXXXXXXXXXXXXX Roll XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
function Roll(){
  var roll;
  this.roll = [];
  var rollComplete = false;
};

Roll.prototype.addRoll = function(rollScore){
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
  this.roll.push(rollScore);
  if ((this.roll.length === 2) || ((this.roll.length === 1)&&(this.roll[0] === 10))){
    this.rollComplete = true;
  }
};

Roll.prototype.showRoll = function(rollNo){
  return this.roll[rollNo-1];
};


Roll.prototype.checkForRollErrors = function(){

}
