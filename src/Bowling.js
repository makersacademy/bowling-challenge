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
  for(var i=1;i<=this.bonus.length+1;i++){
    if (this.bonus[0]==="/"){this.addSpareScore(i)}
    if (this.bonus[0]==="X"){this.addStrikeScore(i)}
  }
}

Bowling.prototype.addStrikeScore = function(i){
  console.log("frame = " + this.frame)
  console.log("i = " +i)
  // console.log("ROLL 1 = " + this.totalRolls[this.frame-2-i])
  // console.log("SCORE 1 = " + this.score[this.frame-2-i])
  // console.log("ROLL 2 = " + this.totalRolls[this.frame-1-i])
  // console.log("SCORE 2 = " + this.score[this.frame-1-i])
  // console.log("Im in addStrikeScore")
  this.score[this.frame-i] = 10 + this.totalRolls[this.frame+(i-1)][0] + this.totalRolls[this.frame+(i-1)][1]

  if (this.totalRolls[this.frame-i][1] != null){
    this.score[this.frame-i] += this.totalRolls[this.frame][0]
  }
  // if (this.totalRolls[this.frame-i-1][1] != null){
  //   this.score[this.frame-i-1] += this.totalRolls[this.frame-i][1]}
  // else {
  //   console.log("IM HERE AND i = " + i)
  //   this.score[this.frame-i-1] += this.totalRolls[this.frame-i][1]
  // }
  //   console.log(this.totalRolls["DATA = "+ this.frame-1-i][1])
  //   // this.score[this.frame-i] += this.totalRolls[this.frame-1-i][1]
  // }
  // else {
  //   this.score[this.frame-1-i] += this.totalRolls[this.frame-1-i][1]
  // }
  //
  //
  //
  // this.score[this.frame-1-i] += this.score[this.frame-2-i]
  // this.score[this.frame-i] += this.score[this.frame-1-i]
  this.bonus.pop();
}

Bowling.prototype.addSpareScore = function(i){
  // console.log("Im in the addSpareScore")
  this.score[this.frame-2-i] = 10 + this.totalRolls[this.frame-1-i][0]
  // this.score[this.frame-1-i] += this.score[this.frame-2-i]
  // this.score[this.frame-i] += this.score[this.frame-1-i]
  this.bonus.pop();
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
