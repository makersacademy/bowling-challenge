function Frame() {
  this.pinsRemaining = 10;
  this.rollsTaken = 0;
};

Frame.prototype.firstRoll = function() {
  this.checkRollAllowed(1);
  this.firstRollScore = this.roll();
  this.afterRollUpdate(this.firstRollScore);
  if (this.pinsRemaining === 0) {
    return "Strike!";
  };

  return this.firstRollScore;
};

Frame.prototype.secondRoll = function() {
  this.checkRollAllowed(2);
  this.secondRollScore = this.roll();
  this.afterRollUpdate(this.secondRollScore);
  if (this.pinsRemaining === 0) {
    return "Spare!";
  };

  return this.secondRollScore;
};

Frame.prototype.roll = function() {
  n = this.pinsRemaining + 1;
  return Math.floor( Math.random() * n );
};

Frame.prototype.afterRollUpdate = function(rollScore) {
  this.pinsRemaining -= rollScore;
  this.rollsTaken++
};

Frame.prototype.checkRollAllowed = function(rollNumber){
  if (this.rollsTaken != rollNumber - 1) {
    throw new Error("Already rolled or rolling out of turn")
  };

};
