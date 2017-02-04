function Frame() {
  this._frameScore = 0
  this._firstBowlScore = 0
  this._secondBowlScore = 0
}

Frame.prototype.viewScore = function() {
  return this._frameScore
};

Frame.prototype.firstBowl = function(num) {
  this._firstBowlScore = num
  this._frameScore += num
};

Frame.prototype.secondBowl = function(num) {
  this._secondBowlScore = num
  this._frameScore += num
};

Frame.prototype.isStrike = function(){
  return this._firstBowlScore === 10
};

Frame.prototype.isSpare = function(){
  if (this._frameScore === 10 && this._secondBowlScore > 0) {
    return true
  }
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
