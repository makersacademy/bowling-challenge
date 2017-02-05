function roll() {
  this._score = 0;
}

roll.prototype.getScore = function(){
  return this._score;
}

roll.prototype.setScore = function (value) {
  this._score = value;
};
