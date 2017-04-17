function Player() {
  this.score = 0;
  this.totalScore = 0; // is this needed?
  this.pinCount = 10;
 // this is -1 because framecount is being used to index scoresheet
  this.strike = false;
  this.halfStrike = false;
  this.strikeCount = 0;
  this.halfStrikeCount = 0;
  this.scoreSheet = [];
}

Player.prototype.takeTurn = function() {
  this.frameCount += 1; // this needs to be moved ELSEWHERE!!
  this.pinCount = 10;
  var firstShot = this.throwBall();
  this.score = this.score + firstShot; // Tracking the score
  if (firstShot == 10) {
    this.pinCount = 0;
    this.strike = true;
    this.scoreSheet.push(this.score);
    this.strikeCount += 1;
    this.scoreTracker(); // score tracker
    throw('STRIKE!');
  } else if (firstShot == 0) {
    console.log('Your first throw didn\'t hit anything!');
  } else if (firstShot > 0) {
    this.pinCount = this.pinCount - firstShot;
    console.log('You hit ' + firstShot + ' pins on your first throw!');
  }

  var secondShot = this.throwBall();

  if (this.score + secondShot > 10) {
    this.score = 10;
  } else {
    this.score = this.score + secondShot;
  }

  if (this.pinCount - secondShot <= 0) {
    this.pinCount = 0;
    this.halfStrike = true;
    this.scoreSheet.push(this.score);
    this.scoreTracker(); // score tracker
    this.strikeCount = 0;
    this.halfStrikeCount += 1;
    throw('HALF STRIKE!');
  } else if (secondShot == 0) {
    this.scoreSheet.push(this.score);
    this.scoreTracker(); // score tracker
    this.halfStrikeCount = 0;
    console.log('MISS!! You didn\'t hit a thing!');
  } else if (secondShot > 0) {
    this.scoreSheet.push(this.score);
    this.scoreTracker(); // score tracker
    this.pinCount = this.pinCount - secondShot;
    this.strikeCount = 0;
    this.halfStrikeCount = 0;
    console.log('You hit ' + secondShot + ' pins on your second throw!');
  }

};

Player.prototype.throwBall = function() {
  return Math.floor(Math.random() * 11);
};

Player.prototype.scoreTracker = function() {
    // if (this.strike === true) {
    //   this.scoreBoard[this.frameNumber].push(hit*2); // Scoreboard (4)
    //   this.score += (hit*2);
    // }
};

// // if (this.strike == false && this.halfStrike == false) {
//   this.totalScore = this.
//   this.score = 0
// } else if (this.strike == true) {
//   console.log('wee')
// }
// // } else if (this.strike == true) {
// //   this.totalScore = (this.totalScore + ((this.strikeCount * 10) + this.scoreSheet[this.frameCount]));
// // }
//
// Game.prototype.strikeCalculator = function() {
//   var i = 1;
//   while (this.scoreSheet[this.frameIndex - i].strike == true && this.strikeCount > 1) {
//     this.totalScore += (this.strikeCount * 10); // X X 6 - 0
//     this.strikeCount - 1; // 20 + 30 + 12
//     i += 1;
//     console.log(this.totalScore)
//   }
