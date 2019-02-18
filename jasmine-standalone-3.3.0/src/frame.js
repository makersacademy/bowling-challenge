function Frame () {
  this.pins = 10;
  this.bowls = [];
}

Frame.prototype.bowlResult = function (fallenPins) {
  this.bowls.push(fallenPins)
}

Frame.prototype.total = function () {
  var runningTotal = 0
  for (var i = 0; i < this.bowls.length; i++) {
    runningTotal += this.bowls[i]
  }
  return runningTotal;
}
