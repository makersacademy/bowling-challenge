function Frame(){
  this._currFrame = 1;
  this._roll1 = 0;
  this._roll2 = 0;
  this._ROLLMIN = 0;
  this._ROLLMAX = 10;
  this._strike = false
  this._spare = false
};

Frame.prototype.nextFrame = function(strikeOrSpare) {
  if (this._currFrame === 10 && strikeOrSpare === false) {
      throw "Game Finished!"
  } else if (this._currFrame === 11 && strikeOrSpare === true) {
      throw "Game Finished!"
  } else {
    this._currFrame += 1;
  };
};
