function Frame(framenumber) {
  this.framenumber = framenumber

  var rollnumber = 0

  this._addrollnumber = function() {
    rollnumber += 1;
  }

  this.rollnumber = function() {
   return rollnumber;
 }

  this.score = 0

}
