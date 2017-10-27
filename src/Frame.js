function Frame() {
 this._maxScore = 10;
 this._score = [];

}

Frame.prototype.currentScore = function() {
  return this._score;
};

Frame.prototype.maxScore = function() {
  return this._maxScore;
};

Frame.prototype.roll = function(number) {
  this._score.push(number);
  return number;
};

Frame.prototype.total = function(number) {

};



//
// Frame.prototype.total = function() {
//
// };
