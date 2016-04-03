function Game()
  {
    this.totalScore = 0;
    this.rollScores = [];
    this.FRAMES = 10;
    this.rollIndex = 0;
  }

Game.prototype.hit = function(pins)
  {
    this.rollScores.push(pins);
    return pins;
  }

Game.prototype.calculateTotal = function()
  {
    for ( var currentFrame = 0; currentFrame < this.FRAMES; currentFrame++ )
      {
        if ( this._isStrike())
        {
          this.totalScore += this._strikeScore();
          this.rollIndex += 1;
        }
        else if (this._isSpare() )
          {
            this.totalScore += this._spareScore();
            this.rollIndex += 2;
          }
        else
          {
            this.totalScore += this._normalScore();
            this.rollIndex += 2;
          }
      }
    return this.totalScore;
  }

  Game.prototype._isStrike = function(rollIndex)
  {
    return this._currentRoll(this.rollIndex) === 10;
  };

  Game.prototype._isSpare = function(rollIndex)
  {
    return this._currentRoll(this.rollIndex) + this._nextRoll(this.rollIndex) === 10;
  };

  Game.prototype._strikeScore = function(rollIndex)
  {
    return 10 + this._nextRoll(this.rollIndex) + this._nextNextRoll(this.rollIndex);
  }

  Game.prototype._spareScore = function(rollIndex)
  {
    return 10 + this._nextNextRoll(this.rollIndex);
  }

  Game.prototype._normalScore = function(rollIndex)
  {
    return this._currentRoll(this.rollIndex) + this._nextRoll(this.rollIndex);
  }

  Game.prototype._currentRoll = function(rollIndex)
  {
    return this.rollScores[this.rollIndex];
  }

  Game.prototype._nextRoll = function(rollIndex)
  {
    return this.rollScores[this.rollIndex + 1];
  }

  Game.prototype._nextNextRoll = function(rollIndex)
  {
    return this.rollScores[this.rollIndex + 2];
  }
