var Frame = function() {
  this.rollScore = [];
  this.throwCount = 0;
  this.bonus = '';
  };

  Frame.prototype.roll = function(downedPins) {
    if(downedPins === 10) {
      this.throwCount += 2;
    }
      this.rollScore.push(downedPins);
      this.throwCount ++;
  };

  Frame.prototype.frameScore = function() {
    var cumulativeScore = 0;
    for(var i =0; i < this.rollScore.length; i++ ) {
      cumulativeScore += this.rollScore[i];
    }
    return cumulativeScore;
  };

  Frame.prototype.isComplete = function() {
    return this.throwCount >= 2
  };

  Frame.prototype.bonusSetter = function() {
    if(this.rollScore[0] === 10) {
      this.bonus = 'strike'
      return this.bonus
    } else if (this.rollScore[0] < 10 && this.frameScore() === 10) {
      this.bonus = 'spare'
      return this.bonus
    };
  };
