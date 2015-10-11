var Game = function() {
  this.frame = 1
  this.rollTurn = 1
  this.scorecard = {1: [], 2: [], 3: [], 4: [], 5: [],
                 6: [], 7: [], 8: [], 9: [], 10: []}
};

Game.prototype.throwBall = function(pinsDown) {

  if (pinsDown === 10 && this.rollTurn === 1) {
    return this._strike();
  } else if (this.rollTurn === 1) {
    this.scorecard[this.frame].push(pinsDown)
    this._nextRoll();
    return pinsDown;
  } else {
    this.scorecard[this.frame].push(pinsDown)
    this._nextRoll();
    this._nextFrame();
    return pinsDown;
  }
};

Game.prototype._nextRoll = function() {
  if (this.rollTurn === 1) {
    this.rollTurn = 2
  } else {
    this.rollTurn = 1
  }
};

Game.prototype._nextFrame = function() {
  this.frame += 1
};

Game.prototype._strike = function() {
  this.scorecard[this.frame].push(10)
  this._nextFrame();
  return 'X'
};
