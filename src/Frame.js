class Frame{
  constructor(number = 1){
    this.roll1 = null;
    this.roll2 = null;
    this.bonus_roll = null;
    this.frame_score = null;
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
}
