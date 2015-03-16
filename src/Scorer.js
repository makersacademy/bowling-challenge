var Scorer = function() {
  this.rolls = [];
  this.frameCounter = 0;
};

Scorer.prototype.roll = function(score) {
  this.rolls.push(score);
  if (this.frameCounter <10) {
    if (score === 10) {
      this.frameCounter +=1;}
    else {
      this.frameCounter +=0.5;};}
  else {
    this.frameCounter +=0;}
};

Scorer.prototype.total = function() {

  var runningTotal = 0;
  var rollNumber = 0;
  var frameNumber = 1

  for (var i = frameNumber; i < 11; i++) {
    if(this.rolls[rollNumber] === 10) {
      runningTotal += this.rolls[rollNumber] + this.rolls[rollNumber+1]+ this.rolls[rollNumber+2];
      rollNumber +=1;}
    else if (this.rolls[rollNumber] + this.rolls[rollNumber+1] === 10) {
      runningTotal += this.rolls[rollNumber] + this.rolls[rollNumber+1]+ this.rolls[rollNumber+2];
      rollNumber +=2;
    }
    else {
      runningTotal += this.rolls[rollNumber] + this.rolls[rollNumber+1];
      rollNumber +=2;
    }
  };
  return runningTotal;
};

Scorer.prototype.frameNumber = function() {
  return Math.ceil(this.frameCounter);
};