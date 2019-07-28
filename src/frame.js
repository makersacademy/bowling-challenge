'use strict';

function Frame() {
  this.rolls = []
  this.score = 0
  this.isStrike = false
  this.isSpare = false
  this.isComplete = false
};

Frame.prototype.roll = function (user_input) {
  this._game = typeof game !== 'undefined' ? game : new Game();

  if (this.rolls.length === 0) {
    this.rollOneProcedure(user_input, this._game);
  } else { this.rollTwoProcedure(user_input, this._game);

  };

};

Frame.prototype.rollOneProcedure = function (user_input, game) {
  this.rolls.push(user_input)

  // this.is_previous_spare_or_strike()
  // this.is_previous_previous_strike()
    // Game.update_scores()
  if (user_input === 10) {
      this.strike();
      this.addToFrames(game);
      this.frameEnd();
  }

};

Frame.prototype.rollTwoProcedure = function (user_input, game) {
  this.rolls.push(user_input)
  // this.is_previous_strike()
  if (this.sumOfFrame() === 10) {
    this.spare();
  }

  this.addToFrames(game)
  // Game.update_scores()
  this.frameEnd()
};

Frame.prototype.addToFrames = function (game) {
  game.receiveFrame(this);
};


Frame.prototype.strike = function () {
  this.isStrike = true
};

Frame.prototype.frameEnd = function () {
  this.rolls.length = 0;
};

Frame.prototype.spare = function () {
  this.isSpare = true
};

Frame.prototype.sumOfFrame = function () {
  return this.rolls.reduce((a, b) => a + b, 0)

};
