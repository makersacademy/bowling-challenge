'use strict';

var isOdd = function(x) { return x & 1; };

function Game() {
  this.rolls = []
  this.bonus_roll = false
  this.id = 1
};

Game.prototype.roll = function (pins) {

  this.rolls.push(pins);
  if(pins == 10 && isOdd(this.id)) {
    if(this.id < 20) {
      this.roll(0)
      this.id ++;
    }
  }
  this.id ++;

  if (this.rolls[19] + this.rolls[18] >= 10) {
    this.bonus_roll = true
  }
  else {
    this.bonus_roll = false
  };
};

Game.prototype.getScore = function () {
  var result = 0
  var rollId = 0

  for (var frameId = 0; frameId < 10; frameId++) {
    if(((this.rolls[rollId]) + (this.rolls[rollId + 1]) == 10) && this.bonus_roll == false) {
      result += this.rolls[(rollId + 2)]
      if(this.rolls[rollId] == 10) {
        result += this.rolls[(rollId + 3)]
      };
    };
    result += this.rolls[rollId] + this.rolls[rollId + 1]
    rollId += 2;
  };

  if (this.bonus_roll == true) {
    result += this.rolls[20];
  }
  return result;
};
