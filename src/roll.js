function Roll() {
  this.score = 0
}

Roll.prototype.pins = function (number) {
  return this.score += number
};
