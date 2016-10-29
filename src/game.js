function Game(){
  var frames;
  this.frames = [];
  console.log(this);
};

// Game.prototype.frames = function(){
//   // var frames = [];
//   console.log(this);
// };

Game.prototype.addFrame = function(frameScore){
  this.frames.push(frameScore);
  // this.frames.push(frameScore);
  // console.log(this);
};

Game.prototype.showFrame = function(frameNo){
  return this.frames[frameNo-1];
};



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
