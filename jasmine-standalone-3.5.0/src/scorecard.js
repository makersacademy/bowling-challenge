function Scorecard() {
  this.score = 0;
  this.player = 1;
  this.frames = 10;
  this.pins = 10;
};

Scorecard.prototype.rollResult = function(result) {
  this.pins -= result;
};
