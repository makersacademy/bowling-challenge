function BowlingGame(frame){
  this._score = 0;
  this.frame = frame || new Frame();
}

  BowlingGame.prototype.currentScore = function(){
    return this._score;
  };

  BowlingGame.prototype.bowl = function(pins){
    this.frame.bowl(pins);
  };



  // this.frame = typeof frame !== 'undefined' ? frame : new Frame();
