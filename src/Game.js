'use strict';

function Game(){
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.score = [0,0,0,0,0,0,0,0,0,0];
  this.currentFrameIndex = 0;  
  this.bonuses = [];
};

Game.prototype.currentFrame = function(){
  return this.frames[this.currentFrameIndex];
};

Game.prototype.roll = function(pinsKnocked){
  console.log('current frame index is ' + this.currentFrameIndex)
  this.currentFrame().push(pinsKnocked);
  this.updateScore(pinsKnocked);
   console.log(this.score)
   console.log(this.totalScore())
  this.setCurrentFrame();
 
  console.log(this.bonuses[this.currentFrameIndex])
};
  
Game.prototype.updateScore = function(pinsKnocked){
  this.score[this.currentFrameIndex] += pinsKnocked;
  if(this.currentFrameIndex > 0) {
    if ((this.pins(this.currentFrameIndex - 1) === 10 && this.frames[this.currentFrameIndex - 1].length === 1) || ((this.pins(this.currentFrameIndex - 1) === 10 && this.frames[this.currentFrameIndex - 1].length === 2) && this.currentFrame().length === 1)) {
      this.addBonuses(pinsKnocked);
    };
  };
};

Game.prototype.addBonuses = function(pinsKnocked){
  if(this.currentFrameIndex > 0) {
    this.score[this.currentFrameIndex - 1] += (pinsKnocked * this.bonuses[this.currentFrameIndex - 1][0]);
    console.log('adding bonus to last frame of ' + (pinsKnocked * this.bonuses[this.currentFrameIndex - 1][0]))
  }
  if(this.currentFrameIndex > 1) {
    this.score[this.currentFrameIndex - 2] += (pinsKnocked * this.bonuses[this.currentFrameIndex - 2][1]);
    console.log('adding bonus to two frames ago of ' + (pinsKnocked * this.bonuses[this.currentFrameIndex - 2][0]))
  };
};

Game.prototype.setCurrentFrame = function(){
  if (this.currentFrameIndex === 9) {
    if ((this.pins(this.currentFrameIndex) < 10 && this.currentFrame().length === 2) || this.currentFrame().length === 3) {
      this.endGame();
    } 

  } else {
    if (this.pins(this.currentFrameIndex) === 10 || this.currentFrame().length === 2) {
      this.updateBonusArray(); 
      console.log('updated bonus for this frame to ' + this.bonuses[this.currentFrameIndex])
      console.log('moving on to next frame')
      this.currentFrameIndex += 1;
      console.log('current frame index is now ' + this.currentFrameIndex)
    };
  };
};

Game.prototype.updateBonusArray = function(){
  if (this.pins(this.currentFrameIndex) === 10) {
    if (this.currentFrame().length === 1) {
      this.bonuses.push([1, 1]);
    } else {
      this.bonuses.push([1, 0]);
    };
  } else {
    this.bonuses.push([0, 0]);
  }
};

Game.prototype.pins = function(frameIndex){
  if (this.frames[frameIndex].length === 0) { return 0 };
  return this.frames[frameIndex].reduce(function(a, b){ return a + b });
};

Game.prototype.totalScore = function(){
  return this.score.reduce(function(a, b){ return a  + b});
};

Game.prototype.endGame = function(){
  console.log('GameOver');
};


