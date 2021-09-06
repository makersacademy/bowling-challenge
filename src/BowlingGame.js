class bowlingGame {
  
  constructor() {
    this.rolls = [];
    this.totalScore = 0;
    
  }

  roll(pins) {
    this.rolls.push(pins);
  };

  score() {
    let rollIndex = 0;
    for(let frameIndex = 0; frameIndex < 10; frameIndex++) {

      if(this.isStrike(rollIndex)) {
        this.totalScore += this.getStrikeScore(rollIndex);
        rollIndex++;

      } else if(this.isSpare(rollIndex)) {
         this.totalScore += this.getSpareScore(rollIndex);
         rollIndex += 2;
         
      } else { 
        this.totalScore += this.getFrameScore(rollIndex);
        rollIndex += 2;
      }
      
    }

    return this.totalScore;

  };

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }
  
  getStrikeScore(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
   }
   
   getSpareScore(rollIndex) {
   return 10 + this.rolls[rollIndex + 2];
  }

  getFrameScore(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

};
