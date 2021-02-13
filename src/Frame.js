"use strict";

const STRIKE = 10;
const SPARE = 10;

class Frame{
  constructor(){
    this.roll1 = null;
    this.roll2 = null;
    this.bonus_roll = null;
    this.frame_score = 0;
  }

  frame_Score(){
    return (this.roll1 + this.roll2 + this.bonus_roll);
  }

  isStrike(){
    return this.roll1 === STRIKE;
  }

  isSpare(){
    return (this.roll1 !== STRIKE && this.frame_score === SPARE);
  }

  AddRolls(roll){
    if( this.roll1 === null){
      return this.roll1 = roll;
    }else if( this.roll2 === null && !this.isStrike()){
      if(this.roll1 + roll > MAX_SCORE){
        throw new Error('There are not that many pins');
      }
      return this.roll2 = roll;
    }
  }

  isFinished(){
    return (this.roll2 !== null || this.isStrike());
  }
}
