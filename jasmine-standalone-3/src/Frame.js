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

  var scoreroll3 = 0

  this._addscoreroll1 = function(rollscore) {
    scoreroll1 = rollscore;
  }

  this._addscoreroll2 = function(rollscore) {
    scoreroll2 = rollscore;
  }

  this._addscoreroll3 = function(rollscore) {
    scoreroll3 = rollscore;
  }

  this.scoreroll1 = function() {
    return scoreroll1;
  }

  this.scoreroll2 = function() {
    return scoreroll2;
  }

  this.scoreroll3 = function() {
    return scoreroll3;
  }

  this.addroll = function(rollscore) {

    if(framenumber == 9) {

      if(rollnumber == 0) {
        var roll = new Roll(rollscore);
        this._addscoreroll1(roll.rollvalue);
        this._addrollnumber();
      }

      else if(rollnumber == 1) {
        var roll = new Roll(rollscore);
        this._addscoreroll2(roll.rollvalue);
        this._addrollnumber();
      }

      else if(rollnumber == 2 && scoreroll1 == 10 && scoreroll2 == 10) {
        var roll = new Roll(rollscore);
        this._addscoreroll3(roll.rollvalue);
        this._addrollnumber();
      }

      else if(rollnumber == 2 && (scoreroll1 + scoreroll2) == 10 && !(scoreroll1 == 10)) {
        var roll = new Roll(rollscore);
        this._addscoreroll3(roll.rollvalue);
        this._addrollnumber();
      }

      else {
        return "Frame Complete"
      }

    }

    else if(rollnumber== 0 && rollscore == 10) {
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

    else {
      return "Frame Complete"
    }
  }

}
