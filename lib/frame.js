class Frame{
  constructor(){
    this.frame = [];
  }

  addRollsToFrame(roll1, roll2){
    this.frame.push(roll1, roll2)
    return this.frame
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

  frameSum(){
    return this.frame.reduce((a, b) => a + b, 0)
  }
  
}

module.exports = Frame;