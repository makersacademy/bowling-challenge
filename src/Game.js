function Game() {
  this.pin_count = [];

Game.prototype.bowl = function(pins){
  this.pin_count.push(pins);
};

Game.prototype.score = function(){
  return this.pin_count.reduce(function(a,b){
    return a + b;
  }, 0);
};

}
