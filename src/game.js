'use strict';

function Game() {
  this.frames = [];
  this.DEFAULT_FRAMES = 10;
  this.init();
}

Game.prototype.init = function() {
  this.setupFrames()
  this.currentFrame = this.frames[0];
}

Game.prototype.setupFrames = function() {
  var i;
  for(i=0; i < this.DEFAULT_FRAMES; i++) {
    var currentFrame = new Frame;

    if(i > 0) {
      this.frames[i - 1].next = currentFrame
      currentFrame.previous = this.frames[i - 1];
    }
    this.frames.push(currentFrame);
  }
}
