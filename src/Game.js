function Game() {
  this._rolls = []
}

Game.prototype.rolls = function() {
  return this._rolls;
};

Game.prototype.roll = function(roll) {
  this._rolls.push(roll);
};

Game.prototype.score = function(){
  var result = 0;
  var rollIndex = 0;
  for(var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if(this._rolls[rollIndex] == 10) {
      result += this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
      rollIndex += 1;
    }else{
      result += this._rolls[rollIndex] + this._rolls[rollIndex + 1];
      rollIndex += 2;
    };
  }
  return result;
};
/* function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

*/
