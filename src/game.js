/*Bowling rules:
 1 game has 10 frames
each frame has 2 rolls, unless the first is a strike
after every frame, the pins get reset to 10

each pin = 1 point
a strike = 10 points, plus 'bonus' from both rolls of next frame,
  includes upto 2 next frames
a spare = 10 points, plus 'bonus' from first roll of next frame,
  only includes next frame.
when pins left standing, simple addition.
*/

function Game(){
  this.currentFrame = new Frame()
  this.currentScore = 0
  this._allFrames   = []
  this.finalScore   = 0
  this.frameNumber  = 0
  this._maxFrames   = 10
  this._frameScore  = []
}


Game.prototype.play = function (pins) {
  if(this.frameNumber > this._maxFrames){
    throw new Error('Game Over!')
  }
  this.currentFrame.play(pins)
  this.endFrame()
};

Game.prototype.endFrame = function () {
  if(this.currentFrame._isFinished){
    this.calculateFrame()
    this._allFrames.push(this.currentFrame)
    this.currentFrame = new Frame
    this.frameNumber ++
  }
};

Game.prototype.calculateFrame = function () {
  if(this.currentFrame._isStrike || this.currentFrame._isSpare){
      this.currentScore += 10
  } else {
    var score = this.currentScore += this.currentFrame._score
    this._frameScore.push(score)
  }
};



Game.prototype.latterFrame = function () {
  return this._allFrames[this._allFrames.length - 1]
};

Game.prototype.firstFrame = function () {
  return this._allFrames[this._allFrames.length - 2]
};
