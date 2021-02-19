"use strict";

class LastFrame extends Frame{
  constructor() {
    super();
  }

  addRolls(roll){
    if(this.roll1 === null){
       this.roll1 = roll;
    }else if(this.roll2 === null){
      this.roll2 = roll;
    }else if(this.bonus_roll === null){
      this.bonus_roll = roll;
    }
    this.frame_score += roll;
  }

  isFinished(){
    if(this.isSpare() && this.bonus_roll === null){
      return false;
    }
    if( this.isStrike() && this.roll2 !== null && this.bonus_roll !== null){
      return true;
    }
    if( !this.isStrike() && this.roll2 !== null && !this.isSpare()) {
      return true;
    }
     return false;
  }
};
