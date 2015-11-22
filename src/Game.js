function Game(player, frameSet) {
  this.player = player;
  this.frameSet = frameSet;
  this.nextBall = 1;
  this.pinsRemaining = 10;
}

Game.prototype.playerScore = function() {
  return this.player.score.scorecard;
};

Game.prototype.currentFrame = function() {
  return this.frameSet.currentFrame;
};

Game.prototype.playBall = function() {
  if(this.isFrame10()) { this.playFrame10() }
  if(this.gameNotFinished() && this.nextBall === 1) { this.throwBall1(); }
  else if (this.gameNotFinished() && this.nextBall === 2) { this.throwBall2(); }
  else { throw Error("Game Over"); }
};

Game.prototype.gameNotFinished = function() {
  return this.frameSet.number <= this.frameSet.MaxNumberFrames;
};

Game.prototype.throwBall1 = function() {
  var pins = this.pinsKnockedDown();
  if(this.isAStrike(pins) && !(this.isFrame10())) {
    this.playerScore()[this.currentFrame()].roll1 = pins;
    this.player.score.calculateFrameScore();
    this.frameSet.nextFrame();
  } else {
    this.playerScore()[this.currentFrame()].roll1 = pins;
    this.pinsRemaining -= pins;
    this.nextBall = 2;
  }
};

Game.prototype.throwBall2 = function() {
  this.playerScore()[this.currentFrame()].roll2 = this.pinsKnockedDown();
  this.nextBall = 1;
  this.player.score.calculateFrameScore();
  this.pinsRemaining = 10;
  if(!this.isFrame10()) { this.frameSet.nextFrame(); }
  else { this.nextBall = 3; }
};

Game.prototype.pinsKnockedDown = function() {
  if(this.pinsRemaining === 10) {
    return Math.floor((Math.random() * 11) + 0);
  } else {
    return Math.floor((Math.random() * (this.pinsRemaining + 1)) + 0);
  }
};

Game.prototype.isAStrike = function(pins) {
  return pins === 10;
};

Game.prototype.isFrame10 = function() {
  return this.currentFrame() === "frame10";
};

Game.prototype.playFrame10 = function() {
  if(this.nextBall === 1) { this.throwBall1(); }
  else if (this.nextBall === 2) { this.throwBall2(); }
  else { this.checkExtraBallRequired(); }
};

Game.prototype.checkExtraBallRequired = function() {
  if(this.player.score.frame10Strike() || this.player.score.frame10Spare()) {
    this.playExtraBall();
  } else {
    this.frameSet.nextFrame();
    throw Error("Game Over");
  }
};

Game.prototype.playExtraBall = function() {
  var extraPoints = this.pinsKnockedDown();
  this.playerScore()[this.currentFrame()].roll3 = extraPoints;
  this.playerScore()[this.currentFrame()].frameScore += extraPoints;
  this.frameSet.nextFrame();
};
