function Game()
  {
    this.totalScore = 0;
    this.rollScores = [];
    this.FRAMES = 10;
  }

Game.prototype.hit = function(pins)
  {
    this.rollScores.push(pins);
  }

Game.prototype.getTotal = function()
  { var rollIndex = 0;
    for (var i = 0; i < this.FRAMES; i++)
      {
        if (this.rollScores[rollIndex] === 10) {
          this.totalScore += 10 + this.rollScores[rollIndex+1] + this.rollScores[rollIndex + 2];
          rollIndex +=1;
        }
        else if (this.rollScores[rollIndex] + this.rollScores[rollIndex+1] === 10 )
          {
            this.totalScore += 10 + this.rollScores[rollIndex + 2];
            rollIndex +=2;
          }
        else
          {
            this.totalScore += this.rollScores[rollIndex] + this.rollScores[rollIndex + 1];
            rollIndex +=2;
          }
      }
    return this.totalScore;
  }
