var Frame = function(bowls) {
  this.bowls = bowls;
  this.frameScore = 0;
  this.calculateScore();
}

// **************** Class Functions ******************


Frame.prototype.calculateScore = function(framePlusOne, framePlusTwo){
    if(this.bowls.length > 2) {
     throw new Error('Cannot have more than two bowls in a standard frame');
    };

    var sum = sumArr(this.bowls);

    if(sum > 10) {
     throw new Error('Cannot knock down more than 10 pins in a single frame');
    };

    this.frameScore = sum;

    if (this._isSpare()) {
      if (typeof framePlusOne != 'undefined' &&  framePlusOne.bowls.length > 0) {
        this.frameScore += framePlusOne.bowls[0];
      }
    };

    if (this._isStrike()) {
      if (typeof framePlusOne != 'undefined' &&  framePlusOne.bowls.length > 0) {
        var nextBowls;
        if (framePlusTwo != null) {
          nextBowls = framePlusOne.bowls.concat(framePlusTwo.bowls);
        } else {
          nextBowls = framePlusOne.bowls;
        };
        for (i = 1; i === 2 || i < nextBowls.length; i++) {
          this.frameScore += nextBowls[i-1];
        }
      };

    };

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
