function ScoreCalculator() {

}

ScoreCalculator.prototype.calculateTotal = function(frames) {
  var total = 0
  for(var i = 0; i <= frames.length; i++) {
    if(i === frames.length) {
      return total
    } else {
      total += frames[i].firstAndSecondRollScore()
    }
  }
}
