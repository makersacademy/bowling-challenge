function Bowling_score() {
  this.frame = 1;
  this.game_results = [];
  this.frame_roll_results = [];
  this.score = 0;
  this.frame_roll = 1;
  this.penultimate = false;
  this.antepenultimate = false;
  this.finish = false;
  this.DEFAULT_ROLLS = 2;
  this.DEFAULT_ROUNDS = 10;
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
   //this.score_adder();
   this.frame++;
   this.frame_roll_results = [];
   console.log('1' + this.finish);
   this.query_finish_game();
   console.log('2' + this.finish);
 };

 Bowling_score.prototype.query_finish_game = function() {
   console.log('3' + this.finish);
   if (this.game_results.length === 10) this.finish = true;
   console.log('4' + this.finish);
 };

 Bowling_score.prototype.record_frame_result = function(if_bonus) {
   result = {frame: this.frame, roll_results: this.frame_roll_results, bonus: if_bonus};
   this.game_results.push(result);
 };

 Bowling_score.prototype.logic_engine = function() {
   current = this.game_results[this.game_results.length - 1].bonus
   penultimate = this.game_results[this.game_results.length - 2].bonus
   antepenultimate = this.game_results[this.game_results.length - 3].bonus
 };
