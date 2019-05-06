class Bowling{
  constructor(){
    this.rolls = new Object;
    this.frame = [];
    this.currentFrame = 1;
  }

  roll(pins){
    this.frame.push(pins);
  }

  score(){
    return this.frame.reduce((accumulator, currentValue)=>{
      return( accumulator+ currentValue);
    },0)
  }
}