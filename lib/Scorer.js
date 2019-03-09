function Scorer() {
  this.rolls = ({
    1: {
      1: null,
      2: null,
      bonus: null
    },
    2: {
      1: null,
      2: null,
      bonus: null
    }
  })

  Scorer.prototype.storeScore = function(number,id) {
    // var idArray = id.split('-')
    var idArray = id.split('-'), id1 = idArray[0], id2 = idArray[1]
    this.rolls[id1][id2] = number
    // var id = id
    // this.rolls[id] = number
  }

//   Scorer.prototype.spareCalculator = function() {
//     var i=1;
//     for (i = 1; i < 3; i++) {
//       if (((this.rolls[i][1]) < 10) && (((this.rolls[i][1]) + (this.rolls[i][2]) === 10))) {
//         console.log("spare called")
//         this.rolls[i].bonus = this.rolls[(i+1)][1]
//         this.rolls[i].notes = "Spare"
//       } else if ((this.rolls[i][1]) === 10) {
//         console.log("strike called")
//         this.rolls[i].bonus = ((this.rolls[(i+1)][1]) + this.rolls[(i+1)][2])
//         this.rolls[i].notes = "Strike"
//       } else {
//         console.log("nothing called")
//       }
//     }
//     console.log(this.rolls)
//   }
// }

  Scorer.prototype.spareCalculator = function() {
    var i=1;
    for (i = 1; i < 3; i++) {
      if ((parseInt(this.rolls[i][1],10) < 10) && ((parseInt(this.rolls[i][1],10) + parseInt(this.rolls[i][2], 10) === 10))) {
        // console.log("spare called")
        this.rolls[i].bonus = this.rolls[(i+1)][1]
        this.rolls[i].notes = "Spare"
      } else if ((parseInt((this.rolls[i][1]),10)) === 10) {
        // console.log("strike called")
        this.rolls[i].bonus = ((parseInt((this.rolls[(i+1)][1]),10) + parseInt((this.rolls[(i+1)][2]),10)))
        this.rolls[i].notes = "Strike"
      } else {
        console.log("nothing called")
      }
    }
    console.log(this.rolls)

    // console.log("function called")
    // console.log(parseInt((this.rolls[1][1]),10) === 6)
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
