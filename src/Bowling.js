'use strict';

function Bowling(){
  this.frame = 0;
  this.totalRolls = [];
  this.rolls = [null,null];
  this.rollsNumber = 0;
  this.bonus = [];
  this.score = [];
}

Bowling.prototype.play = function(knockedPins=null){
  if (knockedPins===null){var knockedPins = this.knockPins()}
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
  this.score[this.frame] = 0;
  if (this.checkForStrike()){return this.bonus.push("X")}
  if (this.checkForSpare ()){return this.bonus.push("/")}
  this.score[this.frame] = this.totalRolls[this.frame][0] + this.totalRolls[this.frame][1]
  if (this.bonus.length != 0){
    this.addBonusScores()}
  else {
    //this.score[this.frame] = this.score[this.frame-1] + this.totalRolls[this.frame-1][0] + this.totalRolls[this.frame-1][1]
  }
}

Bowling.prototype.addBonusScores = function(){
  console.log(this.bonus)
  console.log("BONUS LENGTH = " + this.bonus.length)
  console.log(this.totalRolls)
  for(var i=0; i < this.bonus.length; i++){
    if (this.bonus[this.bonus.length-i-1]==="/"){this.addSpareScore(i)}
    if (this.bonus[this.bonus.length-i-1]==="X"){this.addStrikeScore(i)}
  }
  this.bonus = [];
}

Bowling.prototype.addStrikeScore = function(i){
  // console.log("frame = " + this.frame)
  console.log("Im in STRIKE")
  console.log("i = " +i)
  console.log("currect roll = " + this.totalRolls[this.frame-i])


  this.score[this.frame-i-1] = 10 + this.totalRolls[this.frame-i][0] + this.totalRolls[this.frame-i][1]
  if (this.totalRolls[this.frame-i][1] === null){
    console.log("IM HERE AND i = "+i)
    this.score[this.frame-i-1] += this.totalRolls[this.frame-(i-1)][0]
  }

  // this.bonus.pop();
}

Bowling.prototype.addSpareScore = function(i){
  console.log("Im in SPARE")
  console.log("i = " +i)
  console.log("currect roll = " + this.totalRolls[this.frame-i])
  // console.log("Im in the addSpareScore")
  this.score[this.frame-i-1] = 10 + this.totalRolls[this.frame-i][0]
  // this.score[this.frame-1-i] += this.score[this.frame-2-i]
  // this.score[this.frame-i] += this.score[this.frame-1-i]
  //this.bonus.pop();
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

Bowling.prototype.returnTotalScore = function(knockedPins){

}
