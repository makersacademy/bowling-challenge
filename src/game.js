const STARTING_SCORE = 0;

function Game () {
  this.frames = [];
};

Game.prototype = {

  storeFrame: function(frame) {
    this.frames.push(frame);
  },

}
