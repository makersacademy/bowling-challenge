function Frame(bowls) {
   this.bowls = bowls;
  }

  Frame.prototype.total = function(){
      return this.bowls.reduce(function(a,b){
        return a + b;
      })
    }

  Frame.prototype._isSpare = function(){
    return this.bowls[0] + this.bowls[1] === 10;
  };

  Frame.prototype._isStrike = function(){
    return this.bowls[0] === 10;
  };
