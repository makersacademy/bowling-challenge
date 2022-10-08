class BowlingScorecard{
  constructor(){
    this.frame = 0;   // up to 10 frames
    this.roll = 0;   // can be either 0 or 1 - 2 rolls per frame
    this.score = 0;   // updated
    this.pinsDown = 0;  // represent the number of pins knocked down
    this.gameArray = [[],[],[],[],[],[],[],[],[],[]];
  }
  
  userInput(number) {
    this.pinsDown = number
  }

  frameRollLogic() {
    if (this.roll === 0 && this.pinsDown === 10) {
      this.frame +=1
    } else if (this.roll === 1) {
      this.roll = 0;
      this.frame += 1;
    } else {
      this.roll += 1;
    }
  }

  populateGameArray() {
    if (this.frame !== 9) {
      this.gameArray[this.frame].push(this.pinsDown)
      this.frameRollLogic()
    } else { //round 10 includes three rolls. to add validation
       if (this.gameArray[this.frame].length < 4) {  
          this.gameArray[this.frame].push(this.pinsDown);
      }
    }
  }
  
  getGameArray() {
    return this.gameArray;
  }
  
  scorecard() {
    // score from pins down
    this.score = (this.gameArray.flat().reduce((sum, pins) => sum + pins));
    // score from bonuses
    let bonus = 0
    for (let i = 0; i < 9; i++ ) {
      //bonuses from strikes
      if (this.gameArray[i].length === 1) {
        bonus += (this.gameArray[i+1][0] + this.gameArray[i+1][1]);
        //bonuses from spares
      } else if  (this.gameArray[i].length === 2 && this.gameArray[i][0] + this.gameArray[i][1] === 10) {
        bonus += this.gameArray[i+1][0];
      }
    }
    this.score += bonus
  }

  getScore(){
    return this.score
  }
}

module.exports = BowlingScorecard;

// game = new BowlingScorecard;
// game.userInput(1) //f0
// game.populateGameArray()
// game.userInput(4)
// game.populateGameArray()
// game.userInput(4)  //f1
// game.populateGameArray()
// game.userInput(5)
// game.populateGameArray()
// game.userInput(6)  //f2
// game.populateGameArray()
// game.userInput(4)
// game.populateGameArray()
// game.userInput(5)  //f3
// game.populateGameArray()
// game.userInput(5)
// game.populateGameArray()
// game.userInput(10) //f4
// game.populateGameArray()
// game.userInput(0) //f5
// game.populateGameArray()
// game.userInput(1)
// game.populateGameArray()
// game.userInput(7)  //f6
// game.populateGameArray()
// game.userInput(3)
// game.populateGameArray()
// game.userInput(6) //f7
// game.populateGameArray()
// game.userInput(4)
// game.populateGameArray()
// game.userInput(10)   //f8
// game.populateGameArray()
// game.userInput(2)  //f9
// game.populateGameArray()
// game.userInput(8) 
// game.populateGameArray()
// game.userInput(6)
// game.populateGameArray()
// game.scorecard()
// console.log(game.getGameArray())
// console.log(game.getScore())