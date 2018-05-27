function Bowling() {
  this.pins = 10
  this.current_frame = 1
  this.current_roll = 1
  this.frame_score = []
  this.score_card = []
  this.game_scores = []
}

Bowling.prototype.knock_pins = function(num) {
  if (this.current_frame === 10) {
    this.frame_ten(num);
  } else {
    this.pins_knocked(num);
    this.calculate_scoring(num);
    this.test_for_frame_end();
  };
};

Bowling.prototype.frame_ten = function(num) {
  this.pins_knocked(num);
  this.frame_10_scoring(num)
  this.test_for_frame_10_end(num);
};

Bowling.prototype.pins_knocked = function(num) {
  if (this.pins - num < 0 || num > 10) {
    throw("You cannot knock over more pins than there are standing")
  } else {
    this.pins -= num;
    this.frame_score.push(num)
  };
};

Bowling.prototype.test_for_frame_end = function() {
  if (this.current_roll === 2 || this.pins === 0) {
    this.end_frame();
  } else {
    this.current_roll = 2;
  };
};

Bowling.prototype.end_frame = function() {
  if (this.current_frame === 10) {
    this.score_card.push(this.frame_score)
    this.score();
    this.reset_game();
  } else {
    this.new_frame();
  };
};

Bowling.prototype.reset_game = function() {
  this.pins = 10;
  this.current_frame = 1;
  this.current_roll = 1;
  this.frame_score = [];
  this.score_card = [];
};

Bowling.prototype.score = function() {
  var total = 0
  this.score_card.forEach(function(frame_score) {
    frame_score.forEach(function(roll) {
      total += roll;
    });
  });
  this.game_scores.push(total);
};

Bowling.prototype.new_frame = function() {
  this.pins = 10;
  this.current_frame += 1;
  this.current_roll = 1;
  this.score_card.push(this.frame_score);
  this.frame_score = [];
};

Bowling.prototype.previous_frame = function() {
  return (this.score_card[this.score_card.length - 1]);
};

Bowling.prototype.frame_before_last = function() {
  return (this.score_card[this.score_card.length - 2]);
};

Bowling.prototype.previous_frame_was_a_spare = function() {
  return (this.previous_frame().length === 2 && this.previous_frame().reduce(function(acc, val) { return acc + val; }) == 10);
};

Bowling.prototype.previous_frame_was_a_strike = function() {
  return (this.previous_frame().length === 1);
};

Bowling.prototype.test_for_strike_bonus = function(num) {
  if (this.current_roll === 2 && this.previous_frame_was_a_strike()) {
    this.previous_frame().push(this.frame_score[0]);
    this.previous_frame().push(num);
  };
};

Bowling.prototype.test_for_strike_bonus_for_frame_before_last = function(num) {
  if ((this.current_roll === 1) && (this.frame_before_last().length === 2) && (this.frame_before_last().includes(10))) {
    this.frame_before_last().push(num);
  };
};

Bowling.prototype.test_for_two_strikes = function(num) {
  if ((this.current_roll === 1) && (this.previous_frame_was_a_strike()) && (num === 10)) {
    this.previous_frame().push(num);
  };
};

Bowling.prototype.test_for_spare_bonus = function(num) {
  if (this.current_roll === 1 && this.previous_frame_was_a_spare()) {
    this.previous_frame().push(num);
  };
};

Bowling.prototype.calculate_scoring = function(num) {
  if (this.current_frame > 1) {
    this.test_for_spare_bonus(num);
    this.test_for_strike_bonus(num);
    this.test_for_two_strikes(num);
  };
  if (this.current_frame > 2) {
    this.test_for_strike_bonus_for_frame_before_last(num);
  };
};

Bowling.prototype.test_for_frame_10_end = function(num) {
  if (this.current_roll === 3 || (this.current_roll === 2 && this.pins > 0)) {
    this.end_frame();
  } else if (this.current_roll === 2 && this.pins === 0) {
    this.current_roll = 3;
    this.pins = 10;
  } else if (this.current_roll === 1 && num === 10) {
    this.current_roll = 2;
    this.pins = 10;
  } else if (this.current_roll === 1) {
    this.current_roll = 2;
  };
};

Bowling.prototype.frame_10_scoring = function(num) {
  this.test_for_spare_bonus(num);
  this.test_for_strike_bonus(num);
  this.test_for_strike_bonus_for_frame_before_last(num);
};
