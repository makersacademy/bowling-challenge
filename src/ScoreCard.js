class Scorecard {

  constructor() {
    this.frame = [];
    this.frameNumber = 0
    this.rollNumber = 0
  };

  addFrame(roll1, roll2) {
    this.frame.push(roll1, roll2)
    this.frameNumber += 1
    this.rollNumber += 2
    return roll1 + roll2
  }


  score() {
    var result = 0;
    var rollIndex = 0

    var game = this;
    for (var indexOfFrame = 0; indexOfFrame < 10; indexOfFrame++) {
      if (isStrike()) {
          result += getStrikeScore();
          rollIndex ++
      }
        else if (isSpare()) {
          result += getSpareScore();
          rollIndex += 2
      } 
        else { 
          result += getNormalScore();
          rollIndex += 2
      }
    }
    
    return result;

    function isStrike() {
      return game.frame[rollIndex] === 10;
    }

    function isSpare() {
      return game.frame[rollIndex] + game.frame[rollIndex + 1] === 10;
    }

    function getStrikeScore() {
      return game.frame[rollIndex] + game.frame[rollIndex + 1] + game.frame[rollIndex + 2] + game.frame[rollIndex + 3];
    }

    function getSpareScore() {
      return game.frame[rollIndex] + game.frame[rollIndex + 1] + game.frame[rollIndex + 2];
    }

    function getNormalScore() {
      return game.frame[rollIndex] + game.frame[rollIndex + 1];
    }
    
  }
  
  totalScore(){
    let sum = this.frame.reduce((accumVal, currentValue) => {
        return accumVal + currentValue;
      }, 0);
        return sum;
  };



};