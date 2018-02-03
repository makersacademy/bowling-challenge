function Frame() {
  this.rolls = []
  this.scores = []
}

Frame.prototype.roll = function(number) {
  this.rolls.push(number)
};

Frame.prototype.end = function() {
  this.scores.push(this.rolls[0] + this.rolls[1])
  this.rolls = []
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
