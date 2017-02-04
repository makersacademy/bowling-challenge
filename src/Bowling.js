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
  if (this.checkForStrike() || this.checkForSpare()){this.addBonus()}
  this.score[this.frame] = this.totalRolls[this.frame][0] + this.totalRolls[this.frame][1]
  if (this.bonus.length != 0 && this.checkForStrike()==false && this.checkForSpare()==false){this.addBonusScores()}
  if (this.bonus.length >= 3){this.addSingleBonusScores()}
}

Bowling.prototype.addBonus = function(){
  this.score[this.frame] = 10;
  if (this.checkForStrike()){return this.bonus.push("X")}
  if (this.checkForSpare ()){return this.bonus.push("/")}
}

Bowling.prototype.addBonusScores = function(){
  console.log("Im in addBonusScore and the bonus length = "+this.bonus.length)
  for(var i=0; i < this.bonus.length; i++){
    console.log("IM HERE")
    if (this.bonus[this.bonus.length-i-1]==="/"){this.addSpareScore(i)}
    if (this.bonus[this.bonus.length-i-1]==="X"){this.addStrikeScore(i)}
  }
  this.bonus = [];
  console.log("The bonus now equals "+this.bonus)
}

Bowling.prototype.addSingleBonusScores = function(){
  console.log("Im in addSingleBonusScores")
  if (this.bonus[0]==="/"){this.addSpareScore(1)}
  if (this.bonus[0]==="X"){this.addStrikeScore(1)}
  this.bonus.shift();
  console.log("The bonus now equals "+this.bonus)
}

Bowling.prototype.addStrikeScore = function(i){
  console.log("i = "+i)
  console.log("frame = "+this.frame)
  this.score[this.frame-i-1] += this.totalRolls[this.frame-i][0] + this.totalRolls[this.frame-i][1]
  // console.log("SCORE = "+this.score[this.frame-i-1])
  if (this.totalRolls[this.frame-i][1] === null){
    // console.log("IM HERE")
    this.score[this.frame-i-1] += this.totalRolls[this.frame-(i-1)][0]
  }
  // console.log("SCORE = "+this.score[this.frame-i-1])
  //this.bonus.shift();
  // console.log("The bonus now equals "+this.bonus)
}

Bowling.prototype.addSpareScore = function(i){
  this.score[this.frame-i-1] += this.totalRolls[this.frame-i][0]
  // this.bonus.shift();
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
  var result = [this.score[0]]
  for (var i = 1; i < this.score.length; i++){
    result.push(this.score[i]+result[i-1])
  }
  return result
}
