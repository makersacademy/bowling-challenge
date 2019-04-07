function Frame() {
  this.pinsRolled = [];
};

Frame.prototype.roll = function(pins) {
  return pins;
};

Frame.prototype.collectPins = function(pins) {
  this.pinsRolled.push(pins);
};