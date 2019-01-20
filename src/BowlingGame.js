class BowlingGame {
  constructor(){
    this.frame = 0;
    this.rolls = [];
  }

  //pins knocked down is inputted by user
  getScore(){
    var result = 0;
    var rollNum = 0;
    var game = this;

   for(var frameNum = 0; frameNum < 10; frameNum++) {
     //calculating a spare whole frame plus next roll 
     if(isSpare()) {
      result += getSpareScore() ;
    } else {
      result += getNormalScore();
    }
      rollNum += 2; //2 rolls in each frame 
  }
   return result; 
  
   function isSpare() {
     return game.rolls[rollNum] + game.rolls[rollNum + 1] == 10
   }

   function getSpareScore() {
    return game.rolls[rollNum] + game.rolls[rollNum + 1] + game.rolls[rollNum + 2]
   }
   function getNormalScore(){
    return game.rolls[rollNum] + game.rolls[rollNum + 1];
   }
  };

  roll(pinsDown){
    this.rolls.push(pinsDown);
  }

  
  }
  