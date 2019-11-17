function Scorer(){
  this.tally = (0);  
  this.frame = (1);
};

Scorer.prototype.addFrame = function(roll1, roll2) {
  if (this.frame <= (10)) {
    if (this.strike) { this.tally += (roll1 + roll2) };
    if (this.spare) { this.tally += (roll1) };
    this.tally += (roll1 + roll2);
    if (roll1 === (10)) { (this.strike = true) }
    else { (this.strike = false) };
    if ((this.strike === false) && (roll1 + roll2 === 10)) {
      this.spare = true };
    this.frame += (1);
   } else {
     return (this.tally);
   };
  };