function Game()
  {
    this.totalScore = 0;
  }

Game.prototype.hit = function(pins)
  {
    return this.totalScore += pins;
  }

Game.prototype.getTotal = function()
  {
    return this.totalScore;
  }
