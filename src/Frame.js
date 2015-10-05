function Frame() {
  this.pinsRemaining = 10;
  this.rollsTaken = 0;
  // this.isLastFrame = false
  // this.rollsAllowed = 2
};

Frame.prototype.firstRoll = function() {
  if (this.rollsTaken >= 1) {
    throw new Error("Already rolled")
  }
  this.firstRollScore = Math.floor(Math.random()*11)
  this.pinsRemaining -= this.firstRollScore;
  this.rollsTaken++
  if (this.firstRollScore === 10) {
    return "Strike!";
  };

  return this.firstRollScore;
};

Frame.prototype.secondRoll = function() {
  if (this.rollsTaken >= 2) {
    throw new Error("Already rolled");
  } else if (this.rollsTaken < 1) {
    throw new Error("Awaiting first roll");
  };

  this.secondRollScore = Math.floor(Math.random()*(this.pinsRemaining+1));
  this.pinsRemaining -= this.secondRollScore;
  this.rollsTaken++
  if (this.pinsRemaining === 0) {
    return "Spare!";
  };

  return this.secondRollScore;
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