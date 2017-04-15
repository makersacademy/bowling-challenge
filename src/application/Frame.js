function Frame() {
  this.pinsRemaining = 10;
  this.balls = [];
  this.bonuses = [];
};

Frame.prototype.setLastFrame = function() {
  this.isLastFrame = true;
};

Frame.prototype.roll = function(number) {
  var rollScore = (number >= 0) ? number : this.randomRoll();
  if (this.rollNotAllowed(rollScore)) throw new Error("Illegal roll");
  return this.registerRoll(rollScore);
};

Frame.prototype.registerRoll = function(pinCount){
  this.pinsRemaining -= pinCount;
  if (this.isLastFrame && this.pinsRemaining == 0) this.pinsRemaining = 10;
  this.balls.push(pinCount);
  return pinCount;
};

Frame.prototype.rollNotAllowed = function(rollScore) {
  return (this.isComplete()) || (rollScore > this.pinsRemaining)
};

Frame.prototype.randomRoll = function() {
  return Math.floor( Math.random() * (this.pinsRemaining+1) );
};

Frame.prototype.isComplete = function() {
  if (this.isLastFrame) return this.isLastFrameComplete();
  return (this.pinsRemaining == 0) || (this.ballsRolled() == 2);
};

Frame.prototype.ballsRolled = function() {
  return this.balls.length;
};

Frame.prototype.isLastFrameComplete = function() {
  return (this.ballsRolled() === 3) || (this.ballsRolled() === 2 && this.totalScore() < 10);
};

Frame.prototype.totalScore = function() {
  return this.balls.concat(this.bonuses).reduce(function(memo, value){
    return memo + value;
  });
};

Frame.prototype.isStrike = function() {
  return (this.balls[0] === 10);
};

Frame.prototype.isSpare = function() {
  return this.ballsRolled() == 2 && (this.balls[0] + this.balls[1] === 10);
};

Frame.prototype.isAwaitingBonus = function() {
  return (this.isStrike() && this.bonuses.length < 2) || (this.isSpare() && this.bonuses.length < 1);
};
