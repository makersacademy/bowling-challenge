'use strict';

function Bowling(){
this.score = 0;
this.pins = 10;
this.currentFrame = 1;
this.gameRoll = 1;
this.rolls = [];

};

Bowling.prototype.getScore = function() {
  return this.score;
};

Bowling.prototype.roll = function(){
return Math.floor(Math.random() * (this.pins + 1));
};

Bowling.prototype.getRoll = function() {
  var roll = this.roll();
  this.score += roll;
  this.pins -= roll;
  this.gameRoll += 1;
  this.rolls.push(roll);
  if (this.gameRoll === 3){
    this.currentFrame += 1
    this.gameRoll = 1
    this.pins = 10
  };
  return roll;
};

Bowling.prototype.getPins = function(){
  return this.pins;
};

Bowling.prototype.getCurrentFrame = function(){
  return this.currentFrame;
};

Bowling.prototype.getBonus = function(){
    var rollIndex = 0;
    var points = 0;
    if (this.currentFrame === 10){
    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10){
        points += (this.rolls[rollIndex + 2] );
      }
      if (this.rolls[rollIndex] === 10){
        points += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
      }
      rollIndex += 2;
    };};
    this.score += points;
};
