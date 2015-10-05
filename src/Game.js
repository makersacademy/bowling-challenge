var Game = function() {
  this.score = 0;
  this.lastFrame = "";
  this.firstThrow = true;
  this.frameNumber = 1;
  this.scoreCard = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
};


Game.prototype.rollBall = function(pinsHit) {
  this.score += pinsHit;
  this.addRollToScoreCard(pinsHit);
  this.changeFrame();
  this.firstThrow = !this.firstThrow;
};

Game.prototype.changeFrame = function() {
  if(this.firstThrow === false) {
    this.frameNumber +=1;
      // game.isSpare();
  };

};

Game.prototype.addRollToScoreCard = function(rollPoints) {
  this.scoreCard[this.frameNumber].push(rollPoints);
};


Game.prototype.isSpare = function(){
  var sum = this.scoreCard[(this.frameNumber - 1)].reduce((a, b) => a+b );
  console.log(this.lastFrame);
  if(sum === 10) {
    this.lastFrame = "Spare!";
  console.log(this.lastFrame);  
  };
};
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

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
