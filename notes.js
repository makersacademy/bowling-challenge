'use strict';

function Game() {
  this.frame = 1;
  this.roll = 1;
  this.pins = 10;
  this.pinsKnocked = 0;
  this.totalScore = 0;
  this.scoreboard = [];
  this.strike = 0;
  this.message = false;
}

const STRIKE = 10;

Game.prototype.letsPlay = function() {
  this.rollBall();
  if (this.roll === 1) {
    this.firstRound();
  } else if (this.roll === 2) {
    this.secondRound();
  }
  else {
  }
};

Game.prototype.firstRound = function() {
    this.addScore();
    this.messaging();
    this.documentFirstRound();
  if (this.pinsKnocked < 10) {
    this.roll = 2;
  } else if (this.pinsKnocked === STRIKE) {
    this.strike += 1;
    this.message = "Strike";
    this.documentStrike();
    this.reset();
  } else {
  }
}

Game.prototype.messaging = function() {
  if (this.pinsKnocked < 4) {
    this.message = "Unlucky!"
  } else if (this.pinsKnocked > 4 && this.pinsKnocked < 8) {
    this.message = "Better luck next time!"
  } else if (this.pinsKnocked < 10) {
    this.message = "So close!" }
    else { this.message = "Strike"}
}
// Game.prototype.documentStrike = function() {
//   this.scoreboard.push([this.frame, this.roll, this.pinsKnocked, "X", this.message]
//   this.reset();
// }

Game.prototype.secondRound = function() {
  this.addScore();
  this.documentSecondRound();
  this.reset();
}

Game.prototype.documentStrike = function() {
  this.scoreboard.push([this.frame, this.roll, this.totalScore, this.message])
};

Game.prototype.rollBall = function() {
  if ((Math.floor(Math.random() * this.pins) < 5)) {
    this.pinsKnocked = 10;
  } else {
    this.pinsKnocked = 4;
  }
   this.pins -= this.pinsKnocked
};

Game.prototype.addScore = function () {
  if (this.pinsKnocked !== 10) {
    this.totalScore += this.pinsKnocked * this.strike
    this.strike = 0;
  } else
  this.totalScore += this.pinsKnocked
};

// Game.prototype.strikeScore = function() {
//   this.strikePoints = this.pinsKnocked
// }

Game.prototype.reset = function () {
  this.frame += 1;
  this.roll = 1;
  this.pins = 10;
  this.pinsKnocked = 0;
}

Game.prototype.documentFirstRound = function () {
  this.scoreboard.push([this.frame, this.roll, this.pinsKnocked, this.message])
}

Game.prototype.documentSecondRound = function () {
  this.scoreboard.push([this.frame, this.roll, this.pinsKnocked, this.totalScore, this.message])
}



it ('scoreboard is initialized with an empty array', function() {
  expect(game.scoreboard).toEqual([]);
});
it ('totalScore is initialized with zero', function() {
  expect(game.totalScore).toEqual(0)
});
it ('pins is initialized with 10', function() {
  expect(game.pins).toEqual(10)
});
it ('frame is initialized with 1', function() {
  expect(game.frame).toEqual(1)
});
it ('roll is initialized with 1', function() {
  expect(game.roll).toEqual(1)
});


it ('pinsKnocked is initialized with 0', function() {
  expect(game.pinsKnocked).toEqual(0)
});

// it ('expect firstRound to be called when calling letsPlay', function() {
//   game.letsPlay();
//   expect(game.firstRound).toHaveBeenCalled();
// });

it ('adds score when method is called', function() {
  this.knockedPins = 5;
  expect(game.totalScore).toEqual(5)
});
});
