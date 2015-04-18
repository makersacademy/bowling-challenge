function BowlingGame() {
  this.score = 0;
  this.currentFrame = 1;
  this.secondRollOnFrame = false;
  this.frames = [0,0,0,0,0,0,0,0,0,0]; //is frames a keyword?
  this.strikeFrame = null;
  this.takingStrikeBonus = false;
}

// todo refactor
BowlingGame.prototype.enterScore = function(score) {
  if(this.takingStrikeBonus) {
    this.frames[this.strikeFrame-1] += score;
    if(this.secondRollOnFrame) {
      this.takingStrikeBonus = false;
      this.strikeFrame = null;
    };
  };

  this.frames[this.currentFrame-1] += score;
  if(score===10) {
    this.secondRollOnFrame = true; //skip second roll
    this.takingStrikeBonus = true;
    this.strikeFrame = this.currentFrame;
    };
  if(this.secondRollOnFrame === true) { this.currentFrame++; };
  this.secondRollOnFrame = !this.secondRollOnFrame;

};

BowlingGame.prototype.frame = function(frame) {
  return this.frames[frame-1];
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
