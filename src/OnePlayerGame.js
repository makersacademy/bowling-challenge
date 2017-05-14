var OnePlayerGameFile = (function() {
  'use strict';
  var Frame = FrameFile.Frame;
  var OnePlayerGame = function() {
    this.frame1 = new Frame(this);
    this.frame1.activate();
    this.frame2 = new Frame(this);
    this.frame3 = new Frame(this);
    this.frame4 = new Frame(this);
    this.frame5 = new Frame(this);
    this.frame6 = new Frame(this);
    this.frame7 = new Frame(this);
    this.frame8 = new Frame(this);
    this.frame9 = new Frame(this);
    this.frame10 = new Frame(this);
    this.frames = [this.frame1, this.frame2, this.frame3, this.frame4, this.frame5, this.frame6, this.frame7, this.frame8, this.frame9, this.frame10];
  };

  OnePlayerGame.prototype.activeFrames = function() {
    return this.frames.filter(function(frame) {
      return frame.isActive();
    });
  };

  OnePlayerGame.prototype.nextInactiveFrame = function() {
    return this.frames.filter(function(frame) {
      return frame.isActive() === false;
    })[0];
  };

  OnePlayerGame.prototype.roll = function(pinsKnockedOver) {
    this.activeFrames().forEach(function(frame) {
      frame.processRoll(pinsKnockedOver);
    });
  };

  OnePlayerGame.prototype.updateBoxes = function() {
  };

  OnePlayerGame.prototype.activateNextFrame = function() {
    this.nextInactiveFrame().activate();
  };
    

  return { OnePlayerGame: OnePlayerGame };
}());
