var Frame = require('./frame')

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
    this._scorecard.push(this._frame._result)
    this._frameCount ++;
  };
};

Bowling.prototype.getScorecard = function () {
  return this._scorecard;
};

Bowling.prototype.getPlay = function(){
  return this._play;
}

Bowling.prototype.getFrame = function() {
  return this._frameCount
};

module.exports = Bowling;
