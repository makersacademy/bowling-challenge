function Frame() {

  this.pins = 10;
  this.rolls = 2;

};

Frame.prototype.roll = function(pinsDown) {
  if (this.rolls === 0 || this.pins === 0 ) {
    throw "Can not roll ball, frame is over!";
  } else {
    this.rolls -= 1;
    this.pins -= pinsDown;
  };
}
