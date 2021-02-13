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
    return this.frame_score;
  }

  isStrike(){
    return this.roll1 === STRIKE;
  }

  isSpare(){
    return (this.roll1 !== STRIKE && this.roll1 + this.roll2=== SPARE);
  }

  AddRolls(roll){
    if( this.roll1 === null){
       this.roll1 = roll;
    }else if( this.roll2 === null && !this.isStrike()){
      if(this.roll1 + roll > MAX_SCORE){
        throw new Error('There are not that many pins');
      }
       this.roll2 = roll;
    }
    return this.frame_score += roll;
  }

  isFinished(){
    return (this.roll2 !== null || this.isStrike());
  }
}
