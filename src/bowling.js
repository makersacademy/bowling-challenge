function Scorecard(){
// Simplest structure: array, each element is a frame
// and each frame is itself an array of 2-3 integers: 1st, (2nd,) bonus
  this.shots = [];
};

Scorecard.prototype.bowl = function (pins) {
  this.shots.push(pins);
};

Scorecard.prototype.score = function () {
  // Return score 0 if array is empty
  if (this.shots.length == 0) {
    return 0;
  };
  // Otherwise iterate through each element and summate them
  var score = this.shots.reduce((a, b) => a + b);
  return score;
};
