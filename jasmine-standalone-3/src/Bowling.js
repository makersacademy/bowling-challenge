class Bowling{
  constructor(){
    this.rolls = [];
    this.frame = [];
    this.currentFrame = 1;
  }

  roll(pins){
    if((this.frame.length == 1 && this.frame[0] + pins) > 10){
      throw('You can only hit 10 pins per frame')
    }

    if(this.frame.length == 2){
      this.frame = [];
      this.currentFrame++;
    }
    this.frame.push(pins);
    this.rolls.push(pins);
  }

  score(){
    return this.rolls.reduce((accumulator, currentValue)=>{
      return( accumulator+ currentValue);
    },0);
  }
}