function Frame() {
  this.score = [];
}

Frame.prototype.bowl = function(pins) {
  this.score += pins
};
