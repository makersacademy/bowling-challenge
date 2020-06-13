function Scorecard() {
  this.score = 0;
  this.player = 1;
  this.frames = 10;
  this.pins = 10;
};

Scorecard.prototype.rollResult = function(result) {
  this.pins -= result;
  this.score = this.score += result;

  if(result > 10) {
    this.pins = this.pins - result
    this.score = this.score - result
    return "Error: Please enter a result from 1-10";
  };
};
