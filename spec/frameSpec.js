var Frame = function () {
  this.rolls = [];
};

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};
