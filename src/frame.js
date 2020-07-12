'use strict';

class Frame{
  constructor(){
    this.roll1 = 0
    this.roll2 = 0
    this._rollCount = 1
    this.mark = "none"
    this.bonus1 = 0
    this.bonus2 = 0
  }
  addRoll(roll){
    if(this._rollCount === 1){
      this.roll1 = roll;
      this._rollCount += 1;
      console.log("this is after if" + roll);
    }
    else{
      this.roll2 = roll;
      this._rollCount -= 1;
      console.log("this is after else" + roll);
    }
    this.isMark();
  }

  addBonus1(roll){
    this.bonus1 = roll;
  }

  addBonus2(roll){
    this.bonus2 = roll;
  }

  score(){
    return this.roll1 + this.roll2 + this.bonus1 + this.bonus2;
  }

  isMark(){
    if(this.roll1 === 10){
      this.mark = "strike";
    }
    else if(this.roll1 + this.roll2 === 10){
      this.mark = "spare";
    }
  }

};