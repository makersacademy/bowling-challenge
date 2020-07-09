function Frame() {
}

Frame.prototype.roll1 = function(num) {
  this.roll1 = num
}

Frame.prototype.roll2 = function(num) {
  this.roll2 = num
}

Frame.prototype.baseScore = function() {
  return (Number(this.roll1) + Number(this.roll2));
};

Frame.prototype.roll1result = function() {
  return (Number(this.roll1))
}

Frame.prototype.roll2result = function() {
  return (Number(this.roll2))
}
