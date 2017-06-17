'use strict';

function BowlingGame(){
  this._frames = [];
}

BowlingGame.prototype.getFramesNum = function () {
  return this._frames.length;
};

BowlingGame.prototype.addFrame = function(frame){
  this._frames.push(frame);
}
