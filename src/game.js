'use strict';

function Game() {
  this.NORMAL_FRAMES = 10
  this.rolls = []
  this.bonus_frame = false
};

Game.prototype.roll = function (pins) {

  if (this.rolls[19] + this.rolls[18] >= 10) {
    this.bonus_frame = true
  }
    else this.bonus_frame = false;
  this.rolls.push(pins);

};

Game.prototype.score = function () {

  for (var frameId = 0; frameId < 10; frameId++) {
    result += this.rolls[rollId] + this.rolls[rollId + 1];
    rollId += 2;
  }
  if (this.bonus_frame == true) {
    result += this.rolls[20]
  }
  return result;
};
