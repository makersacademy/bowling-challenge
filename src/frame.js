var Frame = function(bowls) {
  this.bowls = bowls;
  this.frameScore;
  this.bonus;
  this.totalScore;
  this.score();
}

// **************** Class Functinos ******************

Frame.prototype.score = function() {

  if(this.bowls.length > 2) {
   throw new Error('Cannot have more than two bowls in a standard frame');
  };

  var sum = sumArr(this.bowls);

  if(sum > 10) {
   throw new Error('Cannot knock down more than 10 pins in a single frame');
  };

  this.frameScore = sum;
};

Frame.prototype.calculateScore = function(framePlusOne, framePlusTwo) {

  if (framePlusOne.bowls.length === 0) {
    this.bonus = 0;
  } else if(this._isSpare()){
    this.bonus = framePlusOne.bowls[0];
  } else if(this._isStrike()){
    var nextFrames = framePlusOne.bowls.concat(framePlusTwo.bowls);
    this.bonus = nextFrames[0] + nextFrames[1];
  }
  this._totalScores();
};




// ************* Private Functions ***********

Frame.prototype._isStrike = function(){
  return this.bowls[0] === 10;
}

Frame.prototype._isSpare = function(){
  return this.bowls[0] < 10 && sumArr(this.bowls) === 10;
}

Frame.prototype._totalScores = function(){
  this.totalScore = this.frameScore + this.bonus;
};

// ********* Utility Functions *********

sumArr = function(arr){
  var sum = arr.reduce(add, 0);

  function add(a, b) {
    return a + b;
  }
  return sum;
};
