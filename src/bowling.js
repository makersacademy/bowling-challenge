function Bowling() {
  this._score = 0;
  this._scoreSheet = {};
  this._currentTurn = 1;
  this._currentBall = 0;
  this._gameOver = false;

}

Bowling.prototype.score = function () {
  return this._score;
};

Bowling.prototype.scoreSheet = function() {
  return this._scoreSheet;
}

Bowling.prototype.hit = function(pins) {
  if(this._currentBall === 0) {
    this._scoreSheet['frame' + this._currentTurn] = [pins];
  } else if(this._currentBall >= 1) {
    this._scoreSheet['frame' + this._currentTurn].push(pins);
  }
  this.ballCheck();
  this._score += pins;
};

Bowling.prototype.currentTurn = function () {
  return this._currentTurn;
};

Bowling.prototype.currentBall = function () {
  return this._currentBall;
};

Bowling.prototype.ballCheck = function () {
  if(this._currentTurn === 10 && this._currentBall === 0 &&
     this.strikeCheck()) {
        this._currentBall ++;
  } else if(this._currentTurn === 10 &&this._currentBall === 1 &&
     this.strikeCheck()) {
    this._currentBall ++;
  } else if(this._currentBall >= 1 || this.strikeCheck()) {
    this._currentBall = 0;
    this._currentTurn ++;
  } else {
    this._currentBall ++;
  }
};

Bowling.prototype.strikeCheck = function() {
  this.currentTurnKey = 'frame' + this._currentTurn;
  if(this._scoreSheet[this.currentTurnKey][0] === 10) {
    return true;
  }
}

Bowling.prototype.gotStrike = function() {
  this.lastTurnKey = 'frame' + (this._currentTurn-1);
  if(this._scoreSheet[this.lastTurnKey][0] === 10 &&
    this._currentBall === 0) {
    return true;
  }
}

Bowling.prototype.gotSpare = function() {
  this.lastTurnKey = 'frame' + (this._currentTurn-1);
  var ballOneScore = this._scoreSheet[this.lastTurnKey][0];
  var ballTwoScore = this._scoreSheet[this.lastTurnKey][1];
  if(ballOneScore + ballTwoScore === 10 && ballOneScore < 10) {
    return true;
  }
}

Bowling.prototype.gameOver = function () {
  if(this._currentTurn > 10){
    this._gameOver = true;
  }
};


// var bowling = new Bowling();
// bowling.hit(10);
// bowling.hit(5);
// bowling.hit(4);
// bowling.hit(3);
// bowling.hit(2);
// bowling.hit(1);
// bowling.hit(9);
// bowling.hit(10);
// bowling.hit(1);
// console.log(bowling.scoreSheet());
// console.log(bowling._scoreSheet.frame1);
// console.log(bowling.score());
//
// var b2 = new Bowling();
// b2.hit(9);
// console.log(b2.currentTurn());
