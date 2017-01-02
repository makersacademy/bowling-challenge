var Game = function(){
  Game.prototype.score = 0;

  Game.prototype.getTotal = function(){
    if(Game.prototype.score !== 0 ){
      Game.prototype.score = 0;
    }
    return Game.prototype.score;
  }
}
