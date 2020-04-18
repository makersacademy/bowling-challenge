function Frame() {
}

Frame.prototype.score = function score() {
  return { score1: this._score1, score2: undefined, total: undefined };
};

Frame.prototype.addScore = function addScore( score ) {
  if ( this.score1 === undefined ) {
    this._score1 = score;
  }
};
