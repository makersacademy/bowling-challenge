var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');

function Game() {
  this.frames = []

  this.createFrames();
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
}

Game.prototype.createFrames = function(){
  for (var i = 0; i < 9; i++) {
     var frame = new Frame();
     this.addFrame(frame);
  }
  this.addFrame(new TenthFrame());
}

Game.prototype.getFrame = function(frameIndex) {
  return this.frames[frameIndex];
}

Game.prototype.setFirstScore = function(frameIndex, score) {
  this.getFrame(frameIndex).setFirstScore(score);
}

Game.prototype.setSecondScore = function(frameIndex, score) {
  this.getFrame(frameIndex).setSecondScore(score);
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Game;
}
