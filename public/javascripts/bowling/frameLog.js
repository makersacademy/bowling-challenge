function FrameLog() {
  this._frames = [];
};

FrameLog.prototype.count = function() {
  return this._frames.length;
};

FrameLog.prototype.add = function(frame) {
  this._frames.push(frame);
};

FrameLog.prototype.last = function() {
  return this._frames[this.count() - 1];
};
