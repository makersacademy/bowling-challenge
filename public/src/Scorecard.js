function Scorecard(){
  this._roll1 = this._roll2 = 0;
  this._score = {}; //{frame: [roll1, roll2, score, type, bonus]}
  this._type = "";
};

Scorecard.prototype.calculate = function(frame, roll1, roll2) {
  score = roll1 + roll2;
  if (score > 10 || score < 0 || isNaN(score) === true) {
    throw "Invalid score - check your inputs!"
  }

  if (score === 10 && roll1 === 10) {
    this._type = "strike"
  } else if (score === 10 && roll1 !== 10) {
    this._type = "spare"
  } else {
    this._type = "normal"
  }

  score_arr = [roll1, roll2, score, this._type];
  this._score[frame] = score_arr
};

Scorecard.prototype.calc_bonus = function(frame) {
  if (this._score[frame][3] === "strike") {
    this._score[frame].push(this._score[frame + 1][0] + this._score[frame + 1][1]);
    console.log("prev was strike")
  } else if (this._score[frame][3] === "spare") {
    this._score[frame].push(this._score[frame + 1][0]);
    console.log("prev was spare")
  } else {
    this._score[frame].push(0);
  };
};
