
function Game() {
  this.frame = 1;
  this.roll = 1;
  this.frames = [];
  this.pins = 10;
  this.totalScore = 0;
}

const STRIKE = 10;

Game.prototype.firstRoll = function(number) {
  this.addScore(number);
  this.pins -= number;
  message = "Well done!"
  this.documentRoll(number, message);
  this.roll = 2;
}

Game.prototype.secondRoll = function(number) {
  this.addScore(number);
  message = "Awesome job!"
  this.documentRoll(number, message);
  this.reset();
}

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
