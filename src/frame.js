function Frame(num1, num2) {
  this.roll1 = num1;
  this.roll2 = num2;
}

Frame.prototype.baseScore = function () {
  return (this.roll1 + this.roll2);
};
