var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');
var Updater = require('../src/updater.js');

// TODO get reat of those set Methods that duplicate frame behaviour
function Game() {
  this.frames = []
  this.createFrames();
  this.updater = new Updater();
  this.increment = 0;
  this.tenthFrameIncrement = 0;
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
}

Game.prototype.createFrames = function(){
  for (var i = 0; i < 9; i++) {
     this.addFrame(new Frame());
  }
  this.addFrame(new TenthFrame());
}

Game.prototype.getFrame = function(frameIndex) {
  return this.frames[frameIndex];
}

Game.prototype.getTotal = function() {
  this.update();
  var total = 0;
  this.frames.forEach(function(frame){
    total += frame.getFinalFrameScore();
  });
  return total;
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
}

Game.prototype.inputScore = function(score){
   var currentFrame = this.getFrame(this.increment);
   if (this.increment == 9) {
       if (currentFrame.getFinalFrameScore == null) {
          return "Game has finished!";
       }

       if (currentFrame.getFirstScore() == null) {
           currentFrame.setFirstScore(score);
           this.update();
           return;
       }

       if (currentFrame.getSecondScore() == null) {
           currentFrame.setSecondScore(score);
           this.update();
           return;
       }

       if (currentFrame.isStrike() || currentFrame.isSpare()) {
           currentFrame.setBonusScore(score);
           this.update();
           return;
       }
       this.update();
   }

   if (currentFrame.getFirstScore() == null) {
       currentFrame.setFirstScore(score);
       this.update();
       return;
   }

   if (currentFrame.isStrike()) {
       this.increment += 1;
       currentFrame = this.getFrame(this.increment);
       currentFrame.setFirstScore(score);
       this.update();
       return;
   }

   if (!currentFrame.isStrike()) {
      currentFrame.setSecondScore(score)
      this.increment += 1;
      this.update();
      return;
   }
   this.update();
}

Game.prototype.update = function() {
  this.updater.update(this.frames);
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Game;
}
