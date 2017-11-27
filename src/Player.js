function Player() {

  this._roll = null
  this._bonus = 0
  this._scoreBoard = [
    new Frame,
    new Frame,
    new Frame,
    new Frame,
    new Frame,
    new Frame,
    new Frame,
    new Frame,
    new Frame,
    new Frame,
  ];
};



Player.prototype.scoreBoard = function() {
  return this._scoreBoard;
};

Player.prototype.bonus = function() {
  return this._bonus;
};

Player.prototype.roll = function() {
  return this._roll;
};

Player.prototype.assignBonus = function(bonus) {
  this._bonus = bonus;
};


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
