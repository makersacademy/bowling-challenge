function Frame() {
  this._frame = [];
};

Frame.prototype.values = function() {
  return this._frame;
};

Frame.prototype.pushValue = function(value) {
  return this._frame.push(value);
};
