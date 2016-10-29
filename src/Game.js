 function Game(){
   this.scoreTotal = 0;
   this.currentFrame = 1;
   this.currentRoll = 1;
   this.lastRollScore = 0;
   this.pins = 10;
   this.scoreMode = "normal";
   this.gameOver = false;
 };

Game.prototype.hits = function() {
  return Math.floor(Math.random() * (this.pins + 1));
};

Game.prototype.roll = function() {
  var hits = this.hits();
  this.score(hits);
  this.resetStatus(hits);
  if (!this.gameOver) {
    this.resetPins(hits);
    this.resetMode(hits);
    this.resetRolls(hits);
    this.lastRollScore = hits;
  };
};

Game.prototype.score = function(hits) {
  if (this.scoreMode == "normal") {
      this.scoreTotal += hits;
  } else if (this.scoreMode == "doubleStrike") {
    this.scoreTotal += hits *3;
  } else {
      this.scoreTotal += hits * 2;
  };
};

Game.prototype.resetStatus = function(hits) {
  if (this.currentFrame == 10 && this.currentRoll == 2 && (hits + this.lastRollScore) < 10) {
    this.gameOver = true;
  } else if (this.currentFrame == 10 && this.currentRoll == 3) {
    this.gameOver = true;
  };
};

Game.prototype.resetPins = function(hits) {
  if (this.currentRoll == 1 && hits < 10) {
    this.pins = 10 - hits;
  } else {
    this.pins = 10;
  };
};

Game.prototype.resetMode = function(hits) {
  if ((this.scoreMode == "strike" && this.lastRollScore < 10) || (this.currentFrame == 10 && this.currentRoll == 2)) {
    this.scoreMode = "normal";
  } else if (hits == 10 && this.lastRollScore < 10) {
    this.scoreMode = "strike";
  } else if(this.scoreMode == "doubleStrike" && (this.lastRollScore < 10 || (this.currentFrame == 10 && this.currentRoll == 1))) {
    this.scoreMode = "strike";
  } else if (hits == 10 && this.lastRollScore == 10) {
    this.scoreMode = "doubleStrike";
  } else if (this.currentRoll == 2 && this.lastRollScore + hits == 10) {
    this.scoreMode = "spare";
  } else if (this.scoreMode == "spare") {
    this.scoreMode = "normal";
  }
};

Game.prototype.resetRolls = function(hits) {
    if((this.currentRoll == 2 || hits == 10) && this.currentFrame != 10 ){
      this.currentFrame += 1;
      this.currentRoll = 1;
    } else {
      this.currentRoll += 1
  };
};
