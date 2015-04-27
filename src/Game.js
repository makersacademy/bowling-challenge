var Game = function() {
  this.rolls = [];
  this.frames = [];
  for(var i = 0; i < 9; i++) {
    this.frames[i] = new Frame();
  }
  this.frames[9] = new Frame(true);
};

Game.prototype.runningScore = function() {
  var trackRoll = 0
  var total = 0;
  
  for (var i = 0; i < this.frames.length; i++) {
    total += this.frames[i].rollTotal();
    if (this.frames[i].hasBonus() === true) total += (this.rolls[trackRoll + this.frames[i].rollsTaken()] || 0);
    if (this.frames[i].isStrike() === true) total += (this.rolls[trackRoll + this.frames[i].rollsTaken() + 1] || 0);
    trackRoll += this.frames[i].rollsTaken();
  }
  return total;
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.currentFrame().roll(pinsKnockedDown);
  this.rolls.push(pinsKnockedDown);
};

Game.prototype.currentFrame = function() {
  if (this.isOver()) throw new Error('Game is over!');
  if (this.frames[0].isOver() === false) return this.frames[0];
  for(var i = 9; i >= 0; i--) {
    if (this.frames[i].isOver() === true) return this.frames[i + 1];
  }
};

Game.prototype.currentFrameNumber = function() {
  if (this.frames[0].isOver() === false) return 0;
  for(var i = 9; i >= 0; i--) {
    if (this.frames[i].isOver() === true) return (i + 1);
  }
};

Game.prototype.isOver = function() {
  return this.frames[9].isOver();
};