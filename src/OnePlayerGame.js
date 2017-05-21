var OnePlayerGameFile = (function() {
  'use strict';
  var Frame = FrameFile.Frame;
  var OnePlayerGame = function() {
    this.frame1 = new Frame(this);
    this.frame2 = new Frame(this);
    this.frame3 = new Frame(this);
    this.frame4 = new Frame(this);
    this.frame5 = new Frame(this);
    this.frame6 = new Frame(this);
    this.frame7 = new Frame(this);
    this.frame8 = new Frame(this);
    this.frame9 = new Frame(this);
    this.frame10 = new Frame(this, 'tenth frame');
    this.latestActiveFrame = this.frame1;
    this.frame1.activate();
    this.frame1.setPriorScore(0);
    this.frames = [this.frame1, this.frame2, this.frame3, this.frame4, this.frame5, this.frame6, this.frame7, this.frame8, this.frame9, this.frame10];
    this.score = 0;
  };

  OnePlayerGame.prototype._activeFrames = function() {
    return this.frames.filter(function(frame) {
      return frame.isActive();
    });
  };

  OnePlayerGame.prototype._nextInactiveFrameIndex = function() {
    var highestActiveFrame = this._activeFrames()[this._activeFrames().length - 1];
    return this.frames.indexOf(highestActiveFrame) + 1;
  };


  OnePlayerGame.prototype._completedFrames = function() {
    return this.frames.filter(function(frame) {
      return frame.isComplete();
    });
  };

  OnePlayerGame.prototype._nextIncompleteFrameIndex = function() {
    var latestCompletedFrame = this._completedFrames()[this._completedFrames().length - 1];
    return this.frames.indexOf(latestCompletedFrame) + 1;
  };

  OnePlayerGame.prototype.setScore = function(points) {
    this.score = points;
  };
  OnePlayerGame.prototype.getScore = function() {
    return this.score;
  };

  OnePlayerGame.prototype.passOnScore = function(score) {
    if (this._nextIncompleteFrameIndex() === 10) { return; }
    this.frames[this._nextIncompleteFrameIndex()].setPriorScore(score);
  };

  OnePlayerGame.prototype.roll = function(pinsKnockedOver) {
    this._activeFrames().forEach(function(frame) {
      frame.processRoll(pinsKnockedOver);
    });
  };

  OnePlayerGame.prototype.activateNextFrame = function() {
    if (this.frame10.isActive()) { return; }
    this.frames[this._nextInactiveFrameIndex()].activate();
  };
    

  return { OnePlayerGame: OnePlayerGame };
}());
