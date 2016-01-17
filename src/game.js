(function() {
  'use strict';
}());

function Game(){
  this.frames = {};
  this.gameScore = 0;
}

Game.prototype.newFrame = function () {
  this.currentFrame = new Frame();

}
