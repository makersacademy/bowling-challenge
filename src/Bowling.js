function Game () {
  this.scores_entered = []
  this.frame = 1
  this.pins_standing = 10
  this.turn = 1
};


Game.prototype.is_it_a_strike = function(pins_hit){
  if(pins_hit === 10 && this.turn == 1){return true}
}

Game.prototype.roll = function(pins_hit){
  if (this.is_it_a_strike && this.turn <=2) {
    this.scores_entered.push(pins_hit);
    this.pins_standing-=pins_hit;
    this.turn++
  }
  else if (this.is_it_a_strike) {
    this.scores_entered
  }

}

Game.prototype.score_sum =function(){
  return this.scores_entered.reduce((a,b) => a+b,0)
}
// Game.prototype.bonus = function(){}
