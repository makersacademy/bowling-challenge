'use strict';

  function Game() {
    this.frames = [];
  };

  // Game.prototype.start = function () {
  //   return this.frames;
  // };

  Game.prototype.roll = function() {
    this.frames.push(new Frame());
    console.log(this.frames);
    var lastFrame = this.frames[this.frames.length -1];
    lastFrame.roll;
    console.log(this.frames);
  };
