function Game(){
  var frames;
  this.frames = [];
  // console.log("function Game###|: " + this);
};

Game.prototype.addFrame = function(frameScore){
  this.frames.push(frameScore);
  // this.frames.push(frameScore);
  // console.log("Game.prototype.addFrame###|: " + this);
};

Game.prototype.showFrame = function(frameNo){
  return this.frames[frameNo-1];
  // console.log("Game.prototype.showFrame###|: " + this);
};


// For verfication purposes only!!!
Game.prototype.showAllFrames = function(){
  return this.frames;
  // console.log("Game.prototype.showFrame###|: " + this);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~ Roll ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
function Roll(){
  var roll;
  this.roll = [];
};

Roll.prototype.addRoll = function(rollScore){
  if (this.roll.length >= 2) {
    throw new Error('There are a maximum of 2 rolls per frame');
  }
  this.roll.push(rollScore);
};

Roll.prototype.showRoll = function(rollNo){
  return this.roll[rollNo-1];
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
