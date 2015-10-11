function BowlingGame() {
  this.total = [];
}


BowlingGame.prototype.roll = function(pins) {
   this.total.push(pins);
};


BowlingGame.prototype.score = function() {
  var sum = 0;
  var totalIndex = 0;
  var arry = this;

  for (var i = 0; i < 10; i++) {
    if (isSpare()) {
      spareScore();
    } else {
      normalScore();
    }
    totalIndex += 2
  }
  return sum


  function isSpare() {
    return arry.total[totalIndex] + arry.total[totalIndex + 1] === 10;
  }

  function spareScore() {
    return sum += arry.total[totalIndex] + arry.total[totalIndex + 1] + arry.total[totalIndex + 2];
  }

  function normalScore() {
    return sum += arry.total[totalIndex] + arry.total[totalIndex + 1];
  }
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
