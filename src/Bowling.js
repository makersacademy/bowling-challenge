function Bowling() {
  this.game = {
    frame1: [],
    frame2: [],
    frame3: [],
    frame4: [],
    frame5: [],
    frame6: [],
    frame7: [],
    frame8: [],
    frame9: [],
    frame10: []
  }
  this.currentFrame = 1
  this.currentBall = 1
}

Bowling.prototype.bowl = function(score) {
  var frameKey = 'frame' + this.currentFrame
  this.game[frameKey].push(score)
  this.nextBall();
}

Bowling.prototype.nextBall = function() {
  if (this.currentBall === 2  && this.currentFrame < 10) {
    this.currentBall = 1;
    this.currentFrame++;
  }else{
    this.currentBall++;
  }
}
