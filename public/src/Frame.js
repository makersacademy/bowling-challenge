function Frame(){
  this._currFrame = 1;
  this._gameEnd = false;
};

Frame.prototype.nextFrame = function(strikeOrSpare) {
  if (this._currFrame === 10 && strikeOrSpare === false) {
    this._gameEnd = true;
    throw "Game Finished!";
  } else if (this._currFrame === 11) {
    this._gameEnd = true;
    throw "Game Finished!";
  } else {
    this._currFrame += 1;
  };
};
