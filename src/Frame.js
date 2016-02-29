function Frame (roll, frameNumber, game) {
  this.game = game
  this.pinsAvailable = 10 - roll;
  this.rollScores = this.isStrike(roll) ? ['X'] : [roll];
  this.number = frameNumber || 1
}

Frame.prototype.update = function (roll) {
  if (this.isSpare(roll)){
    roll = '/'
  }
  return this.rollScores.push(roll);
};

Frame.prototype.isStrike = function (roll) {
  return roll === 10
};

Frame.prototype.isSpare = function (roll) {
  return (this.total(roll) === 10) && (roll !== 'pending')
};

Frame.prototype.total = function (roll) {
    var toAdd =  roll || this.rollScores[1] || 0
    var added = this.rollScores[0] + toAdd;
    if (added === 10 ){
      this.game.pendingSpare(this)
    }
  return added;
};
