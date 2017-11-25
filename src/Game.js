function Game(){
  this.rounds = [];
  this.frame = 0
  this.current_round = 0
  this.current_score = null
};

Game.prototype.startGame = function(){
  this.frame += 1
  this.current_round +=1
  this.rounds.push({frame: this.frame, round: this.current_round, score: this.current_score})
};

Game.prototype.currentGame = function(){
  return this.rounds.slice(-1)[0];
};
