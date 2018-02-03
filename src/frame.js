
function Frame() {
  this.score = 0;
}

Frame.prototype.roll = function(value) {
  this.score = value;
}
