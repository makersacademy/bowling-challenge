var Frame = function(bowls) {
  this.bowls = bowls;
  this.frameScore = 0;
  this.calculateScore();
}

// **************** Class Functions ******************


Frame.prototype.calculateScore = function(framePlusOne, framePlusTwo){

    this._validFrameChecks();

    var sum = sumArr(this.bowls);

    this.frameScore = sum;

    if (typeof framePlusOne != 'undefined' &&  framePlusOne.bowls.length > 0) {
      if (this._isSpare()) {
        this.frameScore += framePlusOne.bowls[0];
      };
      if (this._isStrike()) {
        var nextBowls;
        if (framePlusTwo != null) {
          nextBowls = framePlusOne.bowls.concat(framePlusTwo.bowls);
        } else {
          nextBowls = framePlusOne.bowls;
        };
        for (i = 1; i === 2 || i < nextBowls.length; i++) {
          this.frameScore += nextBowls[i-1];
        }
      }
    };
};

// ************* Private Functions ***********

Frame.prototype._validFrameChecks = function(){
  if(this.bowls.length > 2) {
   throw new Error('Cannot have more than two bowls in a standard frame');
  };

  var pinTotal = sumArr(this.bowls);

  if(pinTotal > 10) {
   throw new Error('Cannot knock down more than 10 pins in a single frame');
  };
}

Frame.prototype._isStrike = function(){
  return this.bowls[0] === 10;
}

Frame.prototype._isSpare = function(){
  return this.bowls[0] < 10 && sumArr(this.bowls) === 10;
}

// ********* Utility Functions *********

sumArr = function(arr){
  var sum = arr.reduce(add, 0);

  function add(a, b) {
    return a + b;
  }
  return sum;
};
