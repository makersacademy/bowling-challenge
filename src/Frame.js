function Frame() {
  this.scores = [];
  this.pins = 10;
}

Frame.prototype.bowl = function(score) {
  this.scores.push(score);
};
