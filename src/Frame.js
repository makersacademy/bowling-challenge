function Frame() {
  this.firstScore = 0
  this.secondScore = 0
}

Frame.prototype.calculateScore1 = function(){
  this.firstScore = Math.floor(Math.random()*10 + 1);
};

Frame.prototype.calculateScore2 = function(){
  this.secondScore = Math.floor(Math.random()*(10-this.firstScore) + 1);
};
