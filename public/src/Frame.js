function Frame(){
  this._currFrame = 1;
  this._roll1 = 0;
  this._roll2 = 0;
  this._ROLLMIN = 0;
  this._ROLLMAX = 10;
  this._strike = false
  this._spare = false
};

Frame.prototype.nextFrame = function() {
  if (this._currFrame === 10 && this._strike === false && this._spare === false) {
      throw "Game Finished!"
  } else if (this._currFrame === 11 && (this._strike === true || this._spare === true)) {
      throw "Game Finished!"
  } else {
    this._currFrame++;
  };
};

Frame.prototype.setRoll1 = function(rollValue) {
  if (rollValue >= this._ROLLMIN && rollValue <= this._ROLLMAX) {
    this._roll1 = rollValue;
  } else if(rollValue < this._ROLLMIN) {
    throw "Roll score less than 0!";
  } else if (rollValue > this._ROLLMAX) {
    throw "Roll score exceeds 10!";
  } else if (isNaN(rollValue) === true) {
    throw "Enter a whole number!"
  };
};

Frame.prototype.setRoll2 = function(rollValue) {
  if (rollValue >= this._ROLLMIN && rollValue <= this._ROLLMAX) {
    this._roll2 = rollValue;
  } else if(rollValue < this._ROLLMIN) {
    throw "Roll score less than 0!";
  } else if (rollValue > this._ROLLMAX) {
    throw "Roll score exceeds 10!";
  } else if (isNaN(rollValue) === true) {
    throw "Enter a whole number!"
  };
};
