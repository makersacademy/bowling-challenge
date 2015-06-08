function Scorecard(){
// New structure: each element is an array of frameNum, RollNum, pins
  this.shots = [];
  this.currentFrame = 1;
  this.currentRoll = 1;
};

// Mark the result of a single bowl
// Missing: bonus points, 3 bowls on 10th, 10 pin limit on frame
Scorecard.prototype.bowl = function (pins) {

  var shot = [this.currentFrame, this.currentRoll, pins];

  // Limit the current frame to 10 pins
  // Note this conflicts with 10th frame special
  if(this.currentRoll > 1) {
    if(pins + this.shots[this.shots.length - 1][2] > 10) {
      throw new Error("You bowled more pins than were set out");
    };
  } else {
    if(pins > 10) {
      throw new Error("You bowled more pins than were set out");
    };
  };

  // Store the current shot
  this.shots.push(shot);

  // Move to the next roll or frame
  this.nextRoll();

};

Scorecard.prototype.nextRoll = function () {
  // Test for second roll in a frame - ignore 10th frame for now
  if(this.currentRoll === 2) {
    this.currentRoll = 1;
    this.currentFrame ++;
  // Test for a strike on the first roll - ignore 10th frame for now
  } else if (this.shots[this.shots.length -1][2] === 10) {
    this.currentRoll = 1;
    this.currentFrame ++;
  // Otherwise increment from first to second roll
  } else {
    this.currentRoll ++;
  };
};

Scorecard.prototype.whichFrame = function () {
  return this.currentFrame;
};

// This gives the total score, not broken down
Scorecard.prototype.score = function () {
  var score = 0;

  // prevent errors from empty array
  if (this.shots.length === 0) {
    return 0;
  };

  // iterate through each score and sum them up
  for (var shot=0;shot<this.shots.length;shot++) {
    score += this.shots[shot][2];

    // add on strikes and spares if necessary
    var bonusRolls = 0;
    if(this.shots[shot][2] === 10 && this.shots[shot][1] === 1) {
      bonusRolls = 2;
    } else if (this.shots[shot][1] === 2 && this.shots[shot][2] +
      this.shots[shot-1][2] === 10) {
      bonusRolls =1;
    };
    for (var i=1;i<=bonusRolls && shot+i < this.shots.length;i++) {
      score += this.shots[shot+i][2];
    };

  };

  return score;
};

Scorecard.prototype.multibowl = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0, len = args.length; i < len; i++) {
    this.bowl(args[i]);
  }
};
