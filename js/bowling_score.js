function Bowling_score() {
  this.frame = 1;
  this.game_results = [];
  this.frame_roll_results = [];
  this.score = 0;
  this.frame_roll = 1;
  this.finish = false;
  this.DEFAULT_ROLLS = 2;
  this.DEFAULT_ROUNDS = 10;
  this.DEFAULT_PINS = 10;
  this.pins_available = this.DEFAULT_PINS;
};

Bowling_score.prototype.process_roll = function(roll_result) {
  if (this.finish === true) { throw 'Game is finished' };
  this.frame_roll_results.push(roll_result);
  this.finish_frame_or_not();
};

Bowling_score.prototype.finish_frame_or_not = function() {
  if_bonus = this.bonus_checker();
  if (this.query_finish_frame(if_bonus) === true) {
    this.record_frame_result(if_bonus);
    this.reset_frame();
  } else {
    this.frame_roll++
    this.pins_available -= this.frame_roll_results[0]
  };
};

Bowling_score.prototype.if_frame_10 = function() {

};

Bowling_score.prototype.query_finish_frame = function(if_bonus) {
  if ( typeof if_bonus !== 'undefined' || this.frame_roll >= this.DEFAULT_ROLLS ) {
    return true;
  };
};

Bowling_score.prototype.bonus_checker = function() {
  if (this.frame_roll_results[0] === 10) {
    return 'strike';
  } else if (this.frame_roll_results[0] + this.frame_roll_results[1] === 10) {
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
   if (this.game_results.length === 10) this.finish = true;
 };

 Bowling_score.prototype.record_frame_result = function(if_bonus) {
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
   this.penultimate = this.game_results[this.game_results.length - 2];
   this.antepenultimate = this.game_results[this.game_results.length - 3];
   sum = current.roll_results.reduce(this.add, 0);
   this.frame_logic_engine(sum);
 };

 Bowling_score.prototype.frame_logic_engine = function(frame_sum) {
   this.check_previous_two_frames();
   if (current.bonus ==! 'strike' || current.bonus ==! 'spare') {
     current.round_score += frame_sum;
   };
   this.score_accumulator();
 };

 Bowling_score.prototype.score_accumulator = function() {
    this.score = 0;
    for (var i=0; i < this.frame-1 ; i++ ) {
      this.score += this.game_results[i].round_score
    }
 };

 Bowling_score.prototype.add = function(a, b) { return a + b };
