class Frame {
  constructor(score) {
    this.max_pins = 10
    this.score = [];
  }

  finalScore() {
    return this.score;
  };
  
  getScore() {
    return this._gameNotStarted() || this._rolledOnce() || this._rolledTwice();
  };

  rollPins(pins) {
    if (this.frameOver()) throw new Error('cannot roll more than twice'); 
    if (pins < 0) throw new Error('cannot roll negative amount of pins');
    if (pins > this.max_pins) throw new Error('cannot roll more than a maximum amount of pins');
    if (pins > this.max_pins - this._firstScore()) throw new Error('the roll input exceeds the amount of pins left');
    this.score.push(pins);
  };

  frameOver() {
    return this.score.length >= 2 || this._rolledOnce() === 'Strike!'
  }

  // private methods below

  _gameNotStarted() {
    if (this.score.length === 0) return "The ball is yet to be rolled";
  };

  _rolledOnce() {
    if (this.score.length === 1) {
      return this._firstScore() === 10 ? this._strikeMessage() : 
      (this._firstScore() === 0 ? this._gutterMessage() : this._firstScore());
    };
  };

  _rolledTwice() {
    if (this.score.length === 2) {
      return this._totalScore() === 10 ? this._spareMessage() : 
      (this._totalScore() === 0 ? this._gutterMessage() : this._totalScore());
    };
  };

  _firstScore() {
    return this.score[0];
  };

  _secondScore() {
    return this.score[1];
  };

  _totalScore() {
    return this._firstScore() + this._secondScore();
  };

  _gutterMessage() {
    return "Unlucky!";
  };

  _strikeMessage() {
    return "Strike!";
  };

  _spareMessage() {
    return "Spare!";
  };
};

module.exports = Frame
