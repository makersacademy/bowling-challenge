function Frame(){
  this.pins = 10;
  this.roll = []
};

Frame.prototype.appendNumberPinsDown = function(pinsDown) {
  this.roll.push(pinsDown);
};

Frame.prototype.addTotalFramePoints = function(){
  var total = this.roll.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return total
};
