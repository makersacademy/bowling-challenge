function Frame(framenumber) {
  this.framenumber = framenumber

  var rollnumber = 0

  this._addrollnumber = function() {
    rollnumber += 1;
  }

  this.rollnumber = function() {
   return rollnumber;
  }

  var scoreroll1 = 0

  var scoreroll2 = 0

  this._addscoreroll1 = function(rollscore) {
    scoreroll1 = rollscore;
  }

  this._addscoreroll2 = function(rollscore) {
    scoreroll2 = rollscore;
  }

  this.scoreroll1 = function() {
    return scoreroll1;
  }

  this.scoreroll2 = function() {
    return scoreroll2;
  }

  this.addroll = function(rollscore) {

    if(rollnumber== 0 && rollscore == 10) {
      var roll = new Roll(rollscore);
      this._addscoreroll1(roll.rollvalue);
      this._addrollnumber();
      this._addrollnumber();
    }

    else if(rollnumber == 0) {
      var roll = new Roll(rollscore);
      this._addscoreroll1(roll.rollvalue);
      this._addrollnumber();
    }

    else if(rollnumber == 1) {
      var roll = new Roll(rollscore);
      this._addscoreroll2(roll.rollvalue);
      this._addrollnumber();
    }

    else if(rollnumber == 2) {
      return "Frame Complete"
    }
  }

}
