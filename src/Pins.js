function Pins() {
  this.pinsUp = 10;
}

Pins.prototype.knockdown = function(pinsKnockedDown) {
  this.pinsUp = this.pinsUp - (pinsKnockedDown);
}

Pins.prototype.reset = function() {
  this.pinsUp = 10
}

Pins.prototype._isValidRoll = function(pinsKnockedDown) {
  if  (this.pinsUp >= pinsKnockedDown) {
    this.knockdown(pinsKnockedDown);
    return true;
  }
  else {
    return false };
}
