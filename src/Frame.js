const STRIKE = 10;
const SPARE = 10;
const FRAMES = 10;

class Frame{
  constructor(number = 1){
    this.roll1 = 0;
    this.roll2 = 0;
    this.bonus_roll = 0;
    this.frame_score = 0;
    this.number = number;
  }

  roll_1(){
    return this.roll1;
  }

  roll_2(){
    return this.roll2;
  }

  bonus_Roll(){
    return this.bonus_roll;
  }

  frame_Score(){
    return (this.roll1 + this.roll2 + this.bonus_roll);
  }

  Number(){
    return this.number;
  }

  Next(){
    return this.number += 1;
  }

  isStrike(){
    return this.roll1 === STRIKE;
  }

  isSpare(){
    return (this.roll1 !== STRIKE && this.frame_score === SPARE);
  }

  AddRoll1(roll){
    return this.roll1 = roll;
  }

  AddRoll2(roll){
    return this.roll2 = roll;
  }

  AddBonusRoll(roll){
    return this.bonus_roll = roll;
  }

  isFinished(){
    return (this.roll2 !== null || this.isStrike());
  }
}
