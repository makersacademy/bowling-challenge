var FrameFile = (function() {
  'use strict';
  var Frame = function() {
    this.active = false;
    this._priorScore = null;
    this._roll1 = null;
    this._roll2 = null;
    this._roll3 = null;
  };
  Frame.prototype.setPriorScore = function(priorScore) {
    this._priorScore = priorScore;
  };

  Frame.prototype.isActive = function() {
    return this.active;
  };
  Frame.prototype.activate = function() {
    this.active = true;
  };
  Frame.prototype.deactivate = function() {
    this.active = false;
  };

  Frame.prototype.processRoll = function(pinsKnockedOver) {
    this.updateBox(pinsKnockedOver);
  };

  Frame.prototype.updateBox = function(pinsKnockedOver) {
    if (this._roll1 === null) {
      this._roll1 = pinsKnockedOver;
    } else if (this._roll2 === null) {
      this._roll2 = pinsKnockedOver;
    } else {
      this._roll3 = pinsKnockedOver;
    }
  };

  Frame.prototype.box1 = function() {
    if (this._roll1 === null) {
      return null;
    } else if (this._roll1 === 10) {
      return 'X';
    } else { 
      return this._roll1;
    }
  };

  Frame.prototype.box2 = function() {
    if (this._roll2 === null) {
      return null;
    } else if (this._roll1 + this._roll2 > 10) {
      return null;
    } else if (this._roll1 + this._roll2 === 10) {
      return '/';
    } else { 
      return this._roll2;
    }
  };

  return { Frame : Frame };
}());
