'use strict';

function Game(){
  this._frames = [];
}

Game.prototype.roll = function(rolls) {
  var frame = new Frame(rolls);
  this._frames.push(frame);
};
