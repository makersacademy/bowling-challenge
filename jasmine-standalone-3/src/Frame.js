function Frame(framenumber) {
  this.framenumber = framenumber

  var rollnumber = 0

  this._addrollnumber = function() {
    rollnumber += 1;
  }

  this.rollnumber = function() {
   return rollnumber;
  }

  var scorerole1

  this._addscorerole1 = function(rollscore) {
    scorerole1 = rollscore;
  }

  this.scorerole1 = function() {
    return scorerole1;
  }

  this.addroll = function(rollscore) {
    roll = new Roll(rollscore)
    this._addscorerole1(roll.rollvalue)
    this._addrollnumber()
  }

}
