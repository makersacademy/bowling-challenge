function Game() {
  this._total_score = 0;
  this._frame_score = 0;
  this.is_a_strike = false;
  this.is_a_spare = false;
  this.frame_count = 0;
};

Game.prototype.total_score = function(roll1, roll2) {
  this.add_to_score(roll1, roll2);
  return this._total_score;
};

Game.prototype.frame_score = function(roll1, roll2) {
  if (this.frame_count > 10) {
    this._frame_score = roll1 + roll2;
  } else if (this.is_a_strike === true){
    this._frame_score = 2*(roll1 + roll2);
  } else if (this.is_a_spare === true) {
    this._frame_score = 2*roll1 + roll2;
  } else {
    this._frame_score = roll1 + roll2;
  };
  this.check_for_strike(roll1);
  this.check_for_spare(roll1, roll2);
  this.frame_count += 1;
  this.total_score();
};

Game.prototype.add_to_score = function() {
    this._total_score +=  this._frame_score;
};

Game.prototype.check_for_strike = function(roll1) {
  if (roll1 === 10) {
    this.is_a_strike = true;
  } else {
    this.is_a_strike = false;
  };
};

Game.prototype.check_for_spare = function(roll1, roll2) {
  if ((roll1 + roll2) === 10) {
    this.is_a_spare = true;
  } else {
    this.is_a_spare = false;
  };
};
