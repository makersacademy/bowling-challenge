function Scorecard() {
  this.currentFrame = [];
}

Scorecard.prototype.addRoll = function (number) {
  this.currentFrame.push(number);
}