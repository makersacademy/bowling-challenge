var Game = function() {
  this.scoreCard = [];
  this.result = 0
};

Game.prototype = {

  roll: function(pins) {
    this.scoreCard.push(pins); 
  }, 

  score: function() {
    var rollNumber = 0;
    for (var frameNumber = 0; frameNumber < 10; frameNumber++){
      if (isAStrike()){
        this.result += calculateSpareAndStrikeScore();
        rollNumber ++; 
        console.log(this.result)
      } else if (isASpare()) {
        this.result += calculateSpareAndStrikeScore();
        rollNumber += 2;
      } else {
        this.result += calculateNormalScore();
        rollNumber += 2;
        }
      }
    return this.result;  
    
    function isASpare() {
      return (game.scoreCard[rollNumber] + game.scoreCard[rollNumber +1] === 10);
    }

    function isAStrike() {
      return (game.scoreCard[rollNumber] === 10);
    }

    function calculateSpareAndStrikeScore() {
      return game.scoreCard[rollNumber] + game.scoreCard[rollNumber +1] + game.scoreCard[rollNumber +2];
    }

    function calculateNormalScore() {
      return game.scoreCard[rollNumber] + game.scoreCard[rollNumber +1];
    }
  },
};





