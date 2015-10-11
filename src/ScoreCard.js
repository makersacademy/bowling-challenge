function ScoreCard() {
  this.frame = 1;
  this.pins = 10;
  this.roll = 1;
  this.scores = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
}

ScoreCard.prototype.scoreForRoll = function(pinsKnockedDown) {
  if (pinsKnockedDown === 10) {
    return this.strike();
  } else {
    this.scores[this.frame].push(pinsKnockedDown);
    return pinsKnockedDown;
  }
};

ScoreCard.prototype.nextFrame = function() {
  return this.frame < 12 ? this.frame += 1 : "End of game!";
};

ScoreCard.prototype.nextRoll = function() {
  if (this.frame === 10 && this.scores[10].length > 0) {
    if (this.scores[10[0]] + this.scores[10][1] >= 10) {
      return this.roll = 3;
    }
  }
  return this.roll === 1 ? this.roll = 2: this.roll = 1;
};

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
