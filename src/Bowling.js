function Game () {
  this.game_frames = [1,2,3,4,5,6,7,8,9,10]
  this.scores_entered = []
};


Game.prototype.is_it_a_strike = function(score){
  if(score === 10){return true}
}

Game.prototype.roll = function(pins_hit){
  this.scores_entered.push(pins_hit)
}
