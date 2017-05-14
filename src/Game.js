function Game() {
  this.pinCount = [];
  this.maxPins = 10;

Game.prototype.bowl = function(pins){
  if (pins > 10) {
    throw new TypeError ("You cannot bowl more than 10 in one ball");
  }
  else
    this.pinCount.push(pins);
};

Game.prototype.score = function(){
  return this.pinCount.reduce(function(a,b){
    return a + b;
  }, 0);
};

}
