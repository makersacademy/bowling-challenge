
function Game() {
  this.frame = 1;
  this.roll = 1;
  this.frames = [];
  this.pins = 10;
  this.totalScore = 0;
  this.message = false;
}

Game.prototype.firstRoll = function(number) {
  this.addScore(number);
  this.pins -= number;
  this.getMessage(number);
  this.documentRoll(number, this.message);
  this.roll = 2;
}

Game.prototype.secondRoll = function(number) {
  this.addScore(number);
  this.getMessage(number);
  this.documentRoll(number, this.message);
  this.reset();
}

Game.prototype.getMessage = function(number) {
  if (number === 0) {
    this.message = "Unlucky"
  } else if (number > 0 && number < 4) {
    this.message = "Better luck next time!"
  } else if (number > 3 && number < 8) {
    this.message = "Good job!"
  } else if (number > 7 && number < 11) {
    this.message = "Awesome!"
  }
};

Game.prototype.reset = function(number) {
  this.frame += 1;
  this.roll = 1;
  this.pins = 10;
}

Game.prototype.rollBall = function() {
  number = 5;
  if (this.roll === 1) {
    this.firstRoll(number);
  }
  else {
    this.secondRoll(number);
  }
  // Math.floor(Math.random() * this.pins)
};

Game.prototype.addScore = function (number) {
    this.totalScore += number;
};

Game.prototype.documentRoll = function (number, message) {
  this.frames.push([this.frame, this.roll, number, this.totalScore, message])
}
