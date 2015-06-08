function Scorecard(){
// New structure: each element is an array of frameNum, RollNum, pins
  this.shots = [];
  this.currentFrame = 1;
  this.currentRoll = 1;
};

// Check legality of the number of pins hit, store the bowl
// Missing: 3 bowls on 10th
Scorecard.prototype.bowl = function (pins) {

  var shot = [this.currentFrame, this.currentRoll, pins];

  // capture and fail on finished games
  if (this.currentFrame >= 11) {
    throw new Error("You can't roll any more. The game is over!");
  // capture frame 10 roll 2
  } else if(this.currentFrame === 10 && this.currentRoll === 2) {
    if((this.shots[this.shots.length - 1][2] + pins > 10 &&
       this.shots[this.shots.length - 1][2] != 10) ||
       this.shots[this.shots.length - 1][2] + pins > 20) {
      throw new Error("You bowled more pins than were set out");
    };
  // capture frame 10 roll 3
  } else if(this.currentFrame === 10 && this.currentRoll === 3) {
    // first 2 rolls mod 10, plus this roll, fails if > 10
    if (((this.shots[this.shots.length - 1][2] +
        this.shots[this.shots.length - 2][2]) % 10) + pins > 10) {
      throw new Error("You bowled more pins than were set out");
    };
  // capture roll 2 more generally
  } else if(this.currentRoll > 1) {
    if(pins + this.shots[this.shots.length - 1][2] > 10) {
      throw new Error("You bowled more pins than were set out");
    };
  // rule obeyed by first roll in a frame
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
  // Test game over
  if (this.currentFrame >= 11) {
    throw new Error("You can't roll any more. The game is over!");
  // Test special case second roll in tenth frame
  } else if(this.currentRoll === 1 && this.currentFrame === 10) {
            this.currentRoll ++;
  // Test special case third roll in tenth frame
  } else if (this.currentRoll === 2 && this.currentFrame === 10 &&
             this.shots[this.shots.length - 1][2] +
             this.shots[this.shots.length - 2][2] >= 10) {
    this.currentRoll ++;
  // Test for second roll in a frame
  } else if(this.currentRoll === 2) {
    this.currentRoll = 1;
    this.currentFrame ++;
  // Test for a strike on the first roll
  } else if (this.shots[this.shots.length - 1][2] === 10) {
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

    // don't add bonuses for the final frame
    if(this.shots[shot][0] < 10) {
      // add on strike and spare  bonuses if necessary
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
  };
  return score;
};

// Same as score, but only returns a figure if the game's over
Scorecard.prototype.finalScore = function () {
  if(this.isGameOver) {
    return this.score();
  } else {
    return "Game not over yet!";
  };
};

Scorecard.prototype.isGameOver = function () {
  return this.currentFrame >= 11;
};

Scorecard.prototype.multibowl = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0, len = args.length; i < len; i++) {
    this.bowl(args[i]);
  }
};
