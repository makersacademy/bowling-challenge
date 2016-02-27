function Game(scoreCalculator) {
  this.frames = [];
  this.scoreCalculator = scoreCalculator;
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
}

Game.prototype._flattenFrames = function(){
  var rolls = [];
  for(var i = 0; i<this.frames.length; i++){
    rolls = rolls.concat(this.frames[i].rolls);
  }
  return rolls;
}

Game.prototype.score = function(){
  var rolls = this._flattenFrames();
  return this.scoreCalculator.finalCalc(rolls)
}

Game.prototype.finalScore = function(){
  return this.score().slice(-1)[0];
}

Game.prototype.isOver = function(){
  return (this.frames.length >= 10);
}

Game.prototype.frameNr = function(){
  return this.frames.length;
}

Game.prototype.reset = function(){
  this.frames = [];
}
