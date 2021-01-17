'use strict';

class Bowling {
  constructor(){
    this._rolls = [];
  }

  roll(pins){
    this._rolls.push(pins)
  }

  reset(){
    this._rolls = [];
  }

    get score(){
    let score = 0;
    let rollIndex = 0;

    for(let i = 0; i < 10; i++) {

      if (this.isStrike(rollIndex)){
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      }
      const frameScore = this._rolls[rollIndex] + this._rolls[rollIndex + 1];

      if (this.isSpare(frameScore)){
        score += this.spareBonus(rollIndex);
      } else {
        score += frameScore;
      }


      rollIndex += 2;
    }
    return score;
  }

isSpare(frameScore){
  return frameScore === 10;
}

spareBonus(rollIndex){
  return 10 + this._rolls[rollIndex + 2];
}

isStrike(rollIndex){
  return this._rolls[rollIndex] === 10;
}

strikeBonus(rollIndex){
  return 10 + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
}


}
