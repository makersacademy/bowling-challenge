function BowlingGame()  {
  this.scoreBoard = [];
}

BowlingGame.prototype = {
  roll: function(numberOfPins) {
    this.scoreBoard.push(numberOfPins);
    if(numberOfPins === 10 && this.scoreBoard.length % 2 === 1){
      this.scoreBoard.push(0);
    }
  },
  evaluateStrikeOrSpare: function(frame) {
    if(this.scoreBoard[frame] === 10){
      return this.scoreBoard[frame + 2] + this.scoreBoard[frame + 3];
    } else if(this.scoreBoard[frame] + this.scoreBoard[frame + 1] === 10){
      return this.scoreBoard[frame + 2];
    }
    return 0;
  },
  score: function() {
    var scoreNumber = 0
    for(var frame = 0; frame < 20; frame+=2) {
      scoreNumber += this.evaluateStrikeOrSpare(frame);
      scoreNumber += this.scoreBoard[frame] + this.scoreBoard[frame+1];
    }
    return scoreNumber;
  }
}
