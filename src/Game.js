// responsible for tracking the total score and # of frames

'use-strict';

function Game() {
  this._score = 0;
  this._rounds = [];
  this._currentRound = null;
}

Game.prototype = {

  showScore: function() {
    return this._score;
  },

  showRounds: function() {
    return this._rounds;
  },

  showCurrentRound: function() {
    return this._currentRound;
  },

  _newRound: function(round) {
    var newRound = typeof round !== 'undefined' ? round : new Round(this._pinsLeft);
    this._rounds.push(newRound);
    this._currentRound = newRound;
  },

  _getLastRound: function() {
    return this._rounds[(this._rounds.length)-2];
  },

  _updateScore: function() {
    if (this._rounds.length > 1) {
      if (this._getLastRound().showStrike() === true) {
        this._score += (this.showCurrentRound().showRawScore())
     } else if (this._getLastRound().showSpare() === true) {
       this._score += this.showCurrentRound().firstRollPinsHit()
     }
   }
    this._score += (this.showCurrentRound().showRawScore());
  },

  _roundComplete: function() {
    this._updateScore();
    this._currentRound = null;
  },

  play: function (round) {
    if (this.showCurrentRound() === null) {this._newRound(round)}
    this.showCurrentRound().roll();
    if ((this.showCurrentRound().showNumRolls() === 2)) {this._roundComplete()}
  }
}
