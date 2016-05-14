function Bowling() {
  this._score = 0;
  this._scoreSheet = {};
  this._currentTurn = 1;
  this._currentBall = 0;
}

Bowling.prototype.score = function () {
  return this._score;
};

Bowling.prototype.hit = function (pins) {
  if(this._currentBall === 0) {
    this._scoreSheet['frame' + this._currentTurn] = [pins];
  } else if(this._currentBall === 1) {
    this._scoreSheet['frame' + this._currentTurn].push(pins);
  }
  this.ballCheck();
};

Bowling.prototype.currentTurn = function () {
  return this._currentTurn;
};

Bowling.prototype.currentBall = function () {
  return this._currentBall;
};

Bowling.prototype.ballCheck = function () {
  if(this._currentBall >= 1 || this.strikeCheck()) {
    this._currentBall = 0;
    this._currentTurn ++;
  } else {
    this._currentBall ++;
  }
};

Bowling.prototype.strikeCheck = function() {
  if(this._scoreSheet.frame1[this._currentBall] === 10) {
    return true;
  }
}


var bowling = new Bowling();
bowling.hit(5);
bowling.hit(4);
bowling.hit(3);
bowling.hit(2);
bowling.hit(1);
console.log(bowling._scoreSheet);
console.log(bowling._scoreSheet.frame1);
