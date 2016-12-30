var Score = function(player) {
  this.player = player ? player : new Player()
  this._scores = [];
};

Score.prototype.round = function() {
  this._round = [];
  bowl = this.player.bowl()
  this._round.push(bowl);
  if(this.isStrike(bowl))
    { this._round.push('/');
      this._scores.push(this._round); }
  else
  { this._round.push(this.player.secondBowl());
  this._scores.push(this._round); }
};

Score.prototype.isStrike = function() {
  return(bowl === 10)
};
