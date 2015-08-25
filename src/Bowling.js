var Game = function() {
  this.score = 0;
  this.frame = 1;
  this.frameBall = 1;
  this.frameScore = 0;
  this.knockedDown = [];
  this.scoreCard = [];  
  this.pinsInPlay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};

Game.prototype.play = function() {
  while(this.frame < 10) {
    this.knockedDown = [];
    this.frameBall = 0;
    this.rollBall();
    this.scoreCard.push(this.knockedDown);
    this.frame += 1;
  };
  return this.frame;
};

Game.prototype.rollBall = function() {
  while(this.frameBall < 2) {
    this.frameBall+=1;
    this.frameScore = this.rollScore();
    this.updateScoreCard();
    this.totalScore();    
  };
  return this.frameScore
};

Game.prototype.hitPin = function(pin) {
  this.pinsInPlay.splice(pin);
  this.knockedDown.push(pin);
  if(pin != 0) {
    this.frameScore = this.frameScore + 1    
  };
};

Game.prototype.rollScore = function() {
  return Math.floor(Math.random()*11);
};

Game.prototype.updateScoreCard = function() {
  return this.knockedDown.push(this.frameScore);
};

Game.prototype.totalScore = function() {
  return this.score += this.frameScore
};