'use strict';

function Player(name) {
  this.name = name;
}

function Game(player) {
  this.player = player;
  this.frames = [[],[],[],[],[],[],[],[],[],[],[]];
  this.turn = 0;
  this.score = 0;
}

Game.prototype.roll = function (numPins) {
  var frames = this.frames;

  if (this.turn === 10 && frames[this.turn].length === 1) {
    throw new Error('Game has finished.');
  }

  // if (this.turn === 10 && frames[this.turn].length === 2 && frames[this.turn][0] + frames[this.turn][1] === 10 || 20) {
  //   frames[this.turn].push(numPins);
  //   return this.score += this.updateScore();
  // }

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

  if (this.turn > 1) {
    // if this turn strike but also previous
    if (frames[this.turn-2][0] === 10 && frames[this.turn-1][0] === 10 && frames[this.turn].length !== 2) {
      _turnScore += frames[this.turn][0] + frames[this.turn-1][0] ;
    }
  }

  //if not first turn   1
  if (this.turn > 0) {
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

var game = new Game(new Player("Maria"));

var rollButton = document.getElementById("roll");
var rollValue = document.getElementById("pins");

var frameTurn = 0;
rollButton.addEventListener("click", function(e){
  e.preventDefault();
  game.roll(Number(rollValue.value));
  var column = document.getElementById(frameTurn + "roll");
  column.innerHTML= rollValue.value;
  if (Number(rollValue.value)===10){
    frameTurn++;
  }
  frameTurn++;
});
