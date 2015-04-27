var Frame = function(isLastFrame) {
  this.rolls = [];
  this.isLastFrame = isLastFrame || false;
  this.maxScore = (isLastFrame ? 30 : 10);
  this.totalRolls = (isLastFrame ? 3 : 2);
  for(var i = 0; i < this.totalRolls; i++) {
    this.rolls.push('-');
  }
};

Frame.prototype.rollTotal = function() {
  var total = 0;
  for(var i = 0; i < this.totalRolls; i++){
    total += (this.rolls[i] === '-' ? 0 : this.rolls[i]);
  }
  return total;
};

Frame.prototype.hasBonus = function() {
  return (this.isStrike() || this.isSpare());
};

Frame.prototype.isStrike = function() {
  return (this.rolls[0] === 10);
};

Frame.prototype.isSpare = function() {
  return ((this.rolls[0] < 10) && (this.rollTotal() === 10));
};

Frame.prototype.roll = function(pinsKnockedDown) {
  for(var i = 0; i < this.totalRolls; i++) {
    if (this.rolls[i] === '-') {
      this.rolls[i] = pinsKnockedDown;
      break;
    }
  }
};

Frame.prototype.rollsTaken = function() {
  var rollsTaken = 0
  for(var i = 0; i < this.totalRolls; i++) {
    if(this.rolls[i] === '-') break;
    rollsTaken ++
  }
  return rollsTaken;
};

Frame.prototype.isOver = function() {
  for(var i = 0; i < this.totalRolls; i++) {
    if (this.rolls[i] === 10 && this.isLastFrame === false) return true;
    if (this.isLastFrame && this.rollsTaken() === 2 && this.rollTotal() < 10) return true;
    if (this.rolls[i] === '-') return false;
  }
  return true;
};
