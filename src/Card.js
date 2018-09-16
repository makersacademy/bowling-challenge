function Card() {
  this.frames = []
  this.bonuses = [0, 0]
};

Card.prototype.store = function(frame) {
  if (!this._isEnd()) {
    this.frames.push(frame.bowls)
    // apply bonuses for the last frame before storing bonus for current frame
    this._applyBonuses()
    this._trackBonus(frame)
  } else {
    this._endGame()
  }
};

Card.prototype._trackBonus = function(frame) {
  if (frame.spare) {
    this.bonuses[1] = 1
  } else if (frame.strike) {
    this.bonuses[1] = 2
  }
};

Card.prototype._applyBonuses = function() {

  // variables for the last three frames
  ultimateFrame = this.frames[this.frames.length -1]
  penultimateFrame = this.frames[this.frames.length -2]
  antepenultimateFrame = this.frames[this.frames.length -3]

  // adds first bowl of recent round to frame two before,
  //   only happens when two strikes occur in a row
  if (this.bonuses[0]) {
    antepenultimateFrame.push(ultimateFrame[0])
    this.bonuses[0] = 0
  }

  // if previous frame was spare
  //   adds first roll to previous frame
  if (this.bonuses[1] === 1) {
    penultimateFrame.push(ultimateFrame[0])
    this.bonuses[1] = 0
  }
  // if prevous frame was strike and most recent was not
  //   adds both rolls from recent frame
  else if (this.bonuses[1] === 2 && ultimateFrame.length === 2) {
    penultimateFrame.push(ultimateFrame[0])
    penultimateFrame.push(ultimateFrame[1])
    this.bonuses[1] = 0
  }
  // if previous frame was strike and most recent was strike
  //   recent frames strike roll is pushed to previous frames score
  //   next frames first roll will be added by the first if statement
  else if (this.bonuses[1] === 2 && ultimateFrame.length === 1) {
    penultimateFrame.push(ultimateFrame[0])
    this.bonuses[0] = 1
  }
};

Card.prototype._isEnd = function() {
  return (this.frames.length > 9 && this._isNoBonuses())
};

Card.prototype._isNoBonuses = function() {
  return (this.bonuses[0] === this.bonuses[1])
};

// this function removes frames rolled for final frame bonus
// it's necessary because the final frame logic doesn't exist
Card.prototype._endGame = function() {
  while (this.frames.length > 10) {
    this.frames.pop()
  }
};
