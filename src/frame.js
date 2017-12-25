function Frame(){
  this.pins = 10;
  this.rolls = []
};

Frame.prototype.appendNumberPinsDown = function(pinsDown) {
  this.rolls.push(pinsDown);

};

Frame.prototype.addTotalFramePoints = function(){
  var total = this.rolls.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return total
};
