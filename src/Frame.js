function Frame() {
 this._score = [];
 this._maxScore = 10;


}

Frame.prototype.currentScore = function() {
  return this._score;
};

Frame.prototype.maxScore = function() {
  return this._maxScore;
};

Frame.prototype.rollOne = function() {

};

Frame.prototype.rollTwo = function() {

};

Frame.prototype.total = function() {
 return 8;
};
