'use strict';

function Score() {

  this.scorecard = []
  this.frame_running_totals = []

}

function Game() {

  this._frames = []

};

function Frame(roll) {
  this._rolls = []
  this._game = typeof game !== 'undefined' ? game : new Game();
  this.roll_one = function(roll){
    this._rolls.push(roll)
    // check for previous strike/spare
    // check for previous previous strike
    // score.update
    if (roll === 10) {
      this.send_frame(game)
    } else {
      this.roll_two(new_roll)
    }
  };

  this.roll_one(roll)
};

Game.prototype.start = function () {
  var i;
  for (i = 0; i < 9; i++) {
    var frame = new Frame(roll);

  };
};


Game.prototype.roll_two = function (user_input) {

};

Frame.prototype.send_frame = function (game) {
  game.receive_frame(this)
};

Frame.prototype.receive_user_input = function (set_user_input) {
  return user_input
};
