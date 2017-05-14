function Bowling_score() {
  this.frame = 1;
  this.game_results = [];
  this.frame_roll_results = [];
  this.score = 0;
  this.frame_roll = 1;
  this.bonues_roll_over = false
  this.DEFAULT_ROLLS = 2;
  this.DEFAULT_ROUNDS = 10;
};

Bowling_score.prototype.process_roll = function(roll_result) {
  if_bonus = this.bonus_checker();
  this.frame_roll_results.push(roll_result);
  if (this.finish_frame(if_bonus) === true) {
    this.record_frame_result(if_bonus);
    this.reset_frame();
  } else {
    this.frame_roll++
  };
};

Bowling_score.prototype.if_frame_10 = function() {

};

Bowling_score.prototype.finish_frame = function() {
  if ( typeof this.bonus_checker() !== 'undefined' || this.frame_roll >= this.DEFAULT_ROLLS ) {
    return true;
  };
};

Bowling_score.prototype.bonus_checker = function() {
  if (this.frame_roll_results[0] === 10) {
    return 'strike';
  } else if (this.frame_roll_results[0] + this.frame_roll_results[1] === 10) {
    return 'spare';
  };
};

 Bowling_score.prototype.reset_frame = function() {
   this.frame_roll = 1;
   this.frame++;
   this.frame_roll_results = [];
   this.score_adder()
 };

 Bowling_score.prototype.record_frame_result = function(if_bonus) {
   result = {frame: this.frame, roll_results: this.frame_roll_results, bonus: if_bonus};
   this.game_results.push(result);
 };

 Bowling_score.prototype.score_adder = function() {
   // if (this.game_results[this.game_results.length - 1])
 };
