function Turn() {
  this.firstBowlScore  = null;
  this.secondBowlScore = null;
  this.overallScore    = [];
  this.turnCompleted   = false;
}

  Turn.prototype.firstBowl = function(firstScore) {
    this.firstBowlScore = firstScore;
    if(this._isStrike() === true) {
     this.completeTurn();
    }
  };

  Turn.prototype.secondBowl = function(secondScore) {
    this.secondBowlScore = secondScore;
  //   if (this.turnCompleted === true) {
  //     this.secondBowlScore = 0;
  //   } else {
  //     // do nothing
  //   }
    this.completeTurn();
  };
  //
  Turn.prototype.completeTurn = function(_turnCompleted) {
    if(this._isStrike() === true) {
      this.overallScore.push("X", "-");
  //   } else if(this._isSpare) {
  //     this.overallScore.push(this.firstBowlScore, "-");
    } else {
   this.overallScore.push(this.firstBowlScore, this.secondBowlScore);
    }
  };
  //
  // // private
  //
  Turn.prototype._isStrike = function() {
   return this.firstBowlScore === 10;
  };
  //
  // Turn.prototype._isSpare = function() {
  //   return this.firstBowlScore + this.secondBowlScore === 10;
  // };
  //
  // Turn.prototype._turnCompleted = function() {
  //   this.turnCompleted = true;
  // };
