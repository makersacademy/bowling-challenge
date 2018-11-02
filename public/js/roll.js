function Roll() {
  score = 0;
}

Roll.prototype.knockedPins = function (pins) {
  this.score = pins;
};
