/*jshint -W117 */


function Frame() {
  this.firstBowl = null;
  this.secondBowl = null;
}

Frame.prototype = {
  canBowl: function() {
    if (this.firstBowl === null){
      return true;
    }   else if (this.firstBowl !== 10 && this.secondBowl === null) {
      return true }
    return false;
  },

  bowl: function() {
    if(this.firstBowl === null) {
      this.firstBowl = Math.floor((Math.random() * 11));
      return this.firstBowl
    } else {
      var pinsLeft = 11 - this.firstBowl;
      this.secondBowl = Math.floor((Math.random() * pinsLeft));
      return this.secondBowl
    }
  },

  isAStrike: function() {
    return (this.firstBowl === 10)
  },

  isASpare: function() {
    var frameScore = this.firstBowl + this.secondBowl;
    return !(this.firstBowl === 10 || frameScore !== 10);
  },





}
