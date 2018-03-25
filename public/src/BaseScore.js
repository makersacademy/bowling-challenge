function BaseScore(){
  this._roll1 = this._roll2 = 0;
  this._score = {};
  this._strike = false;
  this._spare = false;
};

BaseScore.prototype.calculate = function(frame, roll1, roll2) {
  score = roll1 + roll2;
  if (score === 10 && roll1 === 10) {
    this._strike = true;
  } else if (score === 10 && roll1 !== 10) {
    this._spare = true;
  };
  this._score[frame] = score;
};
