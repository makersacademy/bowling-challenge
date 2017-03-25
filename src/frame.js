function Frame(){
  this.total = [];
  this.PINS = 10;
};

var game;
game = new Game();

Frame.prototype.roll = function(){
  hits = Math.floor((Math.random() * (this.PINS + 1)));
  console.log(game.eachFrameScore)
  return hits;
};

Frame.prototype.pinsRemaining = function(){
  return this.PINS -= hits;
};

Frame.prototype.rollResult = function(){
  return hits;
};

Frame.prototype.frameTotal = function(){
  this.total.push(hits);
  this.total.reduce(function(a, b){
  return c = a + b;
  }, 0);
  c == 10 ? this.bonus() : 0
  if (this.total.length > 1){
    game.eachFrameScore.push(c)
  }
  console.log(game.eachFrameScore)
  return c;
}

Frame.prototype.bonus = function(){
  // return this.checkWhichRoll() == 2 ? console.log("STRIKE!") : console.log("SPARE!")
  return this.checkWhichRoll() == 1 ? true : false
};

Frame.prototype.checkWhichRoll = function(){
  return $.fn.helper();
};
