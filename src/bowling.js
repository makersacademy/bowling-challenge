function Scorecard(){
// Simplest structure: array, each element is a frame
// and each frame is itself an array of 2-3 integers: 1st, (2nd,) bonus
  this.shots = [];
};

Scorecard.prototype.bowl = function (pins) {
  this.shots.push(pins);
};

Scorecard.prototype.score = function () {
  var score = this.shots.reduce((a, b) => a + b);
  return score;
};
