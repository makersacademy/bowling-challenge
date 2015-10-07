var Game = function() {
  this.score = 0;
  this.lastFrame = "";
  this.firstThrow = true;
  this.frameNumber = 1;
  this.scoreCard = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
  this.bonusPoints = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
};


Game.prototype.rollBall = function(pinsHit) {
  this.score += pinsHit;
  if(this.lastFrame === "Strike!") {
    this.addRollToScoreCard(pinsHit);
    // this.scoreCard[this.frameNumber].push(pinsHit);
    // this.frameNumber +=1;
  } else {
    this.addRollToScoreCard(pinsHit);
    this.changeFrame();
    this.firstThrow = !this.firstThrow;
    this.isStrike(pinsHit);
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
    this.firstThrow = true;
  } else if((this.lastFrame === "Strike!"  ) && (this.firstThrow === true)){
         if(this.scoreCard[this.frameNumber - 1] === [10]) {
            this.addBonusPoints(rollPoints);
            this.firstThrow = true;
            this.frameNumber +=1;
         } else {
            this.addBonusPoints(rollPoints);
            this.firstThrow = false;
         }

  };
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
    this.bonusPoints[this.frameNumber].push(points);
  };
};

Game.prototype.isStrike = function(points){
  if ((points === 10) && (this.firstThrow === false)) {
    this.lastFrame = "Strike!";
    this.frameNumber += 1;
    this.firstThrow = true;
  };
};
