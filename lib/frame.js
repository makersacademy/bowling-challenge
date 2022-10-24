class Frame {
  constructor(roll1, roll2, roll3){
    this.roll1 = roll1;
    this.roll2 = roll2;
    }

  isStrike(){
    return this.roll1 === 10;
  } 
  
  isSpare(){
    return this.roll1 + this.roll2 === 10 && this.roll1 != 10;
  }  

  rollOne(){
    return this.roll1;
  }

  rollTwo(){
    return this.roll2;
  }

  totalScore(){
    return this.roll1 + this.roll2;
  }
}

module.exports = Frame;