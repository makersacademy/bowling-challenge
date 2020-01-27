// // ATTEMPT 1

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

// ATTEMPT 2

function Scorecard(){
  this.tally = (0);  
  this.frame = (1);
  this.rolls = [];
  this.spare = (false);
  this.strike = (false);
  this.frameTally = (0);
  this.frames = [];
};

Scorecard.prototype.roll1 = function(pins) {
  this.frameTally = pins;
  if (this.spare === (true) || this.strike === (true)) { 
    this.frames[this.frames.length-1] += pins;
    this.spare = false;
  };

  if (pins === "X" || pins === (10)) {
    this.rolls.push(10);
    this.rolls.push(0);
    this.strike = true;
    this.frame ++;
    this.frames.push(this.frameTally);
  } else {
    this.rolls.push(pins);
  };

Scorecard.prototype.roll2 = function(pins) {
  this.frameTally += pins;
  if (this.frameTally > (10)) { return "Too many pins"; };
  if (this.frameTally === (10)) { this.spare = (true); };
  if (this.strike === (true)) { this.frames[this.frames.length-1] += pins; };
  this.rolls.push(pins);
  this.frames.push(this.frameTally);
  this.frameTally = (0);
  };
};
