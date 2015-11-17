function Frame() {

  this.pins = 10;
  this.rolls = 2;

};

Frame.prototype.hit = function(pinsDown) {
  if (this.isOver()) {
    throw "Can not roll ball, frame is over!";
  } else {
    this.rolls -= 1;
    this.pins -= pinsDown;
  };
}

Frame.prototype.isOver = function() {
  return (this.rolls === 0 || this.pins === 0);
}

Frame.prototype.isStrike = function() {
  return (this.rolls === 1 && this.pins === 0);
}

Frame.prototype.isSpare = function() {
  return (this.rolls === 0 && this.pins === 0);
}
