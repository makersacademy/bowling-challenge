function OrderedFrame(order) {
  this._order = order;
};

OrderedFrame.prototype.getOrder = function() {
  return this._order;
};

OrderedFrame.prototype.setFrame = function(frame) {
  this._frame = frame;
};

OrderedFrame.prototype.getFrame = function() {
  return this._frame;
};

// OrderedFrame.prototype.calculateBaseScore = function() {
//   this._baseScore = frame[0].getKnockedPins + frame[1].getKnockedPins;
// };
