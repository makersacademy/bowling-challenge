var Game = function() {
  this.score = 0;
  this.lastFrame = "";
  this.firstThrow = true;
  this.frameNumber = 1;
  this.scoreCard = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
  this.bonusPoints = {}
};


Game.prototype.rollBall = function(pinsHit) {
  this.isStrike(pinsHit);
  if(this.lastFrame === "Strike!") {
    this.addRollToScoreCard(pinsHit);
    // this.scoreCard[this.frameNumber].push(pinsHit);
    this.frameNumber +=1;
  } else {
    this.score += pinsHit;
    this.addRollToScoreCard(pinsHit);
    this.changeFrame();
    this.firstThrow = !this.firstThrow;
  };
};

Game.prototype.changeFrame = function() {
  if(this.firstThrow === false) {
    this.frameNumber +=1;
    this.isSpare();
  };
};

Game.prototype.addRollToScoreCard = function(rollPoints) {
  this.scoreCard[this.frameNumber].push(rollPoints);
  if(this.lastFrame === "Spare!") {
    this.addBonusPoints(rollPoints);
    this.lastFrame = "";
  } else if((this.lastFrame === "Strike!") && (this.firstThrow === false)){
    this.addBonusPoints(rollPoints);
    this.lastFrame = "";
  } else if((this.lastFrame === "Strike!") && (this.firstThrow === true)) {
    this.addBonusPoints(rollPoints);

  }
};


Game.prototype.isSpare = function(){
  var sum = this.scoreCard[(this.frameNumber - 1)].reduce((a, b) => a+b );
  if(sum === 10)  {
    this.lastFrame = "Spare!";
  } else {
    this.lastFrame = "";
  };
};

Game.prototype.addBonusPoints = function(points) {
  if((this.lastFrame === "Spare!") || (this.lastFrame === "Strike!")) {
    this.bonusPoints[this.frameNumber] = points;
  };
};

Game.prototype.isStrike = function(points){
  if ((points === 10) && (this.firstThrow === true)) {
    this.lastFrame = "Strike!";
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
