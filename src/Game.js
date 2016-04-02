function Game()
  {
    this.totalScore = 0;
    this.roll = 0
    this.rollScores = [];
    this.FRAMES = 10;
  }

Game.prototype.hit = function(pins)
  {
    this.rollScores[this.roll] = pins;
    this.roll += 1;
  }

Game.prototype.getTotal = function()
  {
    for (var i = 0; i < this.FRAMES; i++)
      {
        var firstRoll = this.rollScores[ 2*i];
        var secondRoll = this.rollScores[2*i + 1];
        var subTotal =  firstRoll + secondRoll;
        if (firstRoll + secondRoll === 10)
          {
            var thirdRoll = this.rollScores[2*i + 2];
            subTotal += thirdRoll;
            this.totalScore += subTotal;
          }
        else
          {
            subTotal = firstRoll + secondRoll;
            this.totalScore += subTotal;
          }
      }
    return this.totalScore;
  }
