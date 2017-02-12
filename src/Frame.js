function Frame() {
  this._frameScore = 0;
  this._scores = [];
  this._firstBowlScore = 0;
  this._secondBowlScore = 0;
  this._frameComplete = false;
  this._strike = false;
  this._spare = false;

}

Frame.prototype.viewFrameScore = function(){
  return this._frameScore;
};

Frame.prototype.addScore = function() {
  this._frameScore = this._scores.reduce(function(a, b){
    return a + b;
  }, 0);
};

Frame.prototype.endFrame = function(num){
  this._scores.push(num);
  this.addScore();
  this._frameComplete = true;
  game.updateScore();
  addFrame();
};

Frame.prototype.bowl = function(num) {
  if (this._scores.length < 1) {
    this.strikeScored(num);
    this._scores.push(num);
  } else if (this._scores.length === 1) {
    if (this.isValidScore(num)) {
      this.spareScored(num);
      this.endFrame(num);
    } else {
      throw new Error("Score not correct! Try Again");
    }
  }
};

Frame.prototype.isValidScore = function(num){
  return (this._scores[0] + num <= 10);
};

Frame.prototype.strikeScored = function(num){
  if (num == 10) {
    this._strike = true;
    this.endFrame();
  }
};

Frame.prototype.spareScored = function(num){
  if (this._scores[0] + num === 10) {
    this._spare = true;
  }
};
//
// Frame.prototype.firstBowl = function(num) {
//   this._firstBowlScore = num;
//   this._frameScore += num;
//   if (num === 10) {
//     this._strike = true;
//     this._frameComplete = true;
//   }
// };
//
// Frame.prototype.secondBowl = function(num) {
//   this._secondBowlScore = num;
//   this._frameScore += num;
//   if (this._firstBowlScore + num === 10){
//     this._spare = true;
//   }
//   this._frameComplete = true;
// };

Frame.prototype.isStrike = function(){
  return this._strike;
};

Frame.prototype.isSpare = function(){
  return this._spare;
};

Frame.prototype.isComplete = function(){
  return this._frameComplete;
};

//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
