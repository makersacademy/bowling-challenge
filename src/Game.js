'use strict';

function Game(){
  this._frames = [];
}

Game.prototype.totalsOfFrames = function () {
  return this._frames;
};
