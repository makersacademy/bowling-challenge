"use strict";

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
    return this.roll1 === MAX_FFRAME_SCORE;
  }

  isSpare(){
    return ( !this.isStrike() && this.roll1 + this.roll2 === MAX_FFRAME_SCORE);
  }

  addRolls(roll){
    if( this.roll1 === null){
       this.roll1 = roll;
    }else if( this.roll2 === null && !this.isStrike()){
      if(this.roll1 + roll > MAX_FFRAME_SCORE){
        throw new Error(`Maximum pins are 10, you say you rolled ${this.roll1 + roll}??`);
      }
       this.roll2 = roll;
    }
    return this.frame_score += roll;
  }

  isFinished(){
    return (this.roll2 !== null || this.isStrike());
  }
}
