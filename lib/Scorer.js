function Scorer() {
  this.rolls = ({

  })

  this.bonus = ({

  })

  this.notes = ({

  })

  this.totalScore = 0

  Scorer.prototype.storeScore = function(number,id) {
    // var idArray = id.split('-'), id1 = idArray[0], id2 = idArray[1]
    this.rolls[id] = number
  }

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
          this.bonus[(i+1)/2] = ((parseInt((this.rolls[(i+2)]),10) + parseInt((this.rolls[(i+3)]),10)))
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
      if (this.rolls[i] !== null) {
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



// Way of retrieving values from table dynamically?
// var tr = document.getElementById('id1');
// var td = tr.getElementsByTagName("td");
// for(var i=0;i<td.length;i++) {
//     console.log(td[i].innerHTML);
// }
// }
// }
