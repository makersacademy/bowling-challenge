function Frame() {
  this.bowls = []
  this.matchScores = []
  this.runningTotal = 0
  this.isPreviouslySpare = false
  this.isPreviouslyStrike = false
};

Frame.prototype.roll = function(number) {
  this.bowls.push(number)
};

Frame.prototype.endFrame = function() {
  this.matchScores.push(this.Score())
  if (this.isPreviouslyStrike) {
    this.matchScores[this.matchScores.length-2] += this.Score()
  }
  if (this.isPreviouslySpare) {
    this.matchScores[this.matchScores.length-2] += this.bowls[0]
  }
  if (this.bowls[0] === 10) {
    this.isPreviouslyStrike = true
  } else {
    this.isPreviouslyStrike = false
    if (this.Score() === 10) {
      this.isPreviouslySpare = true
    } else {
      this.isPreviouslySpare = false
    }
  }

  this.updateTotal()
  this.bowls = []
};

Frame.prototype.updateTotal = function() {
  this.runningTotal = 0
  for(var i in this.matchScores) { this.runningTotal += this.matchScores[i]; }
  // this.runningTotal = this.scores[this.scores.length-1]
};

Frame.prototype.Score = function() {
  if (this.bowls.length === 1) {
    return (this.bowls[0])
  } else {
    return (this.bowls[0] + this.bowls[1])
  }
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
