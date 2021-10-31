class BowlingGame {
  constructor(){
    this.rolls = [];
    // this.currentFrame = 1;
  };
  roll(number){
    this.rolls.push(number);
  };
  score(){
    let totalScore = 0;
    let currentRoll = 0;
    while(currentRoll < this.rolls.length){
      if((this.rolls[currentRoll] + this.rolls[currentRoll + 1]) == 10){
        totalScore += (this.rolls[currentRoll] + this.rolls[currentRoll + 1] + this.rolls[currentRoll + 2]);
      }
      else {
        totalScore += (this.rolls[currentRoll] + this.rolls[currentRoll + 1]);
      };
      currentRoll += 2;
    }
    return totalScore;
  };
  
};



module.exports = BowlingGame;