'use strict';

function Bowling() {
  this.gameFrames = [];
  for (var i = 0 ; i < 10; i++) {
  this.gameFrames.push(new Frame)};
  this.gameFrames[this.gameFrames.length - 1].lastFrame = true;
  this.rolls = [];
  this.bonusIndexes = [];
}

Bowling.prototype.roll = function(pinsDown){
  var currentFrame = this.currentFrame();
  currentFrame.roll(pinsDown);
  this.rolls.push(pinsDown);
  if(!currentFrame.lastFrame){this.applyBonus(currentFrame)}
};

Bowling.prototype.applyBonus = function(frame){
  if(frame.isStrike()){
    this.bonusIndexes.push(this.rolls.length);
    this.bonusIndexes.push(this.rolls.length + 1);
  }
  if(frame.isSpare()) {
    this.bonusIndexes.push(this.rolls.length);
  }
};

Bowling.prototype.currentFrame = function() {
  return this.gameFrames.filter(function(frame){return !frame.isOver()})[0];
};

Bowling.prototype.rollScore = function(){
  return this.rolls.reduce(function(roll, sum){return roll + sum},0);
  };

Bowling.prototype.bonusScore = function(){
    var rolls = this.rolls;
    return this.bonusIndexes.map(function(index){
      return rolls[index];
    }).reduce(function(item, memo){return item + memo});
  };

  Bowling.prototype.score = function() {
    return this.rollScore() + this.bonusScore();
  };
