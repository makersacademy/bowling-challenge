function Roll() {
  this._score = 0;
}

Roll.prototype.getScore = function(){
  return this._score;
}

Roll.prototype.setScore = function (value) {
  this._score = value;
};

module.exports = Roll;
