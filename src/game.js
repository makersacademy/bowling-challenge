'use strict';

function Game() {
  this.frames = [];
  this.init();
}


Game.prototype.init = function() {
  this.setupFrames()
}

Game.prototype.setupFrames = function() {
  var i;
  for(i=0; i < 10; i++) {
    var currentFrame = new Frame;
    this.frames.push(currentFrame);
  }
  this.setupFrameHierarchy()
}

Game.prototype.setupFrameHierarchy = function() {
  var i;
  for(i=0; i < this.frames.length - 1; i++) {
    if(i > 0)
      this.frames[i].previous = this.frames[i-1]

    if(i < this.frames.length - 1)
      this.frames[i].next = this.frames[i+1]
  }
}
