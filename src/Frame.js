function Frame() {
  this.goCount = 0;
  this.startingPins = 10;
  this.standingPins = 10;
}

Frame.prototype.registerGo = function(rollScore) {
  if(this.isOver()){
    throw "Frame is over";
  }
  else {
  this.goCount += 1;
  this.standingPins -= rollScore;
  }
};

Frame.prototype.remainingPins = function() {
  return this.standingPins;
};

Frame.prototype.isOver = function() {
  return (this.goCount === 2 || this.standingPins === 0);
};

Frame.prototype.total = function() {
  return this.startingPins - this.standingPins;
};

Frame.prototype.isStrike = function() {
  if(this.goCount === 1 && this.standingPins === 0) {
    return "X";
  };
};

Frame.prototype.isSpare = function() {
  if(this.goCount === 2 && this.standingPins === 0){
    return "/";
  };
};










// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };