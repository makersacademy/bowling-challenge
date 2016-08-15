function Frame(){
  this.frameScore = [];
  this.pinsUp = 10;
}

Frame.prototype.Roll = function() {
    this.roll = Math.floor(Math.random()*(this.pinsUp));
    this.pinsUp = 10 - this.roll
    this._saveRoll(this.roll);
  };

Frame.prototype._saveRoll = function (rollScore) {
  this.frameScore.push(rollScore);
};

Frame.prototype.BowlFrame = function(){
  this.Roll();
  this.Roll();
};

Frame.prototype.isStrike = function(){
return this.frameScore[0] === 10
};

Frame.prototype.calculateFrameTotal = function() {
  this.frameTotal = this.frameScore.reduce(function(a,b){
    return a+b;
  },0);
  return this.frameTotal
};

Frame.prototype.isSpare = function(){
return this.calculateFrameTotal() === 10
};

Frame.prototype.resetFrame = function () {
  this.frameScore.length = 0;
};
