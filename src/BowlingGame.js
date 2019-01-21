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
     //strike at first will equal the 10 + total of next 2 rolls
     if(isStrike()) {
       result += getStrikeScore();
       rollNum ++;
        //calculating a spare whole frame plus next roll 
     } else if(isSpare()) {
       result += getSpareScore();
       rollNum += 2;
    } else {
      result += getNormalScore();
      //2 rolls in each frame 
      rollNum += 2;
    }
       
  }
   return result; 
  
   function isStrike() {
    return game.rolls[rollNum] == 10
  }
   function isSpare() {
     return game.rolls[rollNum] + game.rolls[rollNum + 1] == 10
   }
   
   function getStrikeScore() {
    return game.rolls[rollNum] + game.rolls[rollNum + 1] + game.rolls[rollNum + 2]
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
  