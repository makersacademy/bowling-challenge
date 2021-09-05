class BowlingGame{

  constructor(){
    // this.runningScore = 0;
    this.rolls=[];
  }

  roll(pins){
    this.rolls.push(pins)
  }

  score(){
    let score = 0;
    let rollIndex=0;
    for (let frameIndex=0;frameIndex<10;frameIndex++){
      //Strike logic
      if (this.rolls[rollIndex]===10) {
        score +=10 + this.rolls[rollIndex+1]+ this.rolls[rollIndex+2]
        rollIndex++;
        continue;
      }

      const frameScore = this.rolls[rollIndex]+this.rolls[rollIndex+1];
      if (this.isSpare(frameScore)) {
        //spare logic
        score +=this.spareBonus(rollIndex)
      } else {
        score +=frameScore
      }
      rollIndex+=2;
    }
    return score;
  }
  isSpare(frameScore){
    return frameScore===10
  }

  spareBonus(rollIndex){
    return 10 + this.rolls[rollIndex+2]
  }



}
