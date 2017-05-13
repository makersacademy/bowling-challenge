var FrameFile = (function() {
  'use strict';
  var Frame = function() {
    this._active = false;
  };
  Frame.prototype.isActive = function() {
    return this._active;
  };
  Frame.prototype.processRoll = function() {
    return 1;
  };
  Frame.prototype.activate = function() {
    this._active = true;
  };
  Frame.prototype.deactivate = function() {
    return 1;
  };

  return { Frame : Frame };
}());
