function Game() {
  this.score = 0;
}

Game.prototype.roll = function(pins) {
  if(typeof pins !== 'number' || pins > 10){
    throw new Error('Invalid input!');
    }
  this.score += pins;
};

Game.prototype.getScore = function() {
  return this.score;
}
