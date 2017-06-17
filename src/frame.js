// Frame is responsible for knocking down up to 10 pins

var Frame = function() {
  this.remainingPins = 10
}

Frame.prototype.bowl = function() {
  return this.remainingPins = 10 - this.randomPins();
}

Frame.prototype.randomPins = function() {
  return Math.floor((Math.random() * 10) + 1);
}
