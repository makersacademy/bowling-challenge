function Frame() {
  this.bowls = []
  this.scores = []
  this.runningTotal = 0
}

Frame.prototype.roll = function(number) {
  this.bowls.push(number)
};

Frame.prototype.end = function() {
  this.scores.push(this.bowls[0] + this.bowls[1])
  this.updateScore()
  this.bowls = []
};

Frame.prototype.updateScore = function() {
  this.runningTotal += this.scores[this.scores.length-1]
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
