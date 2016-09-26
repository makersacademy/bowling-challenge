/*jshint -W117 */

function TenthFrame() {
  this.firstBowl = null;
  this.secondBowl = null;
  this.thirdBowl = null;
}

TenthFrame.prototype = {
  canBowl: function() {
    if (this.firstBowl === null || this.secondBowl === null){
      return true;
    } else if (this.secondBowl === 10 || (this.firstBowl + this.secondBowl) === 10) {
      return true;
    }
    return false;
  },

  bowl: function() {
    if(this.firstBowl === null) {
      this.firstBowl = Math.floor((Math.random() * 11));
      return this.firstBowl
    }
    if (this.secondBowl === null) {
        if(this.firstBowl === 10){
          this.secondBowl = Math.floor((Math.random() * 11));
        } else { var pinsLeft = 11 - this.firstBowl;
          this.secondBowl = Math.floor((Math.random() * pinsLeft));
        }
        return this.secondBowl
      }
    if (this.secondBowl === 10 || (this.firstBowl + this.secondBowl) === 10) {
      this.thirdBowl = Math.floor((Math.random() * 11));
      return this.thirdBowl;
    }
  },

  gameOver: function() {
    return "GAME OVER"
  },

  isAStrike: function() {
    return (this.firstBowl === 10 || this.secondBowl === 10)
  },

  isASpare: function() {
    var frameScore = this.firstBowl + this.secondBowl;
    return !(this.firstBowl === 10 || frameScore !== 10);
  },




}
