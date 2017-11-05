'use strict';

function Game() {
  this.frames = [];
  this.init();
}


Game.prototype.init = function() {
  this.setupFrames()
  this.currentFrame = this.frames[0];
}

Game.prototype.setupFrames = function() {
  var i;
  for(i=0; i < 10; i++) {
    var currentFrame = new Frame;

    if(i > 0) {
      this.frames[this.frames.length - 1].next = currentFrame
    }
    this.frames.push(currentFrame);
  }
}
