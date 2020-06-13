function Scorecard() {
  this.score = 0;
  this.player = 1;
  this.frame = 10;
  this.pins = 10;
};

Scorecard.prototype.rollResult = function(result) {
  this.pins -= result;
  this.score += result;
  this.frame -= 1;

  if(result > 10) {
    this.pins = this.pins - result;
    this.score = this.score - result;
    return "Error: Please enter a result from 1-10";
  };
};

Scorecard.prototype.reset = function() {
  this.pins = 10;
}
