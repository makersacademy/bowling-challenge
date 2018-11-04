function Game(){
  var rolls = [];

  this.roll = function(pins){
    rolls.push(pins)
  }

  this.score = function() {
    var total = 0

    for(var frame = 0; frame < rolls.length; frame += 2) {
      var frameScore = rolls[frame] + rolls[frame+1]

      var isSpare = (frameScore === 10)

      if(isSpare) {
        total += frameScore + rolls[frame+2]
      } else {
        total += frameScore
      }
    }

    return total
  }
}
