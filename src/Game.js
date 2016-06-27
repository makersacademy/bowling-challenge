'use strict';

function Game(){
  this.frames = [];
  for(var i = 0; i <= 9; i++){ this.frames.push([]) };
  this.currentFrameIndex = 0;
  this.score = 0;
  this.bonuses = [0, 0];
};

Game.prototype.currentFrame = function(){
  return this.frames[this.currentFrameIndex];
};

Game.prototype.roll = function(pinsKnocked){
  this.setCurrentFrame();
  this.currentFrame().push(pinsKnocked);
  this.updateScore(pinsKnocked);
};
  
Game.prototype.updateScore = function(pinsKnocked){
  var regScore = pinsKnocked;
  if (this.bonuses[0] > 0) {
    for(var i = 0; i < this.bonuses[0]; i++){
      regScore += pinsKnocked;
    };
    this.bonuses[0] = this.bonuses[1];
    this.bonuses[1] = 0;
  };
  this.score += regScore;
};

Game.prototype.updateBonuses = function(){
  var bonusArray = this.bonuses;
  if (this.currentFrame().length === 1 && this.pins(this.currentFrameIndex) === 10) { 
    bonusArray.forEach(function(element, index) {
      bonusArray[index] = element + 1;
    });
  };
  if (this.currentFrame().length === 2 && this.pins(this.currentFrameIndex) === 10) { 
    bonusArray[0] += 1;
  };
  this.bonuses = bonusArray;
};

Game.prototype.setCurrentFrame = function(){
  if (this.pins(this.currentFrameIndex) === 10 || this.currentFrame().length === 2) {
    this.updateBonuses();
    this.currentFrameIndex += 1;
  };
};

Game.prototype.pins = function(frameIndex){
  if (this.frames[frameIndex].length === 0) { return 0 };
  return this.frames[frameIndex].reduce(function(a, b){ return a + b });
};

