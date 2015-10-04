function Frame() {
  this.pinsRemaining = 10;
  this.rollsTaken = 0;
  // this.isLastFrame = false
  // this.rollsAllowed = 2
};

Frame.prototype.rollOne = function() {
  if (this.rollsTaken >= 1) {
    throw Error("Already rolled")
  }
  this.rollOne = Math.floor(Math.random()*11)
  this.pinsRemaining -= this.rollOne;
};

// Frame.prototype.roll = function(number) {
//   if (this.rollsTaken >= number) {
//     throw Error("Already rolled")
//   } else if (this.rollsAllowed < number) {
//     throw Error("Frame is over");
//   }
//   this.rollBall();
//   this.rollsTaken++
// };

// Frame.prototype.rollBall = function() {
//   this.score += Math.floor(Math.random()*11);
// };




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