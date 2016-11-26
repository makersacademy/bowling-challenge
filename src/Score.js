Score = function(multiplier, currentPins){
  this.multiplier = multiplier;
  this.currentPins = currentPins;
};

Score.prototype.calculateFrameScore = function () {
  if (this.multiplier === "strike") {
    return 2 * (this.currentPins[0] + this.currentPins[1]);
  } else if (this.multiplier === "spare") {
    return (2 * this.currentPins[0] + this.currentPins[1]);
  } else {
    return (this.currentPins[0] + this.currentPins[1]);
  };
};

Score.prototype.calculateTenthFrameScore = function () {
  var a = this.currentPins[0];
  var b = this.currentPins[1];
  var c = this.currentPins[2];

  if (this.multiplier === "strike") {
    return (2 * a + 2 * b + c);
  } else if (this.multiplier === "spare") {
    return (2 * a + b + c);
  } else {
    return (a + b + c);
  };
};
