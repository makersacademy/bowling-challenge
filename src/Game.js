"use strict"

function Game(){
  this._frames = []
};


Game.prototype.roll = function(pins){
    this._setFrame();
    this._currentFrame().roll(pins);
};

Game.prototype.frameNumber= function(){
  return this._frames.length;
};

Game.prototype.score =  function(){
  let score = 0;
  this._frames.forEach(function(frame){
    score = score + frame.totalScore()
  });
  return score;
};

Game.prototype._currentFrame = function(){
  return this._frames[this._frames.length - 1];
};

Game.prototype._addFrame = function(frame = new Frame()){
  this._frames.push(frame)
};

Game.prototype._setFrame = function(){
  if(this._frames.length === 0 || !this._currentFrame().isInPlay()){
    this._addFrame();
  } 
};