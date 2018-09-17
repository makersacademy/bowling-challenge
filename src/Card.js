function Card() {
  this.frames = []
  this.bonuses = [0, 0]
};

// at the moment frame.bowls are stored in frames array
// refactoring to store full frame instance should clean up card logic
// and return us to SRC principle

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

  // adds first bowl of recent round to frame two before,
  //   only happens when two strikes occur in a row
  if (this.bonuses[0]) {
    this._addBonusRoll(this._twoPreviousFrame(), this._firstBowl())
    this.bonuses[0] = 0
  }

  // if bonus is to be added to previous frame
  if (this.bonuses[1]) {
    // add first roll of current frame
    this._addBonusRoll(this._previousFrame(), this._firstBowl())
    this.bonuses[1] = 0

    // if a second roll needs to be added
    if (this._isPreviousFrameStrike()) {
      // and the current frame has two bowls
      if (!this._isCurrentFrameStrike()) {
        // add second roll
        this._addBonusRoll(this._previousFrame(), this._secondBowl())
        this.bonuses[1] = 0
      } else {
        // store reminder to add second roll
        this.bonuses[0] = 1
      };
    };
  };
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
  };
};

Card.prototype.score = function() {
  var score = 0
  var frames = []
  this.frames.forEach(function(frame) {
    frames.push(frame)
    frame.forEach(function(bowl) {
      score += bowl
    })
  });
  score = frames.push(score)
  return frames
};

// You like functions?

// bonus related functions

Card.prototype._addBonusRoll = function(frame, bonus) {
  frame.push(bonus)
};

Card.prototype._isPreviousFrameStrike = function() {
  return (this._previousFrame()[0] === 10)
};

Card.prototype._isCurrentFrameStrike = function() {
  return (this._mostRecentFrame()[0] === 10)
};

// functions for accessing 3 most recent frames

Card.prototype._mostRecentFrame = function() {
  return this.frames[this.frames.length - 1]
};

Card.prototype._previousFrame = function() {
  return this.frames[this.frames.length - 2]
};

Card.prototype._twoPreviousFrame = function() {
  return this.frames[this.frames.length - 3]
};

// functions accessing bowls to apply as bonuses

Card.prototype._firstBowl = function() {
  return this._mostRecentFrame()[0]
};

Card.prototype._secondBowl = function() {
  return this._mostRecentFrame()[1]
};
