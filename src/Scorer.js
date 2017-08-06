function Scorer(){
  this._frame = 1;
  this._score = 0;
  var rollA;
  var rollB;
}

Scorer.prototype.frame = function() {
  return this._frame;
};

Scorer.prototype.isSpare = function(a, b) {
  return a + b === 10;
};

Scorer.prototype.isStrike = function(a) {
  return a === 10;
};

Scorer.prototype.rollA = function() {
  rollA = Math.round((Math.random() * (10) + 0));
};

Scorer.prototype.rollB = function(rollA) {
  rollB = Math.round((Math.random() * (10 - rollA) + 0));
};

Scorer.prototype.incrementFrame = function() {
  this._frame += 1;
};

Scorer.prototype.islessTen = function(roll) {
  return roll !== 10;
};
