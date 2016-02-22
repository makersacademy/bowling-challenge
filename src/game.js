function Game(scoreCalculator) {
  this.frames = [];
  this.totalScore = 0;
  this.scoreCalculator = scoreCalculator;
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
  // if(this.isOver()) {
  //   this.frames = [];
  //   return this.result();
  // };
};

Game.prototype.score = function(){
  // var merged = [].concat.apply([],this.frames)
  var rolls = [];
  for(var i = 0; i<this.frames.length; i++){
    rolls = rolls.concat(this.frames[i].rolls);
  }
  return this.scoreCalculator.finalCalc(rolls)
};

Game.prototype.isOver = function(){
  return (this.frames.length >= 10);
};

// Game.prototype.result = function(){
//   console.log(this.score());
//   return ("Game over - final score is: " + 90);
// };
