function Game(scoreCalculator) {
  this.frames = [];
  this.totalScore = 0;
  this.scoreCalculator = scoreCalculator;
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
};

Game.prototype.flattenFrames = function(){
  var rolls = [];
  for(var i = 0; i<this.frames.length; i++){
    rolls = rolls.concat(this.frames[i].rolls);
  }
  return rolls;
}

Game.prototype.score = function(){
  var rolls = this.flattenFrames();
  return this.scoreCalculator.finalCalc(rolls)
};

Game.prototype.finalScore = function(){
  return this.score().slice(-1)[0];
}

Game.prototype.isOver = function(){
  return (this.frames.length >= 10);
};

// Game.prototype.result = function(){
//   console.log(this.score());
//   return ("Game over - final score is: " + 90);
// };
