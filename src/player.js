var Player = function () {
  this.ball1 = undefined;
  this.ball2 = undefined;
  this.currentPins = 0;
  this.ball = 1;
  this.bowled = 0;
  this.frame = 0;
  this.hasSpare = false;
  this.hasStrike = false;
  this.scoreCard = new ScoreCard;
};


Player.prototype.bowl = function(number) {
  if (this.ball === 1){
    this.ball1 = parseInt(number);
  }else if (this.ball === 2){
    this.ball2 = parseInt(number);
  }else if (this.ball === 3){
    this.ball3 = number;
  };
  this.currentPins = parseInt(number);
  this.bowled ++;
};

Player.prototype.switchBall = function() {
  if(this.bowled === 20 && this.ball === 2 && (this.hasSpare === true|| this.hasStrike == true) ) {
    this.ball = 3;
  }else if(this.bowled === 20 && this.ball ===2 && this.hasSpare === false && this.hasStrike === false ) {
    throw 'Your game is over!';
  }else if(this.bowled > 19){
    throw 'Your game is over!';
  }else{
    if (this.ball === 2){
      this.ball --;
    }else{
      this.ball ++;
    };
  };
};


Player.prototype.finishBall = function() {
  this.scoreCard.calculateScore(this.ball, this.currentPins, this.hasSpare, this.hasStrike);
  this.scoreCard.recordScore(this.scoreCard.score);
  this.scoreCard.calcTotal();
};

// only do these after ball2
Player.prototype.calcSparesAndStrikes = function(){
  if (this.ball % 2 == 0) {
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

// only do these after ball2
Player.prototype.updateFrame = function (){
  if (this.bowled % 2 == 0){
    this.frame ++;
  };
};

// only do these after ball2
Player.prototype.resetBalls = function (){
  if (this.ball % 2 == 0) {
    this.ball1 = undefined;
    this.ball2 = undefined;
  };
};
