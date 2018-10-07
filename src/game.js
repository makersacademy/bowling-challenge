'use strict';

function Game(){
  this.frames = [];
}

Game.prototype.addFrame = function (frame) {
  if (this.frames.length < 10 ) {
    this.frames.push(frame);
  } else {
    throw new Error('This game already has ten frames')
  };
};
