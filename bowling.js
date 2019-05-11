var Frame = require('./frame')

function Bowling() {
  this._frame = 1;
  this._play = 1;
};

Bowling.prototype.roll = function(pin){
  if (this.getPlay() === 1) {
    this._play = 2;
  } else if (this.getPlay() === 2) {
    this._play = 1;
    this._frame ++;
  };
};

Bowling.prototype.getPlay = function(){
  return this._play;
}

Bowling.prototype.newFrame = function () {
  this._frame = new Frame();
};

Bowling.prototype.getFrame = function() {
  return this._frame
};

module.exports = Bowling;
