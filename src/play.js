function Play() {
this._rolls = [ ]
this._frameCounter = 1
this._score = 0
}

Play.prototype.roll = function(pinsKnocked) {
  this._rolls.push(Number(pinsKnocked));
};

Play.prototype.frame = function() {
  return this._frameCounter
};

Play.prototype.score = function () {
  this._score = 0;
  let roll = 0;
  for (var frameCount = 0; frameCount < 11; frameCount++) {
    if (this.isStrike(roll)) {
      this._score += 10 + unDefined(this._rolls[roll + 1]) + unDefined(this._rolls[roll + 2]);
      roll++
    }
    else if (this.isSpare(roll)) {
      this._score += 10 + unDefined(this._rolls[roll + 1]);
      roll += 2;
    }
    else {
      this._score += unDefined(this._rolls[roll]) + unDefined(this._rolls[roll + 1]);
      roll += 2;
    }
  }
  return this._score;
};

Play.prototype.isSpare = function(roll) {
  return unDefined(this._rolls[roll]) + unDefined(this._rolls[roll + 1]) === 10
};

Play.prototype.isStrike = function (roll) {
  return unDefined(this._rolls[roll]) === 10
};

unDefined = function(number) {
  if (number === undefined){
    return 0
  } else {
    return number
  }
}
