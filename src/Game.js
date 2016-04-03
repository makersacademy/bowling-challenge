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
    if (pins === 10)
    {
      this.rollScores[this.roll+1] = 0;
      this.roll +=2;
    }
    else
    {
      this.roll += 1;
    }
  }

Game.prototype.getTotal = function()
  {
    for (var i = 0; i < this.FRAMES; i++)
      {
        var firstRoll = this.rollScores[ 2*i];
        var secondRoll = this.rollScores[2*i + 1];
        var thirdRoll = this.rollScores[2*i + 2];
        var fourthRoll = this.rollScores[2*i + 3];
        var subTotal =  firstRoll + secondRoll;
        if (firstRoll === 10) {
          subTotal += (thirdRoll + fourthRoll);
          this.totalScore += subTotal;
        }
        else if (firstRoll + secondRoll === 10 && secondRoll != 0)
          {
            subTotal += thirdRoll;
            this.totalScore += subTotal;
          }
        else
          {
            console.log(subTotal);
            this.totalScore += subTotal;
          }
      }
    return this.totalScore;
  }
