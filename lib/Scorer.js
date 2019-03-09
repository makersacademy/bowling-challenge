
function Scorer() {
  // this.rolls = ({
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  //   10: 0,
  //   11: 0,
  //   12: 0,
  //   13: 0,
  //   14: 0,
  //   15: 0,
  //   16: 0,
  //   17: 0,
  //   18: 0,
  //   19: 0,
  //   20: 0,
  //   21: 0,
  //   22: 0
  // })

  this.rolls = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  this.bonus = [0,0,0,0,0,0,0,0,0,0]

  // this.bonus = ({
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  //   10: 0
  // })

  this.notes = ({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null
  })

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
        this.notes[(i+1)/2] = null
        this.bonus[(i+1)/2] = 0
      }
    }
  }
}

  Scorer.prototype.updatedBonusNotes = function() {
    var i=1;
    for (i = 1; i < 20; i++) {
    if (i ) {
      $("#bonus-" + i).text(this.bonus[i]);
      $("#note-" + i).text(this.notes[i]);
    }

    else if (i % 2 === 0) {
      $("#bonus-" + (i / 2)).text(this.bonus[i/2]);
      $("#note-" + (i / 2)).text(this.notes[i/2]);
    }
    }
  }

  Scorer.prototype.calculateTotalScore = function() {
    this.totalScore = 0
    for (var i in this.rolls){
      if ((this.rolls[i] !== null) && (i < 21)) {
        this.totalScore += this.rolls[i];
      }
    }
    for (var i in this.bonus){
      if (this.bonus[i] !== null) {
        this.totalScore += this.bonus[i];
      }
    }
  }
}
