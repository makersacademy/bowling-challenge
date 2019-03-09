
function Scorer() {
  this.rolls = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  this.bonus = [0,0,0,0,0,0,0,0,0,0]
  this.notes = ["","","","","","","","","",""]

  this.totalScore = 0

  Scorer.prototype.storeScore = function(number,id) {
    this.rolls[id] = parseInt(number,10)
    console.log(this.rolls)
  }

  Scorer.prototype.bonusCalculator = function() {
  var i=1;
  for (i = 1; i < 21; i++) {
    // if user rolling first ball of this frame...
    if (i % 2 > 0) {
      // if user rolls a spare
      if ((this.rolls[i] < 10) && ((this.rolls[i] + this.rolls[(i+1)]) === 10)) {
        // update bonus scores and notes in right place
        this.bonus[(i+1)/2] = this.rolls[(i+2)]
        this.notes[(i+1)/2] = "Spare"
      }
      // otherwise if user rolls a strike...
      else if (this.rolls[i] === 10) {
        // and they're not about to go onto a bonus roll
        if ((this.rolls[(i+3)] === 0) && (i < 19)) {
          // and if one of the next two rolls is blank, (i.e. they followed with a strike) skip to the next frame
          this.bonus[(i+1)/2] = (this.rolls[(i+2)] + this.rolls[(i+4)])
        } else {
          // else award the bonus as the two following frames as normal
          this.bonus[(i+1)/2] = (this.rolls[(i+2)] + this.rolls[(i+3)])
        }
        this.notes[(i+1)/2] = "Strike"
      } else {
        // reset the notes and bonus array if it's not needed (will overwrite any previous incorrect inputs)
        this.notes[(i+1)/2] = ""
        this.bonus[(i+1)/2] = 0
      }
    }
  }
}

  Scorer.prototype.updatedBonusNotes = function() {
    var i=1;
    for (i = 1; i < 20; i++) {
    if (i) {
      $("#bonus-" + i).text(this.bonus[i]);
      $("#note-" + i).text(this.notes[i]);
    }
    }
  }

  Scorer.prototype.calculateTotalScore = function() {
    // remove last two rolls so not double counted (now stored in bonus array)
    var totalScoreArray = this.rolls.slice(1, 21).concat(this.bonus)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.totalScore = totalScoreArray.reduce(reducer)

  }

  Scorer.prototype.removeNullsFromRolls = function() {
    this.rolls = this.rolls.map(function(val, i) {
      return isNaN(val) ? 0 : val;
    });
  }
}
