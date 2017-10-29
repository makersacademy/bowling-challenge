function BowlingGame() {
  this._game = [];
  this._frame = [];
}

BowlingGame.prototype.game = function() {
  return this._game;
};

BowlingGame.prototype.addToFrame = function(pins) {

  if (this.isFinalFrame())
     {this.addToFinalFrame(pins);}
   else
    {this._frame.push(pins);
    if (this.IsAStrike(this._frame)) {
      this.addToGame(this._frame);}
    else if (this._frame.length === 2)
      this.addToGame(this._frame);
  }};

BowlingGame.prototype.isFinalFrame = function() {
  return this._game.length >= 9;
};

BowlingGame.prototype.addToFinalFrame = function(pins) {
   this._frame.push(pins);

   if ((this._frame[0] + this._frame[1]) < 10 )  {
     this.addToGame(this._frame);
   }

   else if (this.IsDoubleStrike(this._frame)) {
              if (this._frame.length === 3) {this.addToGame(this._frame);}
  }

   else if((this._frame[0] === 10) && (this._frame[1] < 10)) {
        if((this._frame[1] + this._frame[2]) > 10) {
         throw new Error ('There is only ' + (10 - this._frame[1]) + ' pins left');
       }  else if (this._frame.length === 3) {this.addToGame(this._frame);} }



   else if((this._frame[0] < 10) && ((this._frame[0] + this._frame[1]) > 10)) {
        throw new Error ('There is only ' + (10 - this._frame[0]) + ' pins left');
    }

    else if (this._frame.length ===3) {this.addToGame(this._frame);}

  };

BowlingGame.prototype.IsDoubleStrike = function(frame) {
  return ((this._frame[0] === 10) && (this._frame[1] === 10));
};



BowlingGame.prototype.frame = function() {
  return this._frame;
};

BowlingGame.prototype.addToGame = function(frame) {
  if ((frame[0] + frame[1]) > 10) {
      throw new Error ('There is only ' + (10 - frame[0]) + ' pins left');
      }
  this._game.push(frame);
  this._frame = [];
};

BowlingGame.prototype.IsAStrike = function(frame) {
  return frame[0] === 10;
};

BowlingGame.prototype.IsASpare = function(frame) {
  return frame[0] + frame[1] === 10;
};
