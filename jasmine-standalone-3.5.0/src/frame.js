function Frame() {
  this.pins = 10;
  this.rolls = 2;
};

Frame.prototype.rollResult = function(result) {
  this.pins -= result;

  if(this.pins < result ) {
    return "Error: Each Frame Consists of 10 Pins";
  }
  this.pins = this.pins + result;
  this.rolls = this.rolls + 1;
};

Frame.prototype.roll = function () {
  this.rolls -= 1;

  if(this.rolls < 0 ) {
    this.rolls = 0;
    return "Error: Maximum 2 Rolls per Frame";
  };

Frame.prototype.calculateScore = function () {
  initial_pins = 10;
  return initial_pins - this.pins;
};
};
