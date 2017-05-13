var FrameFile = (function() {
  'use strict';
  var Frame = function() {
  };
  Frame.prototype.processRoll = function() {
    return 1;
  };
  Frame.prototype.activate = function() {
    return 1;
  };
  Frame.prototype.deactivate = function() {
    return 1;
  };

  return { Frame : Frame };
}());
