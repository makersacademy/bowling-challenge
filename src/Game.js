

function Game() {
  this._frames = [ ];
  this.currentScore = 0;
  this.addFrame();
}

  Game.prototype = {
    addFrame: function() {
      if (this._frames.length < 9) {
        this._frames.push(new Frame());
      } else {
        this._frames.push(new TenthFrame());
      }
      this.currentFrame = this._frames[this._frames.length-1];
    },

    bowl: function() {
      if (this.currentFrame.canBowl()) {
        return this.currentFrame.bowl();
      } else {
        this.calculateScore();
        this.addFrame();
        return this.currentFrame.bowl();
      }
    },

    gameOver: function() {
      if (this._frames.length === 10 && !this._frames[9].canBowl()) {
        return true;
      }
      return false;
    },

    calculateScore: function() {
      var i;
      var tempScore = 0;
      var tempBonus = 0;
      for(i = 0; i < this._frames.length; i++) {
        var thisFrame = this._frames[i];
        if(thisFrame === this._frames[10]) {
          tempScore += this.calculateTenthFrame(thisFrame);
        } else {
        tempBonus += this.calculateBonus(thisFrame, this._frames[i+1]);
        tempScore += thisFrame.firstBowl + thisFrame.secondBowl;
        }
      }
      this.currentScore = tempScore + tempBonus;
      return this.currentScore
    },

    calculateTenthFrame: function(thisFrame) {
      var tempScore = 0
      if(thisFrame.thirdBowl !== null) {
        tempScore = thisFrame.firstBowl + thisFrame.secondBowl + thisFrame.thirdBowl
      } else {
        tempScore = thisFrame.firstBowl + thisFrame.secondBowl
      }
      return tempScore;
    },

    calculateBonus: function(thisFrame, nextFrame) {
      var returnValue = 0;
      if(nextFrame === undefined) {
        return 0;
      }
      if(thisFrame.isASpare()) {
         returnValue += nextFrame.firstBowl;
      } else if(thisFrame.isAStrike()) {
         var secondBowl = nextFrame.secondBowl;
         returnValue += nextFrame.firstBowl;
         returnValue += secondBowl === null ? 0 : secondBowl;
      }
      return returnValue;
    }
}
