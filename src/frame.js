var Frame = function(){
  this.frameScore = [];
};

Frame.prototype.Roll = function() {
    this.roll = Math.floor(Math.random()*10);
    this._saveRoll(this.roll);
  };

Frame.prototype._saveRoll = function (rollScore) {
  this.frameScore.push(rollScore);
};

Frame.prototype.BowlFrame = function(){
  this.Roll();
  if (this.frameScore[0] < 10) {
  this.Roll();
  }
  return this.frameScore;
};
