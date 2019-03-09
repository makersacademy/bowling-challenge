function Scorer() {
  this.rolls = ({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0
  })

  this.bonus = ({
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
    this.rolls[id] = number
  }

  Scorer.prototype.spareCalculator = function() {
  var i=1;
  for (i = 1; i < 21; i++) {
    if (i % 2 > 0) {
      if ((parseInt(this.rolls[i],10) < 10) && ((parseInt(this.rolls[i],10) + parseInt(this.rolls[(i+1)], 10) === 10))) {
        this.bonus[(i+1)/2] = this.rolls[(i+2)]
        this.notes[(i+1)/2] = "Spare"
      }
      else if ((parseInt((this.rolls[i]),10)) === 10) {
        if (parseInt((this.rolls[(i+3)]),10) === 0) {
          this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+4)]),10)))
        } else {
          this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+3)]),10)))
        }
        this.notes[(i+1)/2] = "Strike"
      } else {
        this.notes[(i+1)/2] = null
        this.bonus[(i+1)/2] = null
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
        this.totalScore += parseInt(this.rolls[i], 10);
      }
    }
    for (var i in this.bonus){
      if (this.bonus[i] !== null) {
        this.totalScore += parseInt(this.bonus[i], 10);
      }
    }
  }
}
