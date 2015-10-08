function Player() {
  this.score = 0;
  this.totalScore = 0; // is this needed?
  this.pinCount = 10;
  this.frameCount = 0;
  this.strike = false;
  this.halfStrike = false;
  this.multiStrikeCount = 0;
  this.scoreSheet = [];
}

Player.prototype.takeTurn = function() {
  this.frameCount += 1;
  this.pinCount = 10;
  var firstShot = this.throwBall();
  this.score = this.score + firstShot;
  if (firstShot == 10) {
    this.pinCount = 0;
    this.strike = true;
    this.scoreSheet.push('X');
    this.multiStrikeCount = this.multiStrikeCount + this.score;
    this.scoreTracker(); // score tracker
    throw('STRIKE!');
  } else if (firstShot == 0) {
    this.scoreTracker(); // score tracker
    console.log('Your first throw didn\'t hit anything!');
  } else if (firstShot > 0) {
    this.scoreTracker(); // score tracker
    this.pinCount = this.pinCount - firstShot;
    console.log('You hit ' + firstShot + ' pins on your first throw!');
  }

  var secondShot = this.throwBall();
  if (this.score + secondShot > 10) {
    this.score = 10;
  } else if (this.score + secondShot < 10) {
    this.score = this.score + secondShot;
  }

  if (this.pinCount - secondShot <= 0) {
    this.pinCount = 0;
    this.halfStrike = true;
    this.scoreSheet.push('/');
    this.scoreTracker(); // score tracker
    this.multiStrikeCount = this.multiStrikeCount + this.score;
    throw('HALF STRIKE!');
  } else if (secondShot == 0) {
    this.scoreSheet.push(this.score);
    this.scoreTracker(); // score tracker
    this.multiStrikeCount = 0;
    console.log('MISS!! You didn\'t hit a thing!');
  } else if (secondShot > 0) {
    this.scoreSheet.push(this.score);
    this.scoreTracker(); // score tracker
    this.pinCount = this.pinCount - secondShot;
    this.multiStrikeCount = 0;
    console.log('You hit ' + secondShot + ' pins on your second throw!');
  }

};

Player.prototype.throwBall = function() {
  return Math.floor(Math.random() * (11 - 0)) + 0;
};

Player.prototype.scoreTracker = function() {
  console.log('testing');
  // if (this.strike = false) {
  //   this.totalScore = this.totalScore + this.score
  // } else if (this.strike = true) {
  //   this.totalScore =
  // }

};
