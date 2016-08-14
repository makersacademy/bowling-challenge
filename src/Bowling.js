'use strict';

function Bowling(){
this.score = 0;
this.pins = 10;
this.currentFrame = 1;
this.gameRoll = 0;

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
  if (this.gameRoll === 2){
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
