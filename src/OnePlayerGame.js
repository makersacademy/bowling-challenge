var OnePlayerGameFile = (function() {
  'use strict';
  var Frame = FrameFile.Frame;
  var OnePlayerGame = function() {
    this.frame1 = new Frame(this);
    this.frame1.activate();
    this.frame1.setPriorScore(0);
    this.frame2 = new Frame(this);
    this.frame3 = new Frame(this);
    this.frame4 = new Frame(this);
    this.frame5 = new Frame(this);
    this.frame6 = new Frame(this);
    this.frame7 = new Frame(this);
    this.frame8 = new Frame(this);
    this.frame9 = new Frame(this);
    this.frame10 = new Frame(this, "tenth frame");
    this.frames = [this.frame1, this.frame2, this.frame3, this.frame4, this.frame5, this.frame6, this.frame7, this.frame8, this.frame9, this.frame10];
  };

  OnePlayerGame.prototype.activeFrames = function() {
    return this.frames.filter(function(frame) {
      return frame.isActive();
    });
  };

  OnePlayerGame.prototype.passOnScore = function(score, previousFrame) {
    if (previousFrame === this.frame10) {
      return;
    }
    var nextFrameIndex = this.frames.indexOf(previousFrame) + 1;
    this.frames[nextFrameIndex].setPriorScore(score);
  };

  OnePlayerGame.prototype.nextInactiveFrameIndex = function() {
    var highestActiveFrame;
    var activeFrames = this.frames.filter(function(frame) {
      return frame.isActive();
    });
    highestActiveFrame = activeFrames[activeFrames.length -1];
    return this.frames.indexOf(highestActiveFrame) + 1;
  };

  OnePlayerGame.prototype.roll = function(pinsKnockedOver) {
    this.activeFrames().forEach(function(frame) {
      frame.processRoll(pinsKnockedOver);
    });
  };

  OnePlayerGame.prototype.updateBoxes = function() {
  };

  OnePlayerGame.prototype.activateNextFrame = function() {
    if (this.frame10.isActive()) {
      return;
    }
    this.frames[this.nextInactiveFrameIndex()].activate();
  };
    

  return { OnePlayerGame: OnePlayerGame };
}());
