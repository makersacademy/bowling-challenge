'use strict';

function Bowling(){
  this.frame = 1;
  this.totalRolls = [];
  this.rolls = [null,null];
  this.rollsNumber = 0;
  this.bonus = [];
  this.score = 0;
}

Bowling.prototype.play = function(){
  var knockedPins = this.knockPins();
  this.updateRolls(knockedPins);
  var returnValue = this.returnValue(knockedPins);
  this.finishRoll();
  // this.updateScore();
  return returnValue;
}

Bowling.prototype.knockPins = function(){
  return Math.floor(Math.random() * 11);
}

Bowling.prototype.updateRolls = function(knockedPins){
  this.rolls[this.rollsNumber] = knockedPins;
  this.rollsNumber = Math.abs(-1 + this.rollsNumber);
  // console.log(this.rolls);
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
  console.log(this.rolls)
  if (this.checkForStrike() || this.checkForSpare()){
    console.log("STRIKE OR SPARE")
    this.bonus.push("X")}
  else {
    console.log("NORMAL")
  }
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

Bowling.prototype.sumArray = function(arrayName){
  var result = 0;
  for (var i=0; i<arrayName.length; i++){result += arrayName[i]}
  return result;
}
