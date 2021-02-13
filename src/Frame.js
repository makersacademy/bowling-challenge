class Frame{
  constructor(number = 1){
    this.roll1 = 0;
    this.roll2 = 0;
    this.bonus_roll = 0;
    this.frame_score = 0;
    this.STRIKE = 10;
    this.SPARE = 10;
    this.FRAMES = 10;
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
    return this.roll1 === 10;
  }

  isSpare(){
    return this.frame_score === 10;
  }

  AddRoll1(roll){
    this.roll1 = roll;
  }

  AddRoll2(roll){
    this.roll2 = roll;
  }

  AddBonusRoll(roll){
    this.bonus_roll = roll;
  }
}
