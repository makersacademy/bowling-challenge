function Frame(framenumber) {
  this.framenumber = framenumber

  var rollnumber = 0

  this._addrollnumber = function() {
    rollnumber += 1;
  }

  this.rollnumber = function() {
   return rollnumber;
  }

  var score = 0

  this._addscore = function(rollscore) {
    score += rollscore;
  }

  this.score = function() {
    return score;
  }

  this.addroll = function(rollscore) {
    roll = new Roll(rollscore)
    this._addscore(roll.rollvalue)
    this._addrollnumber()
  }

}
