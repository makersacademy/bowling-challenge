function Frame() {
  this._frame = []
}

Frame.prototype.roll = function (pins) {
  this._frame.push(pins)
};
