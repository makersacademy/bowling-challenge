function Scorecard(){
// Simplest structure: array, each element is a frame
// and each frame is itself an array of 2-3 integers: 1st, (2nd,) bonus
  this.shots = [];
  this.currentFrame = [];
};

// Mark the result of a single bowl
// Missing: bonus points, 3 bowls on 10th, 10 pin limit on frame
Scorecard.prototype.bowl = function (pins) {
  // Limit the current frame to 10 pins
  // Note this conflicts with 10th frame special
  if (this.currentFrame.length == 1) {
    if((pins + this.currentFrame[0]) > 10) {
      throw new Error("You bowled more pins than were set out");
    };
  } else {
    if(pins > 10) {
      throw new Error("You bowled more pins than were set out");
    };
  };

  // Add the pins to the currentFrame array
  this.currentFrame.push(pins);
  // If the currentFrame is over, move to the next one
  if (this.currentFrame.length == 2 || pins == 10) {
    this.nextFrame();
  };
};

//  Stores the current frame, resets variables
Scorecard.prototype.nextFrame = function () {
  this.shots.push(this.currentFrame);
  this.currentFrame = [];
};

Scorecard.prototype.whichFrame = function () {
  // Return 1 if the shots array is empty
  if(this.shots.length == 0) {
    return 1
  };
  // Otherwise return the last saved frame plus one
  return this.shots.length + 1;
};

Scorecard.prototype.score = function () {
  var score = 0;
  // iterate through each stored score and summate them
  if (this.shots.length > 0) {
    for (var i=0;i<this.shots.length;i++) {
      for (var j=0;j<this.shots[i].length;j++) {
        score += this.shots[i][j];
      };
    };
  };
  // Now add the current frame pins bowled
  if (this.currentFrame.length > 0) {
    score += this.currentFrame.reduce((a, b) => a + b);
    // console.log(score);
  };
  return score;
};
