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
    if(this.canBowl() === true && this.firstBowl === null) {
      console.log("one")
      this.firstBowl = Math.floor((Math.random() * 11));
    } else if (this.canBowl() === true && this.secondBowl === null) {
      console.log("two")
      var pinsLeft = 11 - this.firstBowl;
      console.log(pinsLeft);
      this.secondBowl = Math.floor((Math.random() * pinsLeft));
    }
  }



}
