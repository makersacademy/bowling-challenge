class Frame{
  constructor(roll1, roll2){
    this.frame = [];
    this.roll1 = roll1;
    this.roll2 = roll2;
  }

  checkStrike(){
    if(this.roll1 === 10){
      this.frame.push(this.roll1, 0);
      return true;
    }else{
      this.frame.push(this.roll1, this.roll2);
      return false;
    }
  }

  checkSpare(){
    if(this.roll1 + this.roll2 === 10){
      this.frame.push(this.roll1, this.roll2);
      return true;
    }else {
      this.frame.push(this.roll1, this.roll2);
      return false;
    }
  }
}

module.exports = Frame;