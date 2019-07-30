'use strict';

function Score() {

  this.scorecard = []
  this.frame_running_totals = []

}

function Game() {

  this._frames = []
  

};

function Frame(throw) {
  this._throws = []
  this._game = typeof game !== 'undefined' ? game : new Game();
  this.throw_one = function(throw){
    this._throws.push(throw)
    // check for previous strike/spare
    // check for previous previous strike
    // score.update
    if (throw === 10) {
      this.send_frame(game)
    } else {
      this.throw_two(new_throw)
    }
  };

  this.throw_one(throw)
};

Game.prototype.start = function () {
  var i;
  for (i = 0; i < 9; i++) {
    var frame = new Frame(throw);

  };
};


Game.prototype.throw_two = function (user_input) {

};

Frame.prototype.send_frame = function (game) {
  game.receive_frame(this)
};

Frame.prototype.receive_user_input = function (set_user_input) {
  return user_input
};
