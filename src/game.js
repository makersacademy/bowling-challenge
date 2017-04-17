
function Game() {
  this.frame = 1;
  this.roll = 1;
  this.frames = [];
  this.pins = 10;
  this.totalScore = 0;
  this.message = false;
  this.strikes = 0;
}

const STRIKE = 10;

Game.prototype.firstRoll = function(number) {
  this.pins -= number;
  this.addScore(number);
  this.getMessage(number);
  this.documentRoll(number, this.message);
  if (number === 10) {
    this.strikes += 1;
    this.documentStrike();
    this.reset();
  } else {
    this.roll = 2;
  }
}

Game.prototype.secondRoll = function(number) {
  this.addScore(number);
  this.getMessage(number);
  this.documentRoll(number, this.message);
  this.strikes = 0;
  this.reset();
}

Game.prototype.getMessage = function(number) {
  if (number === 0) {
    this.message = "Unlucky"
  } else if (number > 0 && number < 4) {
    this.message = "Better luck next time!"
  } else if (number > 3 && number < 8) {
    this.message = "Good job!"
  } else if (number > 7 && number < 10) {
    this.message = "Awesome!"
  } else if (number === 10) {
    this.message = "Strike!"
  }
};

Game.prototype.reset = function(number) {
  this.frame += 1;
  this.roll = 1;
  this.pins = 10;
}

Game.prototype.rollBall = function() {
  number = Math.floor(Math.random() * this.pins)
  if (this.roll === 1) {
    this.firstRoll(number);
  }
  else {
    this.secondRoll(number);
  }

};


Game.prototype.addScore = function (number) {
  if (this.strikes > 0 && number !== 10) {
  this.totalScore += number + (number * this.strikes);
} else {
    this.totalScore += number;
  }

};

Game.prototype.documentRoll = function (number, message) {
  this.frames.push([this.frame, this.roll, number, this.totalScore, message])
}

Game.prototype.documentStrike = function () {
  this.frames.push([this.frame, 2, "", this.totalScore, ""])
}
