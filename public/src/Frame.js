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
    console.log(this._currFrame)
  };
};

Frame.prototype.setRoll = function(elID, rollValue) {
  thisRoll = (elID === "roll1" ? this._roll1 : this._roll2);
  if (rollValue >= this._ROLLMIN && rollValue <= this._ROLLMAX) {
    thisRoll = rollValue;
  } else if(rollValue < this._ROLLMIN) {
    throw "Roll score less than 0!";
  } else if (rollValue > this._ROLLMAX) {
    throw "Roll score exceeds 10!";
  } else if (isNaN(rollValue) === true) {
    throw "Enter a whole number!"
  };
};
