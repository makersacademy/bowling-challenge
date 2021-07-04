"use strict";
function Game(){
  this.frames = {
    frame_1: 0,
    frame_2: 0,
    frame_3: 0,
    frame_4: 0,
    frame_5: 0,
    frame_6: 0,
    frame_7: 0,
    frame_8: 0,
    frame_9: 0,
    frame_10: 0
  };
  this.current_frame = 0;
  this.totalScore = 0;
  this.bowlOne = 0;
  this.bowlTwo = 0;
  this.pins = 0;
}

Game.prototype.addFrameScore = function(){
  if (this.bowlOne < 10){
  this.frames[Object.keys(this.frames)[this.current_frame]] = this.bowlOne + this.bowlTwo
}
  else if (this.bowlOne === 10){
    this.frames[Object.keys(this.frames)[this.current_frame]] += this.bowlOne
  }
  else if (this.bowlOne + this.bowlTwo === 10){
    this.frames[Object.keys(this.frames)[this.current_frame]] = this.bowlOne + this.bowlTwo
  }
}

Game.prototype.resetBowls = function(){
  this.bowlOne = 0;
  this.bowlTwo = 0;
}

Game.prototype.setPinsRange = function(number = this.pins){
  let remain = 0;
  if(number < 10){this.bowlOne = number; remain = 10 - this.bowlOne; this.bowlTwo = remain;}
}

Game.prototype.normalScore = function(){
  Object.values(this.frames)[this.current_frame] = Object.values(this.frames)[this.current_frame] + Object.values(this.frames)[this.current_frame - 1]
}

Game.prototype.strikeScore = function(){
    Object.values(this.frames)[this.current_frame ] = Object.values(this.frames)[this.current_frame + 1] + Object.values(this.frames)[this.current_frame + 2] 
}
