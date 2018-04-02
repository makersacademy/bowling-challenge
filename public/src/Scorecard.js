function Scorecard(){
  this._score = {}; //{frame: [roll1, roll2, score, type, bonus]}
  this._type = "";
};

Scorecard.prototype.calculate = function(frame, roll1, roll2) {
  score = roll1 + roll2;
  if (frame !== 11) {
    if (score > 10 || score < 0 || roll1 < 0 || roll2 < 0 || isNaN(score) === true) {
      throw "Invalid score - check your roll input values!";
    };
  }
  else {
    if (score > 20 || score < 0 || roll1 < 0 || roll2 < 0 || isNaN(score) === true) {
      throw "Invalid score - check your roll input values!";
    };
  };

  if (score === 10 && roll1 === 10) {
    this._type = "strike";
  } else if (score === 10 && roll1 !== 10) {
    this._type = "spare";
  } else {
    this._type = "normal";
  };

  score_arr = [roll1, roll2, score, this._type];
  this._score[frame] = score_arr;
};

Scorecard.prototype.calc_bonus = function(frame) {
  switch(this._score[frame][3]) {
    case "strike":
      if (this._score[frame + 1][3] === "strike" && frame !== 10) {
        this._score[frame].push(this._score[frame + 1][0] + this._score[frame + 2][0]);
      }
      else {
        this._score[frame].push(this._score[frame + 1][0] + this._score[frame + 1][1]);
      };
      break;

    case "spare":
      this._score[frame].push(this._score[frame + 1][0]);
      break;

    case "normal":
      this._score[frame].push(0);
      break;
  };
};

Scorecard.prototype.grandtotal = function() {
  grandtotal = 0;
  num_frames = Object.keys(scorecard._score).length;

  max_frames = num_frames === 11 ? 10 : num_frames
  for (i = 1; i <= max_frames; i++) {
    bonus = scorecard._score[i][4] || 0
    grandtotal += (scorecard._score[i][2] + bonus);
  };
  return grandtotal;
};
