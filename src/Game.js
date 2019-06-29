"use strict"

function Game(){
  this._frames = []
};


Game.prototype.roll = function(pins, frame = new Frame()){
  if(this._frames.length === 0){
    this._frames.push(frame)
    this._frames[this._frames.length - 1].roll(pins);
  } 
  else if (this._frames[this._frames.length - 1].isInPlay()) {
    this._frames[this._frames.length - 1].roll(pins);
  } 
  else {
    this._frames.push(frame)
    this._frames[this._frames.length - 1].roll(pins);
  };
};

Game.prototype.frameNumber= function(){
  return this._frames.length;
};

