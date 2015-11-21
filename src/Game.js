function Game() {

  var frame;
  var _frameResultOne;
  var _frameResultTwo;
  var _frameResultThree;
  var _score;
  var _cumScore;

  this.frame = [];
  this._frameResultOne = '';
  this._frameResultTwo = '';
  this._frameResultThree = '';
  this._score = 0;

  for (var i = 0; i <= 12; i++) {
    this.frame[i] = new Frame();
  }

}

  Game.prototype.setPinsPerRoll = function(iframe,iroll,ipins) {
    this.frame[iframe].rollPins(iroll,ipins);
  };

  Game.prototype.spareScore = function(iframe) {
    this._score = this.frame[iframe].frameScore();
    this._score += this.frame[iframe+1].getRollPins(0);
    return this._score;
  };

  Game.prototype.oneStrikeScore = function(iframe) {
    this._score = this.frame[iframe].frameScore();
    this._score += this.frame[iframe+1].frameScore();
    return this._score;
  };

  Game.prototype.twoStrikeScore = function(iframe) {
    this._score = this.oneStrikeScore(iframe);
    this._score += this.frame[iframe+2].frameScore();
    return this._score;
  };

  Game.prototype.isSpare = function(iframe) {
    return this.frame[iframe].frameScore() === 10;
  };

  Game.prototype.isStrike = function(iframe) {
    return this.frame[iframe].getRollPins(0) === 10;
  };

  Game.prototype.isOpen = function(iframe) {
    return this.frame[iframe].frameScore() < 10;
  };

  Game.prototype.score = function(iframe) {
    if(iframe === 10){
      return 0;
      // return this.frame[iframe].getRollPins(0);
    }
    if(iframe === 11){
      return 0;
      // return this.frame[iframe].getRollPins(0);
    }

    if (this.isOpen(iframe)) {
      this._score = this.frame[iframe].frameScore();
    }
    if(this.isSpare(iframe)) {
      this._score = this.spareScore(iframe);
    }
    if (this.isStrike(iframe)) {
      this._score = this.oneStrikeScore(iframe);
    }
    if (this.isStrike(iframe) && this.isStrike(iframe + 1)) {
      this._score = this.twoStrikeScore(iframe);
    }
    return this._score;
  };

  Game.prototype.cumScore = function(iframe) {
    this._cumScore = 0;
    for (var i = 0; i <= iframe ; i++) {
      this._cumScore += this.score(i);
    }
    return this._cumScore;
  };


  Game.prototype.frameResultOne = function(iframe) {
    if(this.frame[iframe].getRollPins(0) === 0) {
      this._frameResultOne = '-';
    }
    if(this.frame[iframe].getRollPins(0) < 10) {
      this._frameResultOne = this.frame[iframe].getRollPins(0).toString();
    }
    return this._frameResultOne;
  };

  Game.prototype.frameResultTwo = function(iframe) {
    if(this.frame[iframe].getRollPins(1) === 0) {
      this._frameResultTwo = '-';
    }
    if(this.frame[iframe].frameScore() === 10) {
      this._frameResultTwo = '/';
    }
    if(this.frame[iframe].getRollPins(0) === 10) {
      this._frameResultTwo = 'X';
    }
    return this._frameResultTwo;
  };

  Game.prototype.frameResultThree = function(iframe) {
    if(this.frame[iframe].getRollPins(0) === 10) {
      this._frameResultTwo = 'X';
    }
    return this._frameResultThree;
  };

// }