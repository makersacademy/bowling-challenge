function Scorer() {
  this.rolls = ({
    1: {
      1: null,
      2: null
    },
    2: {
      1: null,
      2: null
    }
  })

  Scorer.prototype.storeScore = function(number,id) {
    // var idArray = id.split('-')
    var idArray = id.split('-'), id1 = idArray[0], id2 = idArray[1]
    this.rolls[id1][id2] = number
    // var id = id
    // this.rolls[id] = number
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
