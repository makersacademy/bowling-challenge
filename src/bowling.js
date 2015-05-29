function Player() {
  this.score = [];
  this.firstHit = 0;
  this.secondHit = 0;
  this.isSpare = false;
  this.strikeCount = 0;
  this.tenthFrame = false;
};

Player.prototype.firstBowl = function(pins) {

  if(this.errorHandle(pins) == null) { this.firstHit = pins };
  if(pins == 10) { this.secondHit = 0 };
};

Player.prototype.secondBowl = function(pins) {
  if(this.errorHandle(pins) == null) { this.secondHit = pins };
};

Player.prototype.calculateScore = function() {
  result = this.firstHit + this.secondHit;
  this.score.push(result);
  this.addBonus();
  this.isNextABonus();
  this.resetHits();
  if(this.score.length == 10) {
    this.tenthFrame = true;
   };
};

Player.prototype.addBonus = function() {
  x = this.score.length
  if(this.strikeCount == 1) {
    this.score[(x - 2)] += this.firstHit + this.secondHit;
  }
  else if(this.strikeCount == 2) {
    this.score[(x - 2)] += this.firstHit + this.secondHit;
    this.score[(x - 3)] += this.firstHit;
    this.strikeCount -= 1;
  }
  else if(this.isSpare == true) {
    this.score[(x - 2)] += this.firstHit;
    this.isSpare = false;
  }
};

Player.prototype.isNextABonus = function() {
  if(this.firstHit == 10) {
    this.strikeCount += 1
  }
  else if(this.firstHit + this.secondHit == 10) {
    this.isSpare = true;
  }
  else {
    this.strikeCount = 0;
  }
};

Player.prototype.resetHits = function() {
  this.firstHit = 0;
  this.secondHit = 0;
};

// Player.prototype.tenthFrame = function() {
//   x = this.score.length
//   if(this.strikeCount == 1) {
//     this.score[(x - 2)] += this.firstHit + this.secondHit;
//   }
//   else if(this.strikeCount == 2) {
//     this.score[(x - 2)] += this.firstHit + this.secondHit;
//     this.score[(x - 3)] += this.firstHit;
//     this.strikeCount -= 1;
//   }
//   else if(this.isSpare == true) {
//     this.firstBowl(x);
//     this.score[(x - 2)] += this.firstHit;
//     this.isSpare = false
//   }
// };

Player.prototype.errorHandle = function(pins) {
  if(this.tenthFrame == true) {
    if(this.isSpare == false && this.strikeCount == 0) {
      throw new Error("Game has ended")
    }
  }
  else if(this.firstHit == 10 && pins != 0) {
    throw new Error('Cannot bowl twice on a strike');
  }
  else if(pins + this.firstHit > 10){
    throw new Error('Cannot hit more than 10 pins');
  }
  // if(this.score.length == 10 && (this.strikeCount == 0 || this.isSpare == false)) {
  //   throw new Error('Game has ended');
  // }
};