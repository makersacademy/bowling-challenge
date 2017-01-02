var Game = function(){
  this.score = 0;
  this.rolls = [];

  this.roll = function(pins){
    this.rolls.push(pins);
  }

  this.getTotal = function(){
    if(this.score !== 0 ){
      this.score = 0;
    }

    for(var i = 0; i < this.rolls.length; i++){
      if(this.rolls[i] === 0){
        this.score += this.rolls[i];
      } else {
        this.score +=this.rolls[i];
      }

    }


    return this.score;
  }



}
