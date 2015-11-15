function Frame() {

  this.pins = 10;
  this.rolls = 2;

};

Frame.prototype.roll = function () {
  if (this.rolls > 0) {
    this.rolls -= 1;
  } else {
    throw "Can not roll ball, frame is over!";
  };
}
