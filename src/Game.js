

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
  //logic of strike have to go first, it can be the case the player hit one in
  // the first roll.
  if (this._rollsPinsDown[rollNumber] === 10) {
    score +=10 + this._rollsPinsDown[rollNumber + 1] + this._rollsPinsDown[rollNumber + 2];
    rollNumber += 1;
    continue; //this breaks one iteration in the loop if the condition occurs and continue
    // the next iteration normally.
  }
  var frameScore = this._rollsPinsDown[rollNumber] + this._rollsPinsDown[rollNumber + 1];
    //spare logic.
   if (frameScore === 10) {
    score += 10 + this._rollsPinsDown[rollNumber + 2];
  } else {

  score += frameScore
  }
  rollNumber += 2;
  };
  return score;
};
