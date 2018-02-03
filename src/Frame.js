function Frame() {
  this.bowls = []
  this.scores = []
  this.runningTotal = 0
  this.isPreviouslySpare = false
}

Frame.prototype.roll = function(number) {
  this.bowls.push(number)
};

Frame.prototype.endFrame = function() {
  this.scores.push(this.Score())
  if (this.isPreviouslySpare) {
    this.scores[this.scores.length-2] += this.bowls[0]
  }

  if (this.Score() === 10) {
    this.isPreviouslySpare = true
  } else {
    this.isPreviouslySpare = false
  }
  this.updateScore()
  this.bowls = []
};

Frame.prototype.updateScore = function() {
  this.runningTotal = 0
  for(var i in this.scores) { this.runningTotal += this.scores[i]; }
  // this.runningTotal = this.scores[this.scores.length-1]
};

Frame.prototype.Score = function() {
  return (this.bowls[0] + this.bowls[1])
};


//
// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
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
