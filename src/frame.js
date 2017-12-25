function Frame(){
  this.pins = 10;
  this.rolls = []
};

Frame.prototype.appendNumberPinsDown = function(pinsDown) {
  this.rolls.push(pinsDown);
  console.log(this.rolls)
};

Frame.prototype.addTotalFramePoints = function(){
  return 5
};
