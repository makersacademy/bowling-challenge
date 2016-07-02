function BowlingGame()  {
  this.scoreBoard = [];
}

BowlingGame.prototype = {
  roll: function(numberOfPins) {
    this.scoreBoard.push(numberOfPins);
  },
  score: function() {
    var scoreNumber = 0
    for(var frame = 0; frame < 20; frame+=2) {
      if(this.scoreBoard[frame] + this.scoreBoard[frame + 1] === 10){
        scoreNumber += this.scoreBoard[frame + 2]
      }
      scoreNumber += this.scoreBoard[frame] + this.scoreBoard[frame+1];
    }
    return scoreNumber;
  }
}
