function Scorer(){
  this.tally = (0);  
  this.strike = false
  // this.spare = false
};

Scorer.prototype.addFrame = function(roll1, roll2) {
  if (this.strike) { this.tally += (roll1 + roll2) };
  // if (this.spare) { this.tally += (roll1) };
  this.tally += (roll1 + roll2);
  if (roll1 === (10)) { (this.strike = true) }
  else { (this.strike = false) };
  
};