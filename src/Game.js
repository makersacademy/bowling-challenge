function Game() {
  this.frames = [];
  // [new Frame()]
}

Game.prototype.addFrame = function() {
  // console.log(game.frames)
  if(this.frames.length >= 10) throw ("You can only have 10 frames");
  // console.log(game.frames)
  this.frames.push(new Frame());
};

// Game.prototype.checksIfStrike = function() {
//   for(var i = 0; i < 10; i++) {
//     if(game.frames[i].isStrike)
//     // check each bowl in each frame if 10, then add [i+1] to 10
//   }
// }
