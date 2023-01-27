class Frame{
  constructor(){
    this.frame = [];
  }

  rollsInFrame(roll1, roll2){
    return this.frame.push(roll1, roll2)
  }

  checkStrike(){
    if(this.frame[0] === 10){
      return true;
    }else{
      return false;
    }
  }

  checkSpare(){
    if(this.frame[0] + this.frame[1] === 10){
      return true;
    }else {
      return false;
    }
  }
}

module.exports = Frame;