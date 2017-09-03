var Player = function () {
  this.ball1 = 0;
  this.ball2 = 0;
  this.currentPins = 0;
  this.ball = 1;
  this.bowled = 0;
  this.frame = 0;
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
    this.currentPins = this.ball2;
  }else{
    this.ball1 = _getRandomInt(0,10);
    this.currentPins = this.ball1;
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
  this.scoreCard.calculateScore(this.ball, this.currentPins, this.hasSpare, this.hasStrike);
  this.scoreCard.recordScore(this.scoreCard.score);
  this.scoreCard.calcTotal();
};

// only do these after ball2
Player.prototype.calcSparesAndStrikes = function(){
  if (this.bowled % 2 == 0){
    if (this.ball1 === 10){
      this.hasStrike = true;
    }else if (this.ball1 + this.ball2 === 10){
      this.hasSpare = true;
    }else{
      this.hasStrike = false;
      this.hasSpare = false;
    };
  };
};

Player.prototype.updateFrame = function (){
  if (this.bowled % 2 == 0){
    this.frame ++;
  };
};

Player.prototype.tenthFrame = function (){
  this.ball = 3;
  this.ball3 = _getRandomInt(0,10);
  this.scoreCard.calculateScore(this.ball, this.ball3, this.hasSpare, this.hasStrike);
  this.scoreCard.recordScore(this.scoreCard.score);
  this.scoreCard.calcTotal();

};


// //////////////
