var Game = function() {
  this.score = 0;
  this.frame = 1;
  this.ball = 1;
  this.rolls = 22;
  frameScore = [];
  this.knockedDown = [];
  this.pinsInPlay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};

Game.prototype.rollBall = function() {
  this.rolls = this.rolls-1;
};

Game.prototype.hitPin = function(pin) {
  this.pinsInPlay.splice(pin);
  this.knockedDown.push(pin);
};