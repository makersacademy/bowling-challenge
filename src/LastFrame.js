"use strict";

class LastFrame extends Frame{
  constructor() {
    super();
  }

  AddRolls(roll){
    if(this.roll1 === null){
      return this.roll1 = roll;
    }else if(this.roll2 === null){
      return this.roll2 = roll;
    }else if(this.bonus_roll === null){
      return this.bonus_roll = roll;
    }
  }

  isFinished(){
    if(this.isSpare() && this.bonus_roll === null){
      return false;
    } else if(this.roll1 === STRIKE && this.roll2 !== null && this.bonus_roll !== null){
      return true;
    } else if(this.roll1 !== STRIKE && this.roll2 !== null && !this.isSpare()) {
      return true;
    }
     return false;
  }
};
