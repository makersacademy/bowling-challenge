// function Scorer(){
//   this.tally = (0);  
//   this.frame = (1);
// };

// Scorer.prototype.addFrame = function(roll1, roll2) {
//   if (this.frame <= (10)) {
//     if (this.strike) { this.tally += (roll1 + roll2) };
//     if (this.spare) { this.tally += (roll1) };
//     this.tally += (roll1 + roll2);
//     if (roll1 === (10)) { (this.strike = true) }
//     else { (this.strike = false) };
//     if ((this.strike === false) && (roll1 + roll2 === 10)) {
//       this.spare = true };
//     this.frame += (1);
//    } else {
//      return "Final Score: " + (this.tally);
//    };
//   };

function Scorecard(){
  this.tally = (0);  
  this.frame = (1);
  this.array = [];
};

Scorecard.prototype.roll1 = function(pins) {
  pins === "X" ? this.array[this.frame] = 10 :
  this.array[this.frame] = pins;
};
