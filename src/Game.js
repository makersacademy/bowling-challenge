function Game()
  {
    this.totalScore = 0;
    this.roll = 0
    this.rollScores = [];
  }

Game.prototype.hit = function(pins)
  {
    this.rollScores[this.roll] = pins;
    this.roll += 1;
  }

Game.prototype.getTotal = function()
  {
    for (var i=0; i<20;i++)
    {
      this.totalScore += this.rollScores[i];
      console.log(this.totalScore);
    }
    return this.totalScore;
  }
