'use strict';
function BowlingGame(){
  this.rolls = [];
  this.gameResult = 0;
  this.rollIndex = 0;
};

BowlingGame.prototype.roll = function(pins){
  this.rolls.push(pins);
}
BowlingGame.prototype.score = function(){
  for(var frameIndex=0; frameIndex<10;frameIndex++){
    if  (this.isSpare()){
      this.getIsSpareScore();
    } else {
      this.getNormalScore();
    }
    this.rollIndex+=2;
  }
  return this.gameResult;
}

BowlingGame.prototype.isSpare = function(){
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex+1] == 10
}
BowlingGame.prototype.getIsSpareScore = function(){
  return  this.gameResult += this.rolls[this.rollIndex] + this.rolls[this.rollIndex+1] + this.rolls[this.rollIndex+2];
}
BowlingGame.prototype.getNormalScore =function(){
  return this.gameResult += this.rolls[this.rollIndex] + this.rolls[this.rollIndex+1];

}
