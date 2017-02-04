'use strict';

function Bowling(){
  this.frame = 1;
  this.totalRolls = [];
  this.rolls = [null,null];
  this.rollsNumber = 0;
  this.bonus = [];
  this.score = [];
}

Bowling.prototype.play = function(){
  var knockedPins = this.knockPins();
  this.updateRolls(knockedPins);
  var returnValue = this.returnValue(knockedPins);
  this.finishRoll();
  return returnValue;
}

Bowling.prototype.knockPins = function(){
  return Math.floor(Math.random() * 11);
}

Bowling.prototype.updateRolls = function(knockedPins){
  this.rolls[this.rollsNumber] = knockedPins;
  this.swapRoll();
  if (this.checkForStrike()){this.swapRoll()}
}

Bowling.prototype.swapRoll = function(){
  this.rollsNumber = Math.abs(-1 + this.rollsNumber);
}

Bowling.prototype.finishRoll = function(){
  if (this.rolls[1] === null && !this.checkForStrike()){return}
  this.totalRolls.push(this.rolls);
  this.updateScore();
  this.nextFrame();
}

Bowling.prototype.nextFrame = function(){
  this.rolls = [null,null];
  this.frame ++;
}

Bowling.prototype.updateScore = function(){
  if (this.checkForStrike()){return this.bonus.push("X")}
  if (this.checkForSpare ()){return this.bonus.push("/")}
  this.score[this.frame-1] = this.rolls[0] + this.rolls[1]
  if (this.bonus.length != 0){
    if (this.bonus[0]==="/"){this.addSpareScore()}
    if (this.bonus[0]==="X"){this.addStrikeScore()}
  }
}

Bowling.prototype.addStrikeScore = function(){
  this.score[this.frame-2] = 10 + this.totalRolls[this.frame-1][0] + this.totalRolls[this.frame-1][1]
}

Bowling.prototype.addSpareScore = function(){
  this.score[this.frame-2] = 10 + this.totalRolls[this.frame-1][0]
}

Bowling.prototype.checkForStrike = function(){
  if (this.rolls[0] === 10){return true}else{return false}
}

Bowling.prototype.checkForSpare= function(){
  if (this.rolls[0] + this.rolls[1] === 10){return true}else{return false}
}

Bowling.prototype.returnValue = function(knockedPins){
  if (this.checkForStrike()){return "X"}
  if (this.checkForSpare ()){return "/"}
  return String(knockedPins)
}
