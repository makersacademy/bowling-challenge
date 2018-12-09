function Game() {
  this.frames = [];
  this.frames.push(new Frame(1));
  this.score = [0,0,0,0,0,0,0,0,0,0];
  this.individualScores = [];
}

Game.prototype.newFrame = function() {
  this.frames.push(new Frame(this.currentFrame().frameNumber + 1));
}


Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length - 1];
}

Game.prototype.bowl = function(x) {
  if(this.gameOver()) { throw('The game is over'); }
  this.addPointsToStrikesAndSpares(x);
  if (this.currentFrame().complete == true) { this.newFrame(); }
  if (this.currentFrame().remainingPins < x && this.currentFrame().frameNumber != 10) {throw('You must select '+ this.currentFrame().remainingPins +' or less')}
  this.currentFrame().bowl(x);
  this.updateScore();
};

Game.prototype.updateScore = function() {
  console.log(this.frames);
  this.score[0] = this.frames[0].score;
  if(this.frames.length > 0) {
    for (var i = 1; i < this.frames.length; i++) {
      this.score[i] = this.score[i-1] + this.frames[i].score;
    }
  }
}

Game.prototype.framesToDouble = function() {
  return this.frames.filter(function(x) {
    return (x.bowlsToDouble != 0);
  });
}

Game.prototype.compileScores = function() {
  for (var i = 0; i < this.frames.length; i++) {
    this.individualScores.push(this.frames[i].bowls);
    //change strikes and spares to symbols. Output an array of arrays
    //with formatted scores
  }
  return this.individualScores;
}

Game.prototype.addPointsToStrikesAndSpares = function(pinsKnockedDown) {
  var framesToDouble = this.framesToDouble();
  if (framesToDouble.length != 0)
  {
    for (var i = 0; i < framesToDouble.length; i++)
    {
      if (framesToDouble[i].frameNumber != 10) { framesToDouble[i].score += pinsKnockedDown; }
      framesToDouble[i].bowlsToDouble -= 1;
    }
  }
}

Game.prototype.gameOver = function() {
  return this.currentFrame().complete == true && this.currentFrame().frameNumber == 10;
}
