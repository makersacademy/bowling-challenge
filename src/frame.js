function Frame(){
  this.total = [];
  this.PINS = 10;
  game = new Game();
};

Frame.prototype.roll = function(){
  return hit = Math.floor((Math.random() * (this.PINS + 1)));
};

Frame.prototype.pinsRemaining = function(){
  return this.PINS -= hit;
};

Frame.prototype.rollResult = function(){
  return hit;
};

Frame.prototype.frameTotal = function(hits){
  this.total.push(hits);
  this.total.reduce(function(a, b){
  return c = a + b;
  }, 0);
  c == 10 ? this.bonus() : 0
  if (this.total.length > 1){
    game.eachFrameScore.push(c)
  }
  game.grandTotal();//
  return c;
}

Frame.prototype.bonus = function(){
  return this.checkWhichRoll() == 2 ? console.log("STRIKE!") : console.log("SPARE!")
  // return this.checkWhichRoll() == 1 ? true : false
};

Frame.prototype.checkWhichRoll = function(){
  return $.fn.helper();//
};
