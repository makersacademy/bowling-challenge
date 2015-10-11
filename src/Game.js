var Game = function(){
  this.score = 0;
  this.currentFrame = [];
  this.strikes = [];
  this.spares = [];
  this.pinCount = 10;
  this.scoreCard = [];
  this.firstThrow = 1;

};

Game.prototype.rollBall = function(pinsHit) {
  this.pinsLimit(pinsHit);
  this.changeFrame(pinsHit);
  this.firstThrow++;
  this.finalScore();
};

Game.prototype.totalScore = function() {
  if (this.spares[0] === 9) {
    this.score += (this.scoreCard[9][0] + this.currentFrame[0] + this.scoreCard[9][1]);
  };
};

Game.prototype.finalScore = function() {
  if (this.scoreCard.length === 10 && this.firstThrow === 2) {
    this.totalScore()
  };
};

Game.prototype.changeFrame = function(pinsHit) {
  this.pinCount = this.pinCount - pinsHit;
  this.currentFrame.push(pinsHit);
  if (this.firstThrow === 2 || pinsHit === 10) {
    this.scoreCard.push(this.currentFrame);
    this.resetFrame();
    this.getScore();
  };
  this.getBonusScore();
};


Game.prototype.resetFrame = function() {
  this.currentFrame = [];
  this.firstThrow = 0;
  this.pinCount = 10;
};


Game.prototype.isLastFrame = function() {
  return this.scoreCard.length === 9;
};

Game.prototype.pinsLimit = function(pinsHit) {
  if (pinsHit > this.pinCount) {
    throw new Error("You can't hit more than 10 pins");
  };
};

Game.prototype.frameNumber = function() {
  return this.scoreCard.length;
};

Game.prototype.getScore = function() {
  var frameScore = this.scoreCard[this.scoreCard.length -1].reduce(function(a, b) {
    return a + b;
  });
 (frameScore < 10) ? this.score += frameScore : this.bonus();
};

Game.prototype.bonus = function() {
    (this.scoreCard[this.scoreCard.length - 1][1] === undefined) ? this.rollStrike() : this.rollSpare();
    if (this.scoreCard.length === 10
      && this.scoreCard[this.scoreCard.length - 1][0] < 10
      && (this.scoreCard[this.scoreCard.length - 1][0] + this.scoreCard[this.scoreCard.length - 1][1] === 10) ) {
      this.rollSpare();
    }

};

Game.prototype.rollStrike = function() {
  this.strikes.push(this.scoreCard.length -1);
  if (this.isLastFrame()) { this.gameLength++};
};

Game.prototype.rollSpare = function() {
  this.spares.push(this.scoreCard.length -1);
  if (this.isLastFrame()) { this.gameLength++};
};

Game.prototype.getBonusScore = function(first_argument) {
  this.getStrikeScore();
  this.getSpareScore();
};

Game.prototype.getStrikeScore = function() {
  for (var i = 0; i < this.strikes.length; i++) {
    if (this.nextnoStrike(i)) {
        this.scoreifnotStrike (i);
    };
    if (this.nextStrike(i)) {
        this.scoreifStrike (i);
    };
  };
};

Game.prototype.scoreifnotStrike  = function(strike) {
  var score = this.addFrames(strike);
  this.addBonusPoints(score, this.strikes, strike);
};

Game.prototype.scoreifStrike  = function(strike) {
  var score = this.addStrikes(strike);
  this.addBonusPoints(score, this.strikes, strike);
};

Game.prototype.nextnoStrike = function(strike) {
  return this.scoreCard[this.strikes[strike] + 1] && this.scoreCard[this.strikes[strike] + 1].length === 2
};

Game.prototype.nextStrike = function(strike) {
  return this.scoreCard[this.strikes[strike] + 1]  && this.scoreCard[this.strikes[strike] + 2]
};

Game.prototype.addFrames = function(strike) {
  return this.scoreCard[this.strikes[strike] + 1].reduce(function(a, b)
    { return a + b; });
};

Game.prototype.addStrikes = function(strike) {
  return this.scoreCard[this.strikes[strike] + 1].concat(this.scoreCard[this.strikes[strike] + 2][0]).reduce(function(a, b) { return a + b; });;
};

Game.prototype.getSpareScore = function(first_argument) {
  for (var i = 0; i < this.spares.length; i++) {
      if (this.nextBall(i)) {
        var score = this.addRoll(i);
        this.addBonusPoints(score, this.spares, i);
    };
  };
};

Game.prototype.addRoll = function(spare) {
  return this.scoreCard[this.spares[spare] + 1][0]
};

Game.prototype.nextBall = function(spare) {
  return this.scoreCard[this.spares[spare] + 1] !== undefined;
};

Game.prototype.addBonusPoints = function(score, Array, position) {
  this.score += (score + 10);
  Array.splice(position, 1);
};
