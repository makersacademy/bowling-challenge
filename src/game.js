"use strict";

//understands frames and the ru
function Game(){
  this.NUMBER_OF_FRAMES = 10
  this.NUMBER_OF_PINS = 10
  this._currentFrameNum = 0
  this._frames = [];
  for(var i = 0;i < this.NUMBER_OF_FRAMES;i++){
    this._frames.push(new Frame(10))
  }
  // console.log(this._frames)
}

Game.prototype.isComplete = function(){
  return this._lastFrame()
  return (this._lastFrame() && this._currentFrameFinished())
};

Game.prototype.addBall = function (num){
  this._getCurrentFrame().addBall(num)
  if (this._currentFrameFinished()){
    this._currentFrameNum += 1
  }
};

Game.prototype.getFrames = function(){
  return this._frames
};
Game.prototype._getCurrentFrame = function (num){
  return this._frames[this._currentFrameNum]
};


Game.prototype._currentFrameFinished = function (){
  return this._getCurrentFrame().isComplete()
}

Game.prototype._lastFrame = function (){
  return this._currentFrameNum === this.NUMBER_OF_FRAMES
}
