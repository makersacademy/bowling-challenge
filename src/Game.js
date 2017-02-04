"use strict";

const MAX_FRAMES = 10

function Game(){
  this._gameFrames = [];
  this._frameNumber = 0;
}

Game.prototype.newRoll = function(rolls){
  if (this._frameNumber === MAX_FRAMES) {throw ("Your game has ended");
  } else {
    var frame
    frame = new Frame(rolls);
    this._gameFrames.push(frame);
    this._frameNumber ++;
  }
};

Game.prototype.showFrame = function(number){
  var array = []
  array.push(this._gameFrames[number][0])
  array.push(this._gameFrames[number][1])
  return array
};
