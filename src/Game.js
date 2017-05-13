'use strict';

function Game(){
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.score = [0,0,0,0,0,0,0,0,0,0];
  this.cumulativeScore = [0,0,0,0,0,0,0,0,0,0];
  this.currentFrameIndex = 0;  
  this.bonuses = [];
  this.isGameOver = false;
};

Game.prototype.currentFrame = function(){
  return this.frames[this.currentFrameIndex];
};

Game.prototype.roll = function(pinsKnocked){  
  pinsKnocked = parseInt(pinsKnocked);
  if (this.isGameOver) { throw 'Game has already finishd!'};
  // console.log('Rolling a ' + pinsKnocked)
  this.currentFrame().push(pinsKnocked);
  this.updateScore(pinsKnocked);
  this.setCurrentFrame();
};
  
Game.prototype.updateScore = function(pinsKnocked){
  this.score[this.currentFrameIndex] += pinsKnocked;
  this.addBonuses(pinsKnocked);
  this.cumulativeScore[this.currentFrameIndex] = this.totalScore();
  // console.log(this.score);
  // console.log(this.totalScore());
};

Game.prototype.addBonuses = function(pinsKnocked){
  if(this.currentFrameIndex > 0) { this.priorFrameBonus(pinsKnocked) }
  if(this.currentFrameIndex > 1) { this.priorPriorFrameBonus(pinsKnocked) };
};

Game.prototype.priorFrameBonus = function(pinsKnocked){
  var bonus1 = this.bonuses[this.currentFrameIndex - 1].pop();
  if (bonus1 !== undefined) { this.score[this.currentFrameIndex - 1] += (pinsKnocked * bonus1) };
};

Game.prototype.priorPriorFrameBonus = function(pinsKnocked){
    var bonus2 = this.bonuses[this.currentFrameIndex - 2].pop();
    if (bonus2 !== undefined) {
      this.score[this.currentFrameIndex - 2] += (pinsKnocked * bonus2);
    };
};

Game.prototype.setCurrentFrame = function(){
  if (this.currentFrameIndex === 9) {
    this.checkEndGame();
  } else if (this.pins(this.currentFrameIndex) === 10 || this.currentFrame().length === 2) {
      this.updateBonusArray();
      this.currentFrameIndex += 1;
  };
};

Game.prototype.updateBonusArray = function(){
  if (this._isStrike(this.currentFrameIndex)) { 
    this.bonuses.push([1, 1]);
  } else if (this._isSpare(this.currentFrameIndex)) { 
    this.bonuses.push([1]);
  } else { this.bonuses.push([]) }
};

Game.prototype.pins = function(frameIndex){
  if (this.frames[frameIndex].length === 0) { return 0 };
  return this.frames[frameIndex].reduce(function(a, b){ return a + b });
};

Game.prototype.totalScore = function(){
  // console.log(this.score)
  return this.score.reduce(function(a, b){ return a  + b});
};

Game.prototype.checkEndGame = function(){
  if ((this.pins(this.currentFrameIndex) < 10 && this.currentFrame().length === 2) || this.currentFrame().length === 3) {
    this.isGameOver = true;
    return ('Game Over.  You scored ' + this.totalScore() + '.')
  };
};

Game.prototype._isStrike = function(frameIndex){
  if (this.pins(frameIndex) === 10 && this.frames[frameIndex].length === 1) { return true };
  return false;
};

Game.prototype._isSpare = function(frameIndex){
  if (this.pins(frameIndex) === 10 && this.frames[frameIndex].length === 2) { return true };
  return false;
};





