"use strict";

var Frame = function(bowls) {
  this.bowls = bowls;
  this.frameScore;
  this.calculateScore();
}

// **************** Class Functions ******************
Frame.prototype.calculateScore = function(framePlusOne, framePlusTwo){

  this.frameScore = sumArr(this.bowls);

  if (typeof framePlusOne != 'undefined' &&  framePlusOne.bowls.length > 0) {

    if (this._isSpare()) {
      this._spareBonus(framePlusOne);
    };

    if (this._isStrike()) {
      this._strikeBonus(framePlusOne, framePlusTwo);
    };

  };
  
};

Frame.prototype.score = function(){
  return this.frameScore
};

// ************* Private Functions *****************
Frame.prototype._isStrike = function(){
  return this.bowls[0] === 10;
}

Frame.prototype._isSpare = function(){
  return this.bowls[0] < 10 && sumArr(this.bowls) === 10;
}

Frame.prototype._spareBonus = function(framePlusOne){
  this.frameScore += framePlusOne.bowls[0];
}

Frame.prototype._strikeBonus = function(framePlusOne, framePlusTwo){
  var nextBowls;

  if (typeof framePlusTwo === 'undefined') {
    nextBowls = framePlusOne.bowls;

  } else {
    nextBowls = framePlusOne.bowls.concat(framePlusTwo.bowls);
  };
  var i;
  for (i = 1; i <= 2 && i <= nextBowls.length; i++) {
    this.frameScore += nextBowls[i-1];
  };
}

// ********* Utility Functions *********
var sumArr;
sumArr = function(arr){
  var sum = arr.reduce(add, 0);

  function add(a, b) {
    return a + b;
  }
  return sum;
};
