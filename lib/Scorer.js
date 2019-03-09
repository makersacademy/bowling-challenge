function Scorer() {
  this.rolls = ({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
    21: null,
    22: null
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
    // var idArray = id.split('-'), id1 = idArray[0], id2 = idArray[1]
    this.rolls[id] = number
  }

  // Scorer.prototype.spareCalculator = function() {
  //   var i=1;
  //   for (i = 1; i < 20; i++) {
  //     if (i % 2 > 0) {
  //       if ((parseInt((this.rolls[i]),10)) == 10) {
  //         console.log("strike called")
  //         if (((this.rolls[i+2] != null) && (this.rolls[i+3] != null)) && ((this.rolls[i+2] != 10))) {
  //           this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+3)]),10)))
  //         } else if (((this.rolls[i+2] != null) && (this.rolls[i+3] != null)) && ((this.rolls[i+2] === 10)) && (i != 19)) {
  //           this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+4)]),10)))
  //         } else if (((this.rolls[i+2] != null) && (this.rolls[i+3] != null)) && ((this.rolls[i+2] === 10))) {
  //           this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+3)]),10)) && (i != 19))
  //         }
  //         this.notes[(i+1)/2] = "Strike"
  //       } else if ((parseInt(this.rolls[i],10) < 10) && (((parseInt(this.rolls[i],10) + parseInt(this.rolls[(i+1)], 10)) === 10))) {
  //         console.log("spare called")
  //         if ((this.rolls[i+1] != null) && (this.rolls[i+2] != null)) {
  //           this.bonus[(i+1)/2] = this.rolls[(i+2)]
  //         }
  //         this.notes[(i+1)/2] = "Spare"
  //       } else {
  //         console.log("nothing called")
  //       }
  //     }
  //   }
  //   console.log(this.rolls)
  //   console.log(this.bonus)
  //   console.log(this.notes)
  // }

  Scorer.prototype.spareCalculator = function() {
  var i=1;
  for (i = 1; i < 20; i++) {
    if (i % 2 > 0) {
      if ((parseInt(this.rolls[i],10) < 10) && ((parseInt(this.rolls[i],10) + parseInt(this.rolls[(i+1)], 10) === 10))) {
        console.log("spare called")
        this.bonus[(i+1)/2] = this.rolls[(i+2)]
        this.notes[(i+1)/2] = "Spare"
      }
      else if ((parseInt((this.rolls[i]),10)) === 10) {
        console.log("strike called")
        if (parseInt((this.rolls[(i+3)]),10) === 0) {
          this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+4)]),10)))
        } else {
          this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+3)]),10)))
        }
        this.notes[(i+1)/2] = "Strike"
      } else {
        console.log("nothing called")
      }
    }
  }
  console.log(this.rolls)
  console.log(this.bonus)
  console.log(this.notes)
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
    console.log(this.totalScore)
  }
}
