function Frame() {
  this.pins = 10;
  this.rolls = 2;
};

Frame.prototype.rollResult = function(result) {
  this.pins -= result;

  if(this.pins < 0 ) {
    this.pins = this.pins + result;
    this.rolls = this.rolls + 1;
    // need to ammend function to not reduce frame when error raised
    return "Error: Each Frame Consists of 10 Pins";
  };

Frame.prototype.reset = function () {
  this.pins = 10;
};

Frame.prototype.roll = function () {
  this.rolls -= 1;

  if(this.rolls < 0 ) {
    this.rolls = 0;
    return "Error: Maximum 2 Rolls per Frame";
};

Frame.prototype.resetRolls = function () {
  this.rolls = 2;
};
};
};
