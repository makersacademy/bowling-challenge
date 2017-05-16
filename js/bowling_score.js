function Bowling_score() {
  this.frame = 1;
  this.game_results = [];
  this.frame_roll_results = [];
  this.score = 0;
  this.frame_roll = 1;
  this.finish = false;
  this.available_rolls = 2;
  this.DEFAULT_FRAMES = 10;
  this.DEFAULT_PINS = 10;
  this.BONUS_SCORE = 10;

  this.pins_available = this.DEFAULT_PINS;
};

Bowling_score.prototype.process_roll = function(roll_result) {
  if (this.finish === true) { throw 'Game is finished' };
  this.frame_roll_results.push(roll_result);
  if (this.frame === 10 && this.frame_roll === 2) this.frame_10_logic();
  this.query_finish_frame();
};

Bowling_score.prototype.finish_frame = function() {
    this.record_frame_result();
    this.reset_frame();
};

Bowling_score.prototype.frame_10_logic = function() {
  if ((this.frame_roll_results[0] + this.frame_roll_results[1]) >= this.DEFAULT_PINS) {
    this.available_rolls = 3;
  };
};

Bowling_score.prototype.query_finish_frame = function() {
  if ( this.frame !== 10 && "undefined" !== typeof this.bonus_checker() || this.frame_roll >= this.available_rolls ) {
    this.finish_frame();
  } else {
    this.frame_roll++;
    this.pins_available -= this.frame_roll_results[0];
  };
};

Bowling_score.prototype.bonus_checker = function() {
  if (this.frame_roll_results[0] === this.DEFAULT_PINS) {
    return 'strike';
  } else if (this.frame_roll_results[0] + this.frame_roll_results[1] === this.DEFAULT_PINS) {
    return 'spare';
  }
};

Bowling_score.prototype.reset_frame = function() {
  this.frame_roll = 1;
  this.pins_available = this.DEFAULT_PINS;
  this.frame_roll_results = [];
  this.query_finish_game();
};

Bowling_score.prototype.query_finish_game = function() {
  if (this.game_results.length === this.DEFAULT_FRAMES) this.finish = true;
};

Bowling_score.prototype.record_frame_result = function() {
  if_bonus = this.bonus_checker()
  result = {
    frame: this.frame,
    roll_results: this.frame_roll_results,
    bonus: if_bonus,
    round_score: 0,
  };
  this.game_results.push(result);
  this.frame++;
  this.score_logic_process();
};

Bowling_score.prototype.score_logic_process = function() {
  this.current = this.game_results[this.game_results.length - 1];
  this.frame_sum = this.current.roll_results.reduce(this.add, 0);
  this.frame_logic_engine();
};

Bowling_score.prototype.frame_logic_engine = function() {
  if (this.current.bonus !== 'strike' && this.current.bonus !== 'spare') {
    this.current.round_score += this.frame_sum;
  };
  if (this.frame > 2) this.check_last_two_frames();
  this.score_accumulator();
};

Bowling_score.prototype.check_last_two_frames = function() {
  this.penultimate = this.game_results[this.game_results.length - 2];
  if (this.penultimate.bonus === 'strike') this.accumulate_strike();
  if (this.penultimate.bonus === 'spare') this.accumulate_spare();
};

Bowling_score.prototype.accumulate_strike = function() {
  this.antepenultimate = this.game_results[this.game_results.length - 3];
  if ("undefined" === typeof this.current.bonus) {
  this.penultimate.round_score = this.BONUS_SCORE + this.frame_sum;
  } else if (this.frame > 3 && this.antepenultimate.bonus === 'strike') {
    this.antepenultimate.round_score = (this.BONUS_SCORE * 2) + this.frame_sum;
  }
};

Bowling_score.prototype.accumulate_spare = function() {
  if ("undefined" === typeof this.current.bonus) {
    this.penultimate.round_score = this.BONUS_SCORE + this.current.roll_results[0];
  }
};

Bowling_score.prototype.score_accumulator = function() {
  this.score = 0;
  for (var i=0; i < this.frame-1 ; i++ ) {
    this.score += this.game_results[i].round_score
  }
};

Bowling_score.prototype.add = function(a, b) { return a + b };
