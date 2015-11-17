function BowlingGame() {
  this.frames = 10;
  this.PINS = 10;
  this.ROLL = 2;
  this.currentGo = 0;
  this.currentScore = 0;
  this.totalScore = null;
  this.isStrike = false;
  this.isSpare = false;
  this.GAMEOVER_ERROR = "The game is over you cannot bowl again";

  };

  BowlingGame.prototype.bowl = function(pins) {
  if ( this.frames === 0 ) throw Error(this.GAMEOVER_ERROR);
  if ( this.currentGo === 0 ) {
    if ( pins === 10 ) {
      this.storeSpareStrike();
    }
    else {
      this.currentGo +=1;
      this.currentScore += pins;
      }
    }
  else {
    if ((this.currentScore + pins) === 10 ) {
      this.storeSpareStrike();
    }
    else {
      this.currentGo = 0;
      this.currentScore += pins;
      this.totalScore += this.currentScore;
      this.currentScore = 0;
      this.frames -= 1;
      }
    }
  };

  BowlingGame.prototype.storeSpareStrike = function() {
    if ( this.currentGo != 0) {
        this.isSpare = true;
      }
    else {
        this.isStrike = true;
    }
    this.currentScore = 10;
    this.currentGo = 0;
    this.frames -= 1;
  };
