

var BowlingGame = function() {
  this._rollsPinsDown = [];
};


BowlingGame.prototype.play = function(pins) {
  return this._rollsPinsDown.push(pins);
  //this is equivalent of this._tempScore = this._tempScore + pins;
};

BowlingGame.prototype.score = function() {
  var score = 0; //Initial score, set at 0 points.
  var rollNumber = 0; //this is the index of the array this._rollsPinsDown
  //in the below loop frameNumber means the number of frames available, maximum 10.
  for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
  var frameScore = this._rollsPinsDown[rollNumber] + this._rollsPinsDown[rollNumber + 1];
   if (frameScore === 10) {
    score += 10 + this._rollsPinsDown[rollNumber + 2]; 
  } else {

  score += frameScore
  }
  rollNumber += 2;
  };
  return score;
};
