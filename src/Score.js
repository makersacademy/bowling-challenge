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
