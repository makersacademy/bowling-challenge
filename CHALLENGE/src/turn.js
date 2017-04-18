function Turn() {
  this.firstBowlScore  = null;
  this.secondBowlScore = null;
  this.overallScore    = [];
  this.turnCompleted   = false;
}

  Turn.prototype.firstBowl = function(firstScore) {
    if(this.turnCompleted === true) {
      throw new Error("Next player's turn.");
    } else {
      this.firstBowlScore = firstScore;
      if(this._isStrike() === true) {
       this.completeTurn();
      }
    }
  };

  Turn.prototype.secondBowl = function(secondScore) {
    if(this.turnCompleted === true) {
      throw new Error("Next player's turn.");
    } else {
      this.secondBowlScore = secondScore;
      this.completeTurn();
    }
  };

  Turn.prototype.completeTurn = function(_turnCompleted) {
    if(this._isStrike() === true) {
      this.overallScore.push("X", "-");
    } else if(this._isSpare() === true) {
      this.overallScore.push(this.firstBowlScore.toString(), "/");
    } else {
   this.overallScore.push(this.firstBowlScore.toString(), this.secondBowlScore.toString());
    }
    this._turnCompleted();
  };

  // private

  Turn.prototype._isStrike = function() {
   return this.firstBowlScore === 10;
  };

  Turn.prototype._isSpare = function() {
    return this.firstBowlScore + this.secondBowlScore === 10;
  };

  Turn.prototype._turnCompleted = function() {
    this.turnCompleted = true;
  };
