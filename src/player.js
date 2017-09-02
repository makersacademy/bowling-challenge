var Player = function () {
  this.ball1 = 0;
  this.ball2 = 0;
  this.ball = 1;
  this.bowled = 0;
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
    // console.log('bowls ball2');
    this.ball2 += _getRandomInt(this.ball1,10);
    this.ball --;
  }else{
    // console.log('bowls ball1');
    this.ball1 += _getRandomInt(0,10);
    this.ball ++;
  };
  this.bowled ++;
};

Player.prototype.finishTurn = function() {
  this.scoreCard.calculateScore(this.ball1, this.ball2, this.hasSpare, this.hasStrike);
  this.scoreCard.recordScore(this.scoreCard.score);
  this.scoreCard.calcTotal();
  if (this.ball1 + this.ball2 === 10){
    if (this.ball1 === 10){
      this.hasStrike = true;
    }else{
      this.hasSpare = true;
    };
  };
};

// //////////////
