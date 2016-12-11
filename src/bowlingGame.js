'use strict';

function BowlingGame(){
  this.scoreTotal = 0;
  this._rollOne = 0;
  this._rollTwo = 0;
  this.frame = 1;
  this.scoreSheet = []
  this.bonus = null
  this.previousStrikeHeld = 0

};

const RESET = 0

BowlingGame.prototype.rolls = function(number1,number2){
  var number2 = number2 || 0
  console.log(number2)
  this._rollCalculator(number1,number2);
  this._isStrike(number1);
  this._nextFrame();
};

BowlingGame.prototype._rollCalculator = function(number1,number2){
  this._rollOne = number1;
  this._rollTwo = number2;
};


BowlingGame.prototype._isStrike = function(number1){
  if(number1 === 10){
    this._strike = true;

  };
};


BowlingGame.prototype._nextFrame = function(){
    this.frame += 1;
    this._scoringFrame();
    this.bonus = null
    this.bonusAvailable()
    this._frameRolls = 0
    this._strike = false;

};

BowlingGame.prototype.bonusAvailable = function(){
  if (this._strike === true){
   this.bonus = 'strike'
  };
};

BowlingGame.prototype._scoringFrame = function(){
     var rollScore = this._rollOne + this._rollTwo + this.previousStrikeHeld;

     if (this.bonus === 'strike' && this._strike === true){
       return this.previousStrikeHeld += 10;
     };
     if (this.bonus === 'strike'){
       rollScore *= 2;
       this.bonus = null;
     };

     this.previousStrikeHeld = 0;
     this.scoreSheet.push(rollScore);
     this.scoreTotal += this.tallyScore()
};

BowlingGame.prototype.tallyScore = function(){
  var sum = this.scoreSheet.reduce(function(a,b){return a + b;},0);
  return sum
};
