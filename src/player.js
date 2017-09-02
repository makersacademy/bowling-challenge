var Player = function () {
  this.ball1 = 0;
  this.ball2 = 0;
  this.ball = 1;
  this.bowled = 0;
  this.frame = 1;
  // this.score = 0;
  this.hasSpare = false;
  this.hasStrike = false;
  this.scoreCard = new ScoreCard;
  _getRandomInt(this);
};

_getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Player.prototype.bowl = function() {
  if (this.ball === 2){
    this.ball2 = _getRandomInt(0,10-this.ball1);
  }else{
    this.ball1 = _getRandomInt(0,10);
  };
  this.bowled ++;
};

Player.prototype.switchBall = function() {
  if (this.ball === 2){
    this.ball --;
  }else{
    this.ball ++;
  };
};


Player.prototype.finishTurn = function() {
  var score;
  if (this.ball === 1){
    score = this.ball1;
  }else{
    score = this.ball2;
  };
  this.scoreCard.calculateScore(this.ball, score, this.hasSpare, this.hasStrike);
  this.scoreCard.recordScore(this.scoreCard.score);
  this.scoreCard.calcTotal();
};

Player.prototype.calcSparesAndStrikes = function(){
  if (this.ball1 === 10){
    this.hasStrike = true;
  }else if (this.ball1 + this.ball2 === 10){
    this.hasSpare = true;
  }else{
    this.hasStrike = false;
    this.hasSpare = false;
  };
};

Player.prototype.updateFrame = function (){
  if (this.bowled % 2 == 0){
    this.frame ++;
  };
};

// //////////////
