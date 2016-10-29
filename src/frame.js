'use strict';

function Frame() {
  this._allFrames = [];
};

Frame.prototype.save = function (frame) {
  this._allFrames.push(frame);
};
