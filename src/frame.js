function Frame() {
  this.pinsRolled = [];
};

Frame.prototype.roll = function(pins) {
  return pins;
};

Frame.prototype.collectPins = function(pins) {
  this.pinsRolled.push(pins);
};

Frame.prototype.strike = function() {
  return this.pinsRolled[0] === 10;
};

Frame.prototype.spare = function() {
  return this.pinsRolled.length == 2 && this.score() === 10;
};

Frame.prototype.score = function() {
  var sum = 0;
  for(var i = 0; i < this.pinsRolled.length; i++) {
    sum += this.pinsRolled[i];
  }
  return sum;
};
