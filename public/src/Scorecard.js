function Scorecard(){
  this._roll1 = this._roll2 = 0;
  this._score = {}; //{frame: [roll1, roll2, score, bonus]}
  this._strike = false;
  this._spare = false;
};

Scorecard.prototype.calculate = function(frame, roll1, roll2) {
  score = roll1 + roll2;
  if (score > 10) {
    throw "Total exceeds 10 - check your inputs"

  } else if (score === 10 && roll1 === 10) {
    this._strike = true;
    score_arr = [roll1, roll2, score];
    this._score[frame] = score_arr

  } else if (score === 10 && roll1 !== 10) {
    this._spare = true;
    score_arr = [roll1, roll2, score];
    this._score[frame] = score_arr
  };
};
