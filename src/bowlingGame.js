function BowlingGame() {
  this.total = [];
}


BowlingGame.prototype.roll = function(pins) {
   this.total.push(pins);
};


BowlingGame.prototype.score = function() {
  var sum = 0;
  var totalIndex = 0;

  for (var i = 0; i < 10; i++) {
    if(this.total[totalIndex] + this.total[totalIndex + 1] === 10) {
      sum += this.total[totalIndex] + this.total[totalIndex + 1] + this.total[totalIndex + 2];
    } else {
      sum += this.total[totalIndex] + this.total[totalIndex + 1];
    }
    totalIndex += 2
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
