'use strict'

function ScoreCard() {
  this.scoreArray = [];
  this.rollsTaken = 0;
}

ScoreCard.prototype.currentScore = function() {
  return this.scoreArray.reduce((sum, current) => sum + current, 0); 
}

ScoreCard.prototype.roll = function(score) {
  ++ this.rollsTaken;
  return this.scoreArray.push(score);
}

ScoreCard.prototype.rollsTook = function() {
  return this.rollsTaken;
}






// function Player() {
// }
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


