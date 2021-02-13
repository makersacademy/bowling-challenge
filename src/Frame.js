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
    return this.frame_score;
  }

  Number(){
    return this.number;
  }

  Next(){
    return this.number += 1;
  }
}
