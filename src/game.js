function Game(){
  this.rolls = []
}

Game.prototype.roll = function(pins){
  this.rolls.push(pins);
}
Game.prototype.score = function(){
  rollIndex = 0;
  sum = 0;

  for( var frameIndex = 0; frameIndex < 10; frameIndex++ ){
    if (this.rolls[rollIndex] === 10){
      sum += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
      rollIndex++;
    } else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10){
      sum += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
      rollIndex += 2;
    } else  {
      sum += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2;
    }
  }
  return sum;
}
