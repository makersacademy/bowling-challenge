function Frame() {
 this._maxScore = 10;
 this._score = [];

}

Frame.prototype.currentScore = function() {
  return this._score;
};

Frame.prototype.rollOne = function(number) {
  this._score.push(number);
  return number;
};

Frame.prototype.rollTwo = function(number) {

};

Frame.prototype.maxScore = function() {
  return this._maxScore;
};

Frame.prototype.strike = function() {
  return this._maxScore;
};

// Frame.prototype.frameTotal = function(number) {
//
// };
