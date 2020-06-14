function Frame() {
  this.pins = 10;
  this.rolls = 2;
};

Frame.prototype.rollResult = function(result) {
  this.pins -= result;

  if(result > 10) {
    this.pins = this.pins - result;
    // need to ammend function to not reduce frame or pins
    return "Error: Please enter a result from 1-10";
  };

Frame.prototype.reset = function () {
  this.pins = 10;
};

Frame.prototype.roll = function () {
  this.rolls -= 1;
};
};
