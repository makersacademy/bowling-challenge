class BowlingGame {
  constructor(){
    this.rolls = [];
    this.currentFrame = 1;
  };
  roll(number){
    if(number > 10){
      throw "Invalid Roll";
    }
    else {
      this.rolls.push( { value: number, frame: this.currentFrame } );
    };
    
  };
  // [10, 5, 5, 10, 5, 3]
  score(){
    let totalScore = 0;
    let currentRoll = 0;
    while(currentRoll < this.rolls.length){
      if(this.currentFrame == 10){
        totalScore += this.sumTheRest(currentRoll);
        break;
      }
      else if(this.frameIsStrike(currentRoll)){       
        totalScore += this.bonusScoring(currentRoll);
        currentRoll += 1;
        this.currentFrame += 1
      }
      else if(this.frameIsSpare(currentRoll)){
        totalScore += this.bonusScoring(currentRoll);
        currentRoll += 2;
        this.currentFrame += 1
      }
      else {
        totalScore += this.rolls[currentRoll].value + this.rolls[currentRoll + 1].value;
        currentRoll += 2;
        this.currentFrame += 1
      };
      
    }
    return totalScore;
  };

  sumTheRest(currentRoll){
    let sum = 0;
    this.rolls.slice(currentRoll).forEach(roll => {
      sum += roll.value
    });
    return sum;
  };
  frameIsSpare(currentRoll){
    return this.rolls[currentRoll].value + this.rolls[currentRoll + 1].value == 10;
  };
  frameIsStrike(currentRoll){
    return this.rolls[currentRoll].value == 10;
  };
  bonusScoring(currentRoll){
    return this.rolls[currentRoll].value + this.rolls[currentRoll + 1].value + this.rolls[currentRoll + 2].value;
  }; 
  
};



module.exports = BowlingGame;