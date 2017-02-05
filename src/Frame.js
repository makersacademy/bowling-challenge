function Frame() {
  this._frameScore = 0
  this._firstBowlScore = 0
  this._secondBowlScore = 0
  this._frameComplete = false
  this._strike = false
  this._spare = false

}

Frame.prototype.viewScore = function() {
  return this._frameScore
};

Frame.prototype.firstBowl = function(num) {
  this._firstBowlScore = num
  this._frameScore += num
  if (num === 10) {
    this._strike = true;
    this._frameComplete = true;
  }
};

Frame.prototype.secondBowl = function(num) {
  this._secondBowlScore = num
  this._frameScore += num
  if (this._firstBowlScore + num === 10){
    this._spare = true;
  }
  this._frameComplete = true
};

Frame.prototype.isStrike = function(){
  return this._strike
};

Frame.prototype.isSpare = function(){
  return this._spare
};

Frame.prototype.isComplete = function(){
  return this._frameComplete
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
