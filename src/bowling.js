function Game() {
this.score = 0
this.frames = {}
this.bowlCount = []
}

Game.prototype.bowl = function(score) {
if(this.bowlCount.length < 21 && score < 11) {
this.bowlCount.push(score);
} else if(this.bowlCount.length < 21 && score > 10){
  throw "You can't enter a score greater than 10."
} else {
  throw "The game is complete.";
}
};
