function Game() {
  this.frames = [new Frame()]
  this.currentScore = []
  this._bonusStrike = 0
  this._counter = 0
}

Game.prototype.addFrame = function() {
  if(this.currentFrame().rolls.length == 2)
  this.frames.push(new Frame())
}

Game.prototype.add = function(pins) {
  this.addFrame();
  this.currentFrame().addPins(parseInt(pins));
  this.counter();
}

Game.prototype.counter = function() {
  this._counter ++;
  if(this._counter % 2 == 0) { return this.score() };
}

Game.prototype.score = function() {
  this._bonusStrike = 0;
  this.bonusStrike();
  return this.currentScore.push(this.calculateScore());
}

Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length - 1];
}

Game.prototype.lastFrame = function() {
  return this.frames[this.frames.length - 2];
}

Game.prototype.lastScoreIndex = function() {
  return this.currentScore.length - 1;
}

Game.prototype.lastScore = function() {
  return this.currentScore[this.currentScore.length - 1];
}

Game.prototype.calculateScore = function() {
  if(this.frames.length == 1) { return this.currentFrame().frameScore(); }
  return this.currentFrame().frameScore() + this.lastScore();
}

Game.prototype.bonusStrike = function() {
  if(this.frames.length > 1) {
    if(this.lastFrame().rolls[0] == 10) {
    this._bonusStrike = this.currentFrame().frameScore();
    this.currentScore[this.lastScoreIndex()] = 10 + this._bonusStrike;
    }
  }
}