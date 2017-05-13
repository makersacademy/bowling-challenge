var FrameFile = (function() {
  'use strict';
  var Frame = function() {
    this._active = false;
    this._priorScore = null;
  };
  Frame.prototype.setPriorScore = function(priorScore) {
    this._priorScore = priorScore;
  };
  Frame.prototype.isActive = function() {
    return this._active;
  };
  Frame.prototype.activate = function() {
    this._active = true;
  };
  Frame.prototype.deactivate = function() {
    this._active = false;
  };
  Frame.prototype.processRoll = function(pinsKnockedOver) {
    return 1;
  };

  return { Frame : Frame };
}());
