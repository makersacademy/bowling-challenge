'use strict';

function Player(name) {
  this.name = name;
}

function Game(player) {
  this.player = player;
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.turn = 0;
  this.score = 0;
  this.strikesInARow = 0;
}

Game.prototype.roll = function (numPins) {
  var frames = this.frames;
  frames[this.turn].push(numPins);
  this.score += this.updateScore();

  if (frames[this.turn][0] === 10 ) {
    this.turn += 1;
  }

  if (frames[this.turn].length === 2) {
    this.turn += 1;
  }
};

Game.prototype.updateScore = function () {
  var frames = this.frames;
  var _turnScore = 0;

  //if Strike
  if (frames[this.turn][0] === 10) {
    _turnScore += frames[this.turn][0];
  }


  //if not first turn   1
  if (this.turn > 0) {

    // if this turn strike but also previous
    if (frames[this.turn][0] === 10 && frames[this.turn-1][0] === 10) {
      this.strikesInARow += 1;
    }

    //if strike previous turn but not on this one AND +strikesInARow
    // if (frames[this.turn].length === 1 && frames[this.turn-1][0] === 10 && strikesInARow > 0) {
    //   _turnScore += ((this.strikesInARow * 10) + frames[this.turn][0]);
    // }

    //if strike previous turn but not on this one
    if (frames[this.turn].length === 2 && frames[this.turn-1][0] === 10) {
      _turnScore += (frames[this.turn][0] + frames[this.turn][1]);
    }

    //if spare previous turn
    if (frames[this.turn].length === 1 && frames[this.turn-1][0] + frames[this.turn-1][1] === 10) {
      _turnScore += frames[this.turn][0];
    }

  }

  //no strike no spare
  if (frames[this.turn].length === 2) {
    _turnScore += frames[this.turn][0] + frames[this.turn][1];
  }

  return _turnScore;
};
