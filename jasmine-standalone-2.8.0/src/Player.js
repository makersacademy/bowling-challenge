
function Player() {
  this.score = 0;
  this.frame = 1;
  this.numBowlsInFrame = 0;
}

Player.prototype.bowl = function(num) {
  this.addScore(num);
  this.numBowlsInFrame += 1;
  if(this.numBowlsInFrame === 2) {
    this.updateFrame();
    this.numBowlsInFrame = 0;
  }
}

Player.prototype.addScore = function(num) {
    this.score.push(num);
}

Player.prototype.updateFrame = function() {
  this.frame += 1;
}

Player.prototype.displaySingleScore = function() {
  if(this.singleScore < 10) {
    return "You bowled out " + this.score.last + " pins";
  } else {
    return "You bowled a strike!";
  }
}

Player.prototype.displayFrame = function() {
  return "You are currently in frame " + this.frame;
}
