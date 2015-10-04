function Frame() {
  this.first = null;
  this.second = null;
}

Frame.prototype.setShots = function(first, second) {
  this.first = first;
  this.second = second;
};

Frame.prototype.isStrike = function() {
  return (this.first === 10);
};

Frame.prototype.isSpare = function() {
  return (this.first < 10 && this.first + this.second === 10);
};
