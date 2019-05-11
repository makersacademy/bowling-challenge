var Frame = require('./frame')
// var Play = require('./play')

function Bowling() {
  this._frame = new Frame();
  this._frameCount = 1;
  this._play = 1;
  this._scorecard = []
};

Bowling.prototype.roll = function(pin){
  if (this.getPlay() === 1) {
    this._play = 2;
    this._frame.setPlayOne(pin)
  } else if (this.getPlay() === 2) {
    this._frame.setPlayTwo(pin)
    this._play = 1;
    this._scorecard.push(this.getResult())
    this._frameCount ++;
  };
};

// Ideally, something like:
// bowling.roll(pin) would do something like
    //


Bowling.prototype.getPlay = function(){
  return this._play;
}

Bowling.prototype.getFrame = function() {
  return this._frameCount
};

Bowling.prototype.getResult = function () {
  var result = this._frame.getResult();
};

module.exports = Bowling;
