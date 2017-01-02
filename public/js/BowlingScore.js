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
    return this.score;
  }
}
