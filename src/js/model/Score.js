function Score() {
  this._scoreboard = [];
  this._total = 0;

  this._rolls = [];
}

Score.prototype.getScoreBoard = function() {
  return this._scoreboard;
};

Score.prototype.getScoreTotal = function() {
  return this._total;
};

Score.prototype.getRolls = function() {
  return this._rolls;
};

Score.prototype.rollNumber = function() {
  return this.getRolls().length;
};

Score.prototype.rollMinusOne = function() {
  return this.getRolls().slice(-2)[0];
};

Score.prototype.rollMinusTwo = function() {
  return this.getRolls().slice(-3)[0];
}

Score.prototype.addBonus = function(roll) {
  this._scoreboard[this._scoreboard.length - 2] += roll;
}

Score.prototype.recordRolls = function(roll) {
  this._rolls.push(roll);
};

Score.prototype.setScore = function(roll, last_frame, this_frame, game_length) {
  this.recordRolls(roll);
  this.scorePins(roll, this_frame);
  this.scoreSpare(roll, this_frame, last_frame);
  this.scoreStrike(roll, game_length);
  this._total = this._scoreboard.reduce(function(a,b) { return a + b });
};

Score.prototype.scorePins = function(roll, current_frame) {
  if (current_frame.isNew()) { this._scoreboard.push(roll); }
  else { this._scoreboard[this._scoreboard.length - 1] += roll; }
}

Score.prototype.scoreSpare = function(roll, current_frame, last_frame) {
  if (typeof last_frame !== 'undefined') {
    if (last_frame.isSpare() && current_frame.isNew()) { this._scoreboard[this._scoreboard.length - 2] += roll;; }
  }
};

Score.prototype.scoreStrike = function(roll, game_length) {
  if (this.getRolls().length === 1) { return 'undefined'; }
  if (game_length < 11 && this.rollNumber() > 2 && this.rollMinusTwo() === 10 && this.rollMinusOne() === 10) {
    this._scoreboard[this._scoreboard.length - 3] += roll;;
  }
  else if (game_length < 11 && this.rollNumber() > 2 && this.rollMinusTwo() === 10) {
    this._scoreboard[this._scoreboard.length - 2] += roll;;
  }
  if (game_length < 10 && this.rollNumber() > 1 && this.rollMinusOne() === 10) {
    this._scoreboard[this._scoreboard.length - 2] += roll;
  }

};
