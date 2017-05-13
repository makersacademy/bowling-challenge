function Frame(bowls) {
   this.bowls = bowls;
  }

  Frame.prototype.totalScore = function(nextFrame, nextNextFrame){
      if (this._isStrike()){
        return this.strikeScore(nextFrame, nextNextFrame);
      }
      else if (this._isSpare()){
        return this.spareScore(nextFrame);
      }
      else {
        return this.frameScore()
      }
  };

  Frame.prototype.frameScore = function(nextFrame){
      return this.bowls.reduce(function(a,b){
        return a + b;
      })
    }

  Frame.prototype.strikeScore = function(nextFrame, nextNextFrame){
    if (nextFrame._isStrike()){
      return this.frameScore() + nextFrame.frameScore() + nextNextFrame.frameScore();
    }
    return this.frameScore() + nextFrame.frameScore();
  }

  Frame.prototype.spareScore = function(nextFrame){
    return this.frameScore() + nextFrame.bowls[0];
  }

  Frame.prototype._isSpare = function(){
    return this.bowls[0] + this.bowls[1] === 10;
  };

  Frame.prototype._isStrike = function(){
    return this.bowls[0] === 10;
  };
