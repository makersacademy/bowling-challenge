class Frame {
  MAXIMUM_SCORE = 10;
  rolls = [];

  constructor(rolls){
    this.rolls = rolls;
  }

  total(nextFrame, nextButNextFrame) {
    return this.rollScore() +
    this.bonus(nextFrame, nextButNextFrame);
  }

  rollScore(){
    return this.rolls.reduce((score,roll) => score + roll);
  }

  bonus(nextFrame, nextButNextFrame) {
    if (!nextFrame) {
      return 0
    } if (this.isStrike()) {
      return nextFrame.strikeBonus(nextButNextFrame);
    } if (this.isSpare()) {
      return nextFrame.spareBonus();
    }
    return 0;
  }

  isSpare() {
    return this.rollScore() === this.MAXIMUM_SCORE;
  }

  isStrike() {
    return this.firstRoll() === this.MAXIMUM_SCORE;
   }

   spareBonus() {
     return this.firstRoll();
   }

   strikeBonus(nextFrame) {
     if (this.isStrike() && nextFrame) {
       return this.rollScore() +
       nextFrame.firstRoll();
     }

     return this.firstRoll() + this.rolls[1];
   }

   firstRoll() {
     return this.rolls[0];
   }
}

module.exports = Frame;
