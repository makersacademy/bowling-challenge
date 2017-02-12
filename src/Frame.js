'use strict';

function Frame(){
  this._score = 0
  this._roll_1 = 0
  this._roll_2 = 0
}

Frame.prototype.calcScore = function () {
  return this._score;
};

Frame.prototype.rollBallOne = function () {
  return this._roll_1 = getRandomInt(0, 10);
   if(this._roll_1 === 10) {
      this._score = 10;
   }
};

Frame.prototype.rollBallTwo = function () {
  if (this._roll_1 < 10 ){
    var pins_left = 10 - this._roll_1
    this._roll_2 =  getRandomInt(0, pins_left);
  } else { throw new Error('You had a strike - no pins left to knock');
    this._roll_2 = 0
  }
  this._score = this._roll_2 + this._roll_1
  return this._roll_2;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Frame.prototype.isStrike = function () {
//   return this._roll_1 === 10
//
//   }
// };
