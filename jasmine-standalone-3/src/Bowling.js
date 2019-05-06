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
    var rollScore = 0;
    for(let i = 0 ; i < this.rolls.length; i++){
      if(this.rolls[i] + this.rolls[i+ 1] == 10){
        rollScore += this.rolls[i] + this.rolls[i+1] + this.rolls[i+2]
        this.rolls[i++]
      }else{
        rollScore += (this.rolls[i])
      }
    }
    return rollScore
  }

}