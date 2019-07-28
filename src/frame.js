'use strict';

function Frame() {
  this.rolls = []
  this.score = 0
  this.is_strike = false
  this.is_spare = false
  this.is_complete = false
};

Frame.prototype.roll = function (user_input) {
  this._game = typeof game !== 'undefined' ? game : new Game();

  if (this.rolls.length === 0) {
    this.roll_one_procedure(user_input, this._game);
  } else { this.roll_two_procedure(user_input, this._game);

  };

};

Frame.prototype.roll_one_procedure = function (user_input, game) {
  this.rolls.push(user_input)

  // this.is_previous_spare_or_strike()
  // this.is_previous_previous_strike()
    // Game.update_scores()
  if (user_input === 10) {
      this.strike();
      this.add_to_frames(game);
      this.frame_end();
  }

};

Frame.prototype.roll_two_procedure = function (user_input, game) {
  this.rolls.push(user_input)
  // this.is_previous_strike()
  if (this.sum_of_frame() === 10) {
    this.spare();
  }

  this.add_to_frames(game)
  // Game.update_scores()
  this.frame_end()
};

Frame.prototype.add_to_frames = function (game) {
  game.receive_frame(this);
};


Frame.prototype.strike = function () {
  this.is_strike = true
};

Frame.prototype.frame_end = function () {
  this.rolls.length = 0;
};

Frame.prototype.spare = function () {
  this.is_spare = true
};

Frame.prototype.sum_of_frame = function () {
  return this.rolls.reduce((a, b) => a + b, 0)

};
