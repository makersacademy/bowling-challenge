"use strict";

function Game(){
  this._frames = [];
  this._framesClass = Frame
  this._frames.push(new Frame);
};

Game.prototype.currentFrame = function (){
  return this._frames.length;
};
