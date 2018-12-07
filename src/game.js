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

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Game;
}
