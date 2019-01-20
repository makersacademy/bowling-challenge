'use strict'

function Game() {
  this.gameScores = [];
  this.rollsTaken = 0;
  this.isComplete = false;
}

Game.prototype.currentScore = function() {
  return this.gameScores.reduce((sum, current) => sum + current, 0); 
}

Game.prototype.roll = function(score) {
  ++ this.rollsTaken;
  return this.gameScores.push(score);
}

Game.prototype.rollsTook = function() {
  return this.rollsTaken;
}

Game.prototype.gutterGame = function(rollsTook, currentScore) {
  if (rollsTook == 20 && currentScore == 0) {
    return this.gameComplete();
  }
}

Game.prototype.gameComplete = function() {
  return this.isComplete = true;
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


