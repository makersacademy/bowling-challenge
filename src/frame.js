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
    }
    else{
      this.roll2 = roll;
      this._rollCount -= 1;
    }
    this.isMark();
  }

  score(){
    return this.roll1 + this.roll2;
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