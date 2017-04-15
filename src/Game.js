'use strict';

function Game() {
  this.score = INITIAL_SCORE
  this.frame = INITIAL_FRAME
  this.rolls = INITIAL_ROLLS
  this.frameScore = 0
}

const INITIAL_SCORE = 0
const INITIAL_FRAME = 1
const INITIAL_ROLLS = 0

Game.prototype.getScore = function(){
  return this.score
}

Game.prototype.getFrameScore = function(){
  return this.frameScore
}

Game.prototype.getFrame = function(){
  return this.frame
}

Game.prototype.getRoll = function(){
  return this.rolls
}

Game.prototype.makeRoll = function(points){
  this.rolls += 1;
  this.frameScore += points;
  this.isNextFrame();
}

Game.prototype.isNextFrame = function(){
  if (this.rolls === 2){
    this.frame += 1;
    this.rolls = INITIAL_ROLLS;
  }
}


