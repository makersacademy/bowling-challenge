'use strict'
/*jshint esversion: 6 */
/*jslint node: true */


function Game() {
  this.frame = [];
  this.roll = 0;
  this.scoreBoard = [];
  this.bonusTaken = 0;
}

var game = new Game()


Game.prototype.getFrame = function() {
  return this.frame
};

Game.prototype.getRoll = function() {
  return this.roll
};

Game.prototype.lastFrameBowled = function(){
  if (this.scoreBoard.length > 0){
    return this.scoreBoard[this.scoreBoard.length - 1];
  }else {
    return [];
  }
};

Game.prototype.beforeLastFrameBowled = function(){
  if (this.scoreBoard.length > 1){
    return this.scoreBoard[this.scoreBoard.length -2];
  }
  else {
    return [];
  }
}
Game.prototype.sumFrame = function(frame) {
  return frame.reduce((a, b) => a + b, 0);
};

Game.prototype.isStrike = function(frame){
  if (frame.length === 2 && frame[0] === 10){
    return true;
  }else {
    return false;
  }
};

Game.prototype.isSpare = function(frame){
  if (frame.length === 2 && this.sumFrame(frame) === 10 && frame[0] !== 10){
    return true;
  }else{
    return false;
  }
};

Game.prototype.bowl = function() {
    if (this.frame === []){
      this.roll = Math.floor(Math.random() * 11);
    }else {
      this.roll = Math.floor(Math.random() * (11 - this.sumFrame(this.frame)));
    }
};

Game.prototype.isFrameFull = function() {
  if (this.frame.length < 2 && this.sumFrame(this.frame) < 10){
    return false;
  } else if (this.frame.length === 1 && this.frame[0] === 10){
    this.frame = [10,0];
    return true;
  } else {
    return true;
  }
};

Game.prototype.addToFrame = function() {
  if (this.isFrameFull() === false ) {
    this.frame.push(this.getRoll());
  }
};

Game.prototype.addFrameToBoard = function(){
  if(this.isFrameFull() === true){
    this.scoreBoard.push(this.frame);
    this.frame = []
  }
};

Game.prototype.bonusRollTaken = function(){
  this.bonusTaken++;
};

Game.prototype.assignFinalBonus = function(){
  this.scoreBoard[9][1] += this.roll
};

Game.prototype.addBonusPointsStrike = function(){
   if (this.isStrike(this.lastFrameBowled())){
     var lastIndex = this.scoreBoard.length -1;
     this.scoreBoard[lastIndex][1] += this.roll;
   }
   if(this.isStrike(this.beforeLastFrameBowled()) && (this.bonusTaken < 1)){
     var beforeLastIndex = this.scoreBoard.length -2;
     this.scoreBoard[beforeLastIndex][1] += this.roll;
   }
};

Game.prototype.addBonusPointsSpare = function(){
  if(this.isSpare(this.lastFrameBowled())){
  var lastIndex = this.scoreBoard.length -1;
  this.scoreBoard[lastIndex][1] += this.roll;
  }
};



Game.prototype.finalFrameStrike = function(bonusTaken){
  if (bonusTaken === 2){
    return "GAME FINISHED";
  } else if (bonusTaken === 0 || bonusTaken === 1){
    return "BONUS ROLL";
  }
};

Game.prototype.finalFrameSpare = function(){
  if(this.bonusTaken >= 1){
    return "GAME FINISHED";
  }else{
    return "BONUS ROLL";
  }
};


Game.prototype.nextFrame = function(){
  if (this.scoreBoard.length < 10){
    return "NEXT FRAME";
  } else if (this.isStrike(this.lastFrameBowled())){
    return this.finalFrameStrike(this.bonusTaken);
  } else if (this.isSpare(this.lastFrameBowled()) === true){
    return this.finalFrameSpare();
  } else {
    return "GAME FINISHED";
  }
};


Game.prototype.returnTotalScore = function(){
  if (this.scoreBoard.length > 0){
    var total = 0
    for (var i = 0; i < this.scoreBoard.length; i++){
      total += (this.scoreBoard[i]).reduce((a, b) => a + b, 0);}
    return total;
  } else {
    return 0;
  }
};

Game.prototype.playAgain = function(){
  this.frame = [];
  this.roll = 0;
  this.scoreBoard = [];
  this.bonusTaken = 0;
};
