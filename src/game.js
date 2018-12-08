var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');
var Updater = require('../src/updater.js');

function Game() {
  this.frames = []
  this.createFrames();
  this.updater = new Updater();
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

Game.prototype.setBonusScore = function(score) {
  this.getFrame(9).setBonusScore(score);
}

Game.prototype.getTotal = function() {
  this.update();
  var total = 0
  this.frames.forEach(function(frame){
    total += frame.getFinalFrameScore();
  });
}

Game.prototype.update = function() {
  this.updater.update(this.frames);
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Game;
}
