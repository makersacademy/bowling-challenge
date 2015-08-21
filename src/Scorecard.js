var ScoreCard = function() {
  this.totalScore = 0
  this.frameScore = 0
}
ScoreCard.prototype.totalScore = function() {
  return this.totalScore
};

ScoreCard.prototype.addPoints = function(number) {
  return this.totalScore = this.totalScore + number
};

ScoreCard.prototype.resetPoints = function() {
  return this.totalScore = 0
};

ScoreCard.prototype.frameScore = function() {
  return this.frameScore
};

ScoreCard.prototype.addFramePoints = function(number) {
  return this.frameScore = this.frameScore + number
};

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
