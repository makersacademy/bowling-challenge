function BowlingGame() {
  this.total = [];
}


BowlingGame.prototype.roll = function(pins) {
   this.total.push(pins);
};


BowlingGame.prototype.score = function() {
  var sum = 0;
  for (var i = 0; i < 20; i++) {
    sum += this.total[i];
  }
  return sum
};





//
//   }
//
// };

// BowlingGame.prototype.score = function() {
//   return 0;
// };

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
