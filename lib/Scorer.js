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

  Scorer.prototype.spareCalculator = function() {
    var i = 1;
    // if (((this.rolls[row_number][1]) + (this.rolls[row_number][2])) === 10) {
    //   this.rolls[row_number].bonus = this.rolls[(row_number + 1)][1];
    //   console.log('Walking east one step');
    // }
    // console.log(this.rolls[i][1]);
    // console.log(this.rolls[i][2]);
    // this.rolls[i].bonus = this.rolls[(i+1)][1];
    while (i < 3) {
      // console.log('Walking east one step');
      // var row_total = (parseInt(this.rolls[i][1], 10) + parseInt(this.rolls[i][2]), 10)
      // console.log(row_total)
      // row_total = parseInt(row_total, 10)
      // console.log(row_total)
      if ((this.rolls[i][1]) < 10 && ((this.rolls[i][1] + this.rolls[i][2]) === 10)) {
        this.rolls[i].bonus = this.rolls[(i+1)][1]
        // console.log('Walking east one step');
      } else if ((this.rolls[i][1]) === 10) {
        this.rolls[i].bonus = ((this.rolls[(i+1)][1]) + this.rolls[(i+1)][2])
      }
      i++
    }
  }
}
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };


// Way of retrieving values from table dynamically?
// var tr = document.getElementById('id1');
// var td = tr.getElementsByTagName("td");
// for(var i=0;i<td.length;i++) {
//     console.log(td[i].innerHTML);
// }
