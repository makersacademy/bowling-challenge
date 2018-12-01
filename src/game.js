function Game() {
  this.frames = [];
  this.frames.push(new Frame(1));
  this.score = [0,0,0,0,0,0,0,0,0,0];
  this.individualScores = [];
}

Game.prototype.newFrame = function() {
  this.frames.push(new Frame(2));
}


Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length - 1]
}

Game.prototype.bowl = function(x) {
  console.log("===========================================")
  console.log("we're bowling on frame " + this.currentFrame().frameNumber +" it's bowl number "+this.currentFrame().bowls.length)
  console.log("bowling a " + x)
  console.log("before the bowl the bowl scores are " + this.currentFrame().bowls)
  console.log("before the bowl the bowls to double is " + this.currentFrame().bowlsToDouble)
  var framesToDouble = this.frames.filter(function(x) { return (x.bowlsToDouble != 0  && x.complete == true); });
  console.log("the frames to double are ")
  console.log(framesToDouble)
  if (framesToDouble.length != 0) {
    for (var i = 0; i < framesToDouble.length; i++) {
      console.log("I'm adding a " + x + " to frame number " + this.currentFrame().frameNumber)
      framesToDouble[i].score += x
      framesToDouble[i].bowlsToDouble -= 1
      console.log("after bowls to double has been reduced it is " + framesToDouble[i].bowlsToDouble);
    }
  }
  if (this.currentFrame().complete == true) {


    console.log("after the frame is complete the bowls to double = " + this.currentFrame().bowlsToDouble)
    this.newFrame();
  }

  this.currentFrame().bowl(x)
  this.updateScore()
};

Game.prototype.updateScore = function() {
  console.log("updating the score and the score of the first frame is" + this.score[0])
  console.log(this.frames)
  this.score[0] = this.frames[0].score
  if(this.frames.length > 0) {
    for (var i = 1; i < this.frames.length; i++) {
      console.log("this.score is currently " + this.score[i])
      console.log("this.score for previous round is " + this.score[i-1])
      console.log("this.frames.score" + this.frames[i].score)
      this.score[i] = this.score[i-1] + this.frames[i].score
    }
  }
}

Game.prototype.currentScore = function() {
  if(this.score.length > 0) {
    return this.score[this.score.length-1]
  } else {
    return 0;
  }
}

Game.prototype.compileScores = function() {
  for (var i = 0; i < this.frames.length; i++) {
    this.individualScores.push(this.frames[i].bowls)
    //Do something
  }
  return this.individualScores
}
