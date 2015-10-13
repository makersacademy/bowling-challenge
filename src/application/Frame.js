function Frame() {
  this.pinsRemaining = 10;
  this.balls = [];
  this.bonuses = [];
};

Frame.prototype.setLastFrame = function() {
  this.isLastFrame = true;
};

Frame.prototype.roll = function(number) {
  var rollScore;
  if (isNaN(number)) {
    rollScore = this.randomRoll();
  } else {
    rollScore = number;
  };

  if (!this.rollAllowed(rollScore)) throw new Error("Illegal roll");
  this.pinsRemaining -= rollScore;
  if (this.isLastFrame && this.pinsRemaining == 0) this.pinsRemaining = 10;
  this.balls.push(rollScore);
  return rollScore;
};

Frame.prototype.rollAllowed = function(rollScore) {
  if (this.isComplete()) return false;
  if (rollScore > this.pinsRemaining) return false;
  return true;
};

Frame.prototype.randomRoll = function() {
  var pins = this.pinsRemaining;
  return Math.floor( Math.random() * (pins+1) );
};

Frame.prototype.isComplete = function() {
  if (this.isLastFrame) return this.isLastFrameComplete();
  if (this.pinsRemaining == 0) return true;
  if (this.ballsRolled() == 2) return true;
  return false;
};

Frame.prototype.ballsRolled = function() {
  return this.balls.length;
};

Frame.prototype.isLastFrameComplete = function() {
  if (this.ballsRolled() === 3) return true;
  if (this.ballsRolled() === 2 && this.totalScore() < 10) return true;
  return false;
};

Frame.prototype.totalScore = function() {
  var number = 0;
  this.balls.forEach(function(ball) {
    number += ball;
  });
  this.bonuses.forEach(function(bonus) {
    number += bonus;
  });

  return number;
};

Frame.prototype.isStrike = function() {
  if (this.ballsRolled() < 1) return false;
  return (this.balls[0] === 10);
};

Frame.prototype.isSpare = function() {
  if (this.ballsRolled() < 2) return false;
  return (this.balls[0] < 10 && this.balls[0] + this.balls[1] === 10);
};

Frame.prototype.isAwaitingBonus = function() {
  if (this.isStrike() && this.bonuses.length < 2) return true;
  if (this.isSpare() && this.bonuses.length < 1) return true;
  return false;
};
