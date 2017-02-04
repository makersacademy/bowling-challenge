'use strict';

function Bowling(){
  this.frame = 1;
  this.totalRolls = [];
  this.rolls = [];
  this.bonus = [];
  this.score = 0;
}

Bowling.prototype.play = function(){
  var knockedPins = this.knockPins();
  this.updateRolls(knockedPins);
  var returnValue = this.returnValue(knockedPins);
  this.finishRoll();
  this.updateScore();
  return returnValue;
}

Bowling.prototype.knockPins = function(){
  return Math.floor(Math.random() * 11);
}

Bowling.prototype.updateRolls = function(knockedPins){
  this.rolls.push(knockedPins);
}

Bowling.prototype.finishRoll = function(){
  if (this.rolls.length < 2 && !this.checkForStrike()){return}
  this.totalRolls.push(this.rolls);
  this.nextFrame();
  console.log(this.totalRolls)
}

Bowling.prototype.nextFrame = function(){
  this.rolls = [];
  this.frame ++;
}

Bowling.prototype.updateScore = function(){

  // if (this.rolls[0] + this.rolls[1] === 10){this.bonus.push("/")}
  // if (this.rolls[0] === 10){this.bonus.push("X")}
  // if (this.rolls.length === 2 || this.rolls[0] === 10){
  //   this.totalRolls.push(this.rolls);
  //   this.rolls = [];
  //   this.frame ++;
  // }
  //
  // console.log(this.bonus)
}

Bowling.prototype.checkForStrike = function(){
  if (this.rolls[0] === 10){return true}else{return false}
}

Bowling.prototype.checkForSpare= function(){
  if (this.rolls[0] + this.rolls[1] === 10){return true}else{return false}
}

Bowling.prototype.returnValue = function(knockedPins){
  if (this.checkForSpare ()){return "/"}
  if (this.checkForStrike()){return "X"}
  return String(knockedPins)
}

Bowling.prototype.sumArray = function(arrayName){
  var result = 0;
  for (var i=0; i<arrayName.length; i++){result += arrayName[i]}
  return result;
}
